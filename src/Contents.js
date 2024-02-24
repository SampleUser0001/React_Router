import React from "react";
import { useRoutes } from "react-router-dom";

import PageA from "./PageA";
import PageB from "./PageB";
import PageC from "./PageC";

function Contents() {
    let element = useRoutes([
        { path: "/", element: <PageA /> },
        { path: "page_a", element: <PageA /> },
        { path: "page_b", element: <PageB /> },
        { path: "page_c", element: <PageC /> },
    ]);
    return element;
}

export default Contents;