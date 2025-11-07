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
                            <a href={label}>{label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3">
                    <botton>
                        <img src="/search.svg" alt="Search"/>
                    </botton>
                    <botton>
                        <img src="/cart.svg" alt="Cart"/>
                    </botton>
                </div>
            </nav>
        </header>
     );
}
 
export default NavBar;