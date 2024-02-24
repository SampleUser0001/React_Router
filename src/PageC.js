import React from "react";
import { useLocation } from "react-router-dom";
import './index.css';

function PageC() {
    // 遷移元(nav.js)で渡されたstateを取得する
    const message = useLocation().state.message;
    return (
        <div className="container mx-auto mt-10">
            <h1>Page C</h1>
            <p>{message}</p>
        </div>
    );
}

export default PageC;