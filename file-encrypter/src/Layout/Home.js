import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
        <nav class="navbar navbar-light bg-light justify-content-between">
             <a class="navbar-brand">File Encrypter</a>
             <form class="form-inline">
                <Link class="form-control mr-sm-2" to={'/SignUp'} >Sign Up</Link>
                <Link class="form-control mr-sm-2" to={'/Login'} >Sign In</Link>
            </form>
        </nav>
      <div>Home</div>
    </>
  );
}
