import { createContext, useState } from "react";

const PantallasContext = createContext();

export const PantallasProvider = ({ children }) => {

    const [name, setName] = useState();

    return (
        <PantallasContext.Provider value={{ name, setName }}>
            {children}
        </PantallasContext.Provider>
    )
}

export default PantallasContext;