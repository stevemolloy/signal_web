import React from 'react';

const body = (props) =>  {
  if (!props.data) {
    return <></>;
  }
  const pnvlvs = Object.keys(
    props.data.valve.pneumatic
  );
  const listconts = pnvlvs.map((valve) =>
    <li>{valve}</li>
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
