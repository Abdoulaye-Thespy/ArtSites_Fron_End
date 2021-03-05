import React from 'react';
import head from '../back4.PNG';

const Aside = () => (
  <>
    <div className="fixed">
      <section className="body container-fluid">
        <img src={head} className="img-circle head" alt="Cinque Terre" />
        <h4>TheSpy</h4>
        <p>@TheSpy</p>
      </section>

      <section className="body container-fluid ">
        <p>Dashboard</p>
        <p>Notification</p>
        <p>@TheSpy</p>
        <p>Messages</p>
        <p>Friends</p>
      </section>

      <section className="body container-fluid">
        <p>Help</p>
        <p>Logout</p>
      </section>
    </div>
  </>
);

export default Aside;
