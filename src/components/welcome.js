import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <>
    <section className="body container">
      <div className="welcome ">

        <h1>Sign in</h1>
        <p> Hello there Sign and start</p>

        <form className="Form">
          <input type="text" className="input1" />
          <input type="password" className="input1 input2 btn" />

          <Link to="/places" className="text-center">
            <button type="submit" className="btn sign_in_btn">Sign in</button>

          </Link>
        </form>

        <p className="pass_F">Forgot password?</p>

      </div>
    </section>
  </>
);

export default Welcome;
