import React from 'react';

const Welcome = () => (
  <>
    <section className="body container">
      <div className="welcome ">

        <h1>Sign in</h1>
        <p> Hello there Sign and start</p>

        <form>
          <input type="email" className="input1" />
          <input type="password" />
          <button type="submit" className="btn btn-outline-primary">Sign in</button>
        </form>

      </div>
    </section>
  </>
);

export default Welcome;
