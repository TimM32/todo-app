import React, { useState } from "react";

export const SettingsContext = React.createContext()

funstion SettingsProvider({ children }){
    const [displayCount, setDisplayCount] = useState(3);
    const [showComplete, setShowComplete] = useState(false);
    const [sort, setSort] = useState('difficulty');

    const values = {
        displayCount,
        showComplete,
        sort
    }
}