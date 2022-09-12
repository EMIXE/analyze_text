import React, {createContext, useState} from "react";
import {ContentTypes} from "../types";

const ContentContext = createContext(ContentTypes[0]);

export default ContentContext;
// export default function ContentContextProvider() {
//     const [contentType, setContentType] = useState(ContentTypes[0])
//
//     return(
//         <ContentContext.Provider>
//
//     )
//
// }