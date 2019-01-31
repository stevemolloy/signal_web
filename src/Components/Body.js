import React from 'react';
import isObject from '../utilities';

const body = (props) =>  {
  if (!props.data) return <></>;

  let contents;
  if (isObject(props.data) & props.breadcrumbs[props.breadcrumbs.length-1]!=='signal_table') {
    const sig_objs = Object.keys(props.data);
    let inner = sig_objs.map((obj) =>
      <li
        onClick={(e) => props.clickHandler(obj, e)}
        key={obj}
      >
          {obj}
      </li>
    );
    contents = <ul>{inner}</ul>
  } else if (props.breadcrumbs[props.breadcrumbs.length-1]==='signal_table') {
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

const buildDataTable = (data) => {
  const rowHeadings = Object.keys(data);
  const rows = rowHeadings.map((obj) => {
    return (
      <tr key={obj}>
        <td>{obj}</td>
        <td>{data[obj].type}</td>
        <td>{data[obj].tag_expression}</td>
      </tr>
    )
  })
  return (
    <table>
      <thead>
        <tr>
          <th>Signal</th>
          <th>Type</th>
          <th>Tag expression</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default body;
