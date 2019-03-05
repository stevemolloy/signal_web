import React from 'react';
import { isObject, buildDataTable } from '../utilities';

const body = (props) =>  {
  if (!props.data) return <></>;

  const lastBreadcrumb = props.breadcrumbs[props.breadcrumbs.length-1];
  let contents;
  if (isObject(props.data) & lastBreadcrumb!=='signal_table') {
    const sig_objs = Object.keys(props.data);
    const inner = sig_objs.map((obj) =>
      <li onClick={(e) => props.clickHandler(obj, e)} key={obj}>
          {obj}
      </li>
    );
    contents = <ul>{inner}</ul>
  } else if (lastBreadcrumb==='signal_table') {
    contents = buildDataTable(props.data);
  } else {
    contents = props.data;
  }

  return (
    <div className="App-body">
      {contents}
    </div>
  );
}

export default body;
