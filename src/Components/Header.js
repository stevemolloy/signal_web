import React from 'react';

const header = (props) =>  {
  const breadcrumbs = props.breadcrumbs;
  let breadcrumbItems = [];
  if (breadcrumbs.length > 0) {
    breadcrumbItems = breadcrumbs.map((element, index) =>
      <li onClick={(e) => props.breadcrumbClickHandler(index, e)}
        key={index} >
        {element}
      </li>
    );
  }

  breadcrumbItems.unshift(
    <li onClick={(e) => props.breadcrumbClickHandler(-1, e)} key={-1} >
      Top
    </li>
  )

  let breadcrumbList = <p> </p>;
  if (breadcrumbs.length>0) {
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
