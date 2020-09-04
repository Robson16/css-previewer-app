import React, { useState, useEffect } from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";

import "./styles.css";

function BorderRadius() {
  const [borderTL, setBorderTL] = useState(0);
  const [borderTR, setBorderTR] = useState(0);
  const [borderBL, setBorderBL] = useState(0);
  const [borderBR, setBorderBR] = useState(0);
  const [outputCSS, setOutputCSS] = useState("");

  useEffect(() => {
    let output = ``;

    if (borderTL || borderTR || borderBL || borderBR) {
      output = `border-radius: ${borderTL}% ${borderTR}% ${
        borderTL !== borderBR ? `${borderBR}%` : ""
      } ${borderBL !== borderTR ? `${borderBL}%` : ""}`;
      output = output.trim() + ";";
    } else {
      output = `border-radius: 0%;`;
    }

    setOutputCSS(output);
  }, [borderTL, borderTR, borderBL, borderBR]);

  return (
    <div id="page-border-radius" className="container">
      <PageHeader title="Border Radius" />

      <main>
        <div id="border-previewer-grid">
          <Input
            type="number"
            min="0"
            max="100"
            name="input-tl"
            label="Top Left"
            value={borderTL}
            onChange={(e) => {
              setBorderTL(Number(e.target.value));
            }}
          />
          <Input
            type="number"
            min="0"
            max="100"
            name="input-tr"
            label="Top Right"
            value={borderTR}
            onChange={(e) => {
              setBorderTR(Number(e.target.value));
            }}
          />
          <Input
            type="number"
            min="0"
            max="100"
            name="input-bl"
            label="Bottom Left"
            value={borderBL}
            onChange={(e) => {
              setBorderBL(Number(e.target.value));
            }}
          />
          <Input
            type="number"
            min="0"
            max="100"
            name="input-br"
            label="Bottom Right"
            value={borderBR}
            onChange={(e) => {
              setBorderBR(Number(e.target.value));
            }}
          />

          <div
            className="shape"
            style={{
              borderTopLeftRadius: borderTL + "%",
              borderTopRightRadius: borderTR + "%",
              borderBottomLeftRadius: borderBL + "%",
              borderBottomRightRadius: borderBR + "%",
            }}
          ></div>

          <Textarea
            name="output-css"
            label="Resulting CSS"
            value={outputCSS}
            readOnly
          />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default BorderRadius;
