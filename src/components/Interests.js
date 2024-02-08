import React from "react";
import { useContext } from "react";
import { themeContext } from "../context/theme";

function Interests({ interests}) {
  const { theme } = useContext(themeContext)
  return (
    <div>
      <h4>Interests</h4>
      <ul className={theme}>
        {interests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
    </div>
  );
}

export default Interests;
