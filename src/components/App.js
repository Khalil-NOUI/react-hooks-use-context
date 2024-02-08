import React, { useContext, useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { userContext, userProvider } from "../context/user";
import { themeContext, themeProvider } from "../context/theme";

function App() {

  

  return (
    <main>
      <themeProvider>
      <userProvider>
        <Header/>
        <Profile/>
      </userProvider>
      </themeProvider>
    </main>
  );
}

export default App;
