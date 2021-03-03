import React from 'react';

const Welcome = () => (
  <>
    <section className="body container">
      <div className="welcome ">

        <h1>Sign in</h1>
        <p> Hello there Sign and start</p>

        <form className="Form">
          <input type="text" className="input1" />
          <input type="password" className="input1 input2 btn" />
          <button type="submit" className="btn sign_in_btn">Sign in</button>
        </form>

        <p className="pass_F">Forgot password?</p>

      </div>
    </section>
  </>
);

export default Welcome;
