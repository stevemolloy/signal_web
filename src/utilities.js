import React from 'react';

const isObject = (val) => {
    if (val === null) {
      return false;
    }
    return (
      (typeof val === 'function') || (typeof val === 'object')
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

export { isObject, buildDataTable };
