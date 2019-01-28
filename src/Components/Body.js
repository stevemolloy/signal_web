import React from 'react';

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
        className="breadcrumbs-list"
        key={index}
        >
        {index === props.breadcrumbs.length-1 ? element : element + ' >>'}
      </li>
    );
  }

  const backBtn = (
    <button onClick={(e) => props.backClickHandler(e)}>
      Back
    </button>
  )

  return (
    <div className="App-body">
      <ul>
        {breadcrumbList}
      </ul>
      {props.needBackBtn ? backBtn : (<></>)}
      <ul>
        {listconts}
      </ul>
    </div>
  );
}

const isObject = (val) => {
    if (val === null) {
      return false;
    }
    return (
      (typeof val === 'function') || (typeof val === 'object')
    );
}

export default body;
