import React from "react";

import headerLogo from "../../images/logo.svg";
import header from "./header.module.css";

import { Button } from "../button/Button";

export const Header = () => {
  const menuItems = [
    {
      name: "О нас",
      href: "#",
    },
    {
      name: "Услуги",
      href: "#",
    },
    {
      name: "Аренда",
      href: "#",
    },
  ];
  return (
    <header className={header.header}>
      <div className={header.container}>
        <a href="/">
          <img src={headerLogo} alt="Velozar logo" />
        </a>

        <nav>
          <ul className={header.navigation}>
            {menuItems.map((item) => (
              <li className={header.navigation_item}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <Button href="#" text="Связаться" />
      </div>
    </header>
  );
};
