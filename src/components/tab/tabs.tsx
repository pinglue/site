import React, { useState } from "react";

const TabButton = ({ activeTab, label, onClick }) => {
  const handleClick = () => onClick(label);
  return (
    <li
      style={{
        display: "inline-block",
        listStyle: "none",
        padding: "10px 15px",
        border: "2px solid red",
        borderWidth: activeTab === label ? 2 : 0,
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
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  console.log(children);
  return (
    <div>
      <ol style={{ paddingLeft: 0, borderBottom: "1px solid #ccc" }}>
        {children.map((child) => {
          const { label } = child.props;
          return (
            <TabButton
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={setActiveTab}
            />
          );
        })}
      </ol>
      <div>
        {children.map(
          (child) => child.props.label === activeTab && child.props.children
        )}
      </div>
    </div>
  );
}

export { Tab, Tabs };
