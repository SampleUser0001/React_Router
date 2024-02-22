import React from "react";
import { useRoutes } from "react-router-dom";

import PageA from "./PageA";
import PageB from "./PageB";

function Contents() {
    let element = useRoutes([
        { path: "/", element: <PageA /> },
        { path: "page_a", element: <PageA /> },
        { path: "page_b", element: <PageB /> },
    ]);
    return element;
}

export default Contents;