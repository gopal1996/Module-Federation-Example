import React, { useState, useEffect } from "react";

import { registry } from "./registry";
import { LegacyTemplate } from "legacy/Legacy";

import "./style.css";

export const EditorPage = () => {
  const [angularInputValue, setAngularInputValue] = useState("");

  // useEffect(() => {
  //   let importFn = registry["mfe1"];
  //   importFn()
  //     .then((_) => {
  //       document.addEventListener(
  //         "angular-input-event",
  //         function (e: any) {
  //           setAngularInputValue(e.detail);
  //         },
  //         { capture: true }
  //       );
  //     })
  //     .catch((err) => console.error(`error loading ${err}:`));
  // }, []);

  return (
    <div className="grid">
      <div className="react">
        <img
          src="https://ngninja.com/assets/posts/reactjs-102f9693a4201e678d5b02185717f4e2127d082c2f8afc0ed378cfc6cd814741.png"
          alt="React application"
          width="350"
        />
        <hr />
        <h1>Value from angular App: "{angularInputValue}"</h1>
      </div>
      <div className="angular">
        <LegacyTemplate />
      </div>
    </div>
  );
};
