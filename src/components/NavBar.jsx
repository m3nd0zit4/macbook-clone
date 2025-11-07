import React from "react";
import { navLinks } from "../constants";

const NavBar = () => {
    return ( 
        <header>
            <nav>
                <img src="/logo.svg" alt="Apple logo" />
                <ul>
                    {navLinks.map(({ label }) => (
                        <li key={label} > 
                            <a href={`#${label.toLowerCase()}`}>{label}</a>                        
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3">
                    <button type="button">
                        <img src="/search.svg" alt="Search"/>
                    </button>
                    <button type="button">
                        <img src="/cart.svg" alt="Cart"/>
                    </button>                </div>
            </nav>
        </header>
     );
}
 
export default NavBar;