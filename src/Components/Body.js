import React from 'react';

const body = (props) =>  {
  if (!props.data) return <></>;

  const sig_objs = Object.keys(props.data);
  const listconts = sig_objs.map((valve) =>
    <li
      onClick={(e) => props.clickHandler(valve, e)}
      key={valve}
    >
        {valve}
    </li>
  );

  return (
    <div className="App-body">
      <ul>
        {listconts}
      </ul>
    </div>
  );
}

export default body;
