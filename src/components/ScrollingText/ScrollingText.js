import React from 'react';
import './ScrollingText.css';

export const ScrollingText = () => {
  return (
    <div className="fade">
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <h1>Star Wars Episode IV: A New Hope</h1>
            <p>1977-05-25</p>
          </div>
          <p>
            It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a
            hidden base, have won\r\ntheir first victory against\r\nthe evil
            Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to
            steal secret\r\nplans to the Empire's\r\nultimate weapon, the
            DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto
            destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister
            agents, Princess\r\nLeia races home aboard her\r\nstarship,
            custodian of the\r\nstolen plans that can save her\r\npeople and
            restore\r\nfreedom to the galaxy....
          </p>
        </div>
      </section>
    </div>
  );
};
