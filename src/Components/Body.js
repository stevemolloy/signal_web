import React from 'react';
import isObject from '../utilities';

const body = (props) =>  {
  if (!props.data) return <></>;

  let listconts;
  if (isObject(props.data)) {
    const sig_objs = Object.keys(props.data);
    listconts = sig_objs.map((obj) =>
      <li
        onClick={(e) => props.clickHandler(obj, e)}
        key={obj}
      >
          {obj}
      </li>
    );
  } else {
    listconts = <li>{props.data}</li>;
  }

  return (
    <div className="App-body">
      <ul>
        {listconts}
      </ul>
    </div>
  );
}

export default body;
