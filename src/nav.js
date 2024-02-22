import React from 'react';
import {
    Link,
} from "react-router-dom";
import './index.css';

const Nav = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto">
                <Link to="/" className="font-semibold mr-4">ホーム</Link>
                <Link to="page_a" className="font-semibold mr-4">PageA</Link>
                <Link to="page_b" className="font-semibold mr-4">PageB</Link>
            </div>
        </nav>
    );
}

export default Nav;
