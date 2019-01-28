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

  let breadcrumbList = null;
  if (props.breadcrumbs.length > 0) {
    breadcrumbList = props.breadcrumbs.map((element, index) =>
      <li
        onClick={(e) => props.breadcrumbClickHandler(index, e)}
        key={index}
        >
        {index === props.breadcrumbs.length-1 ? element : element + ' >>'}
      </li>
    );
  }

  return (
    <div className="App-body">
      <ul className="breadcrumbs-list">
        {breadcrumbList}
      </ul>
      <ul>
        {listconts}
      </ul>
    </div>
  );
}

export default body;
