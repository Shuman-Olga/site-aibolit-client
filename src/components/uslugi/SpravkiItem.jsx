import React from "react";
import { NavLink } from "react-router-dom";

import { dataSpravki } from "../../data/dataSpravkiItem";

export default function SpravkiItem() {
  return (
    <div id="spravki">
      {dataSpravki.map((item) => (
        <div key={item.id} className="spravka-item w-75 mb-3 p-3 mx-auto ">
          <NavLink
            to={`/uslugi-i-ceny/medicinskie-spravki-rebenku/${item.path}/`}
            className="nav-link"
            target="_top"
            rel="noopener noreferrer"
          >
            <div className="text-center mb-2">
              <h3>{item.title}</h3>
            </div>

            <div className="d-flex block-foto">
              <div>
                <img
                  src={require(`../../assets/img/${item.img}`)}
                  alt="foto"
                  title={item.title}
                  width="180"
                />
              </div>
              <div className="p-3">
                <p>{item.description}</p>
              </div>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}
