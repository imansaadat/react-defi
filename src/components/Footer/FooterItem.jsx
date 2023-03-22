import React from "react";
import "./Footer.css"
const FooterItem = ({item:{title,names}}) => {
  return (
    <div className="col">
      <h4>
        {title}
      </h4>
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            <a href="/">{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItem;
