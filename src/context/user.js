import React, { createContext, useState } from "react";

export const userContext = createContext();

export function userProvider({ children }) {
    const [user, setUser] = useState(null)

    const currentUser = {
        name: "Duane",
        interests: ["Coding", "Biking", "Words ending in 'ing'"],
      };

    return (
        <userContext.Provider value = {{user, setUser}} >
            {children}
        </userContext.Provider>
    )
}