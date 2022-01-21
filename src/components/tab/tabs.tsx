import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveTab } from "../../store/doc";

import { RootState } from "../../store/store";

const TabButton = ({ activeTabId, id, label, onClick }) => {
  const handleClick = () => onClick(label);
  return (
    <li
      style={{
        display: "inline-block",
        listStyle: "none",
        padding: "10px 15px",
        border: "2px solid red",
        borderWidth: activeTabId === id ? 2 : 0,
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

function Tabs({ children }) {
  const dispatch = useDispatch();
  const activeTabId = useSelector(
    (state: RootState) => state.entities.doc.activeTabId
  );

  useEffect(() => {
      if (!activeTabId) dispatch(changeActiveTab(children[0].props.id))
  },[])

  return (
    <div>
      <ol style={{ paddingLeft: 0, borderBottom: "1px solid #ccc" }}>
        {children.map((child) => {
          const { label, id } = child.props;
          return (
            <TabButton
              key={label}
              id={id}
              activeTabId={activeTabId}
              label={label}
              onClick={() => dispatch(changeActiveTab(id))}
            />
          );
        })}
      </ol>
      <div>
        {children.filter(
          (child) => child.props.id === activeTabId && child.props.children
        )}
      </div>
    </div>
  );
}

export { Tab, Tabs };
