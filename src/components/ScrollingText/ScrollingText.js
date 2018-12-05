import React from 'react';
import './ScrollingText.css';

export const ScrollingText = ({
  title,
  release_date,
  opening_crawl,
  episode_id
}) => {
  return (
    <div className="fade">
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <h1>
              Star Wars {episode_id}: {title}
            </h1>
            <p>{release_date}</p>
          </div>
          <p>{opening_crawl}</p>
        </div>
      </section>
    </div>
  );
};
