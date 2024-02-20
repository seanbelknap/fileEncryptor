import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand">File Encrypter</a>
      </nav>
      <body class="text-center d-flex justify-content-center align-content-center">
        <form class="form-signin mt-5">
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <Link
            to={"/FileUploader"}
            class="w-100 btn btn-lg btn-primary mb-3"
            type="submit"
          
          >
            Sign in
          </Link>
          <Link to={"/SignUp"} class="link-opacity-50">
            Sign Up
          </Link>
        </form>
      </body>
    </>
  );
}
