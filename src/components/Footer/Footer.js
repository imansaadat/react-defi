import React from "react";
import "./Footer.css";
import FooterItem from "./FooterItem";
const Footer = () => {
  const FooterLinks = [
    {
      title: "Products",
      names: ["App", "Analytics", "Token Lists", "Defi"],
    },
    {
      title: "Developers",
      names: ["App", "Analytics", "Token Lists", "Defi"],
    },
    {
      title: "Governance",
      names: ["App", "Analytics", "Token Lists", "Defi"],
    },
    {
      title: "Community",
      names: ["App", "Analytics", "Token Lists", "Defi"],
    },
    {
      title: "About",
      names: ["App", "Analytics", "Token Lists", "Defi"],
    },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_content">
            {FooterLinks.map((item, index) => (
              <FooterItem key={index} item={item}/>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
