import React from 'react';

const header = (props) =>  {
  let breadcrumbItems = [];
  if (props.breadcrumbs.length > 0) {
    breadcrumbItems = props.breadcrumbs.map((element, index) =>
      <li
        onClick={(e) => props.breadcrumbClickHandler(index, e)}
        key={index}
        >
        {element}
      </li>
    );
  }

  breadcrumbItems.unshift(
    <li
      onClick={(e) => props.breadcrumbClickHandler(-1, e)}
      key={-1}
      >
      Top
    </li>
  )

  let breadcrumbList = <></>;
  if (props.breadcrumbs.length>0) {
    breadcrumbList = (
      <ul className="breadcrumbs-list">
        {breadcrumbItems}
      </ul>
    )
  }

  return (
    <header className="App-header">
      <h1>{props.title}</h1>
      {breadcrumbList}
    </header>
  )
};

export default header;
