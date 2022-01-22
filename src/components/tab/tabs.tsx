import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveTab, addTab } from "../../store/doc";

import { RootState } from "../../store/store";

const TabButton = ({ isActive, label, onClick }) => {
  const handleClick = () => onClick(label);
  return (
    <li
      style={{
        display: "inline-block",
        listStyle: "none",
        padding: "10px 15px",
        border: "2px solid red",
        borderWidth: isActive ? 2 : 0,
      }}
      onClick={handleClick}
    >
      {label}
    </li>
  );
};

function Tab({ children }) {
  return children;
}

function TabContainer({ children, id }) {
  const dispatch = useDispatch();
  const docName = useSelector(
    (state: RootState) => state.entities.doc.activeDoc
  );
  const currentTab = useSelector((state: RootState) => state.entities.doc.list)
    .find((i) => i.name === docName)
    .tabs.find((i) => i.id === id);

  useEffect(() => {
    dispatch(addTab(docName, id));
  }, []);

  return (
    <div>
      <ol style={{ paddingLeft: 0, borderBottom: "1px solid #ccc" }}>
        {children.map((child, index) => {
          const { label } = child.props;
          return (
            <TabButton
              key={label}
              isActive={currentTab?.activeIndex === index}
              label={label}
              onClick={() =>
                dispatch(changeActiveTab(docName, currentTab.id, index))
              }
            />
          );
        })}
      </ol>
      <div>
        {children.filter(
          (child,index) => index === currentTab?.activeIndex && child.props.children
        )}
      </div>
    </div>
  );
}

export { Tab, TabContainer };
