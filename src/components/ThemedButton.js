import React, { useContext } from "react";
import { themeContext } from "../context/theme";

function ThemedButton({ theme, ...props }) {
  const { theme } = useContext(themeContext);

  return <button className={theme} {...props} />;
}

export default ThemedButton;
