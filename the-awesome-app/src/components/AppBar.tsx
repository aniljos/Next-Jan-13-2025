'use client'

import { AppThemeContext } from "@/context/AppThemeContext";
import Link from "next/link";
import { useContext } from "react";
export default function AppBar(){

    const themeContext = useContext(AppThemeContext);

    function changeTheme(){

        if(themeContext.changeMode){
            themeContext.changeMode(themeContext.mode === "dark" ? "light" : "dark");
            console.log("mode: " + themeContext.mode);
        }
        
        
    }

    return (
        <nav className={`navbar navbar-${themeContext.mode} bg-${themeContext.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">Next.js</Link>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/gadgets">Gadgets</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/viewcart">View Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/gadgets-context">Gadgets-Context</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/viewcart-context">View Cart-Context</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/customers">Customers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/suppliers">Suppliers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/login">Login</Link>
            </li>
            <li>
                <button className="btn btn-info" onClick={changeTheme}>Switch Theme</button>
            </li>
          </ul>

        </div>
      </nav>
    );
}