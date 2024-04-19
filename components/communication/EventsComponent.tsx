import styles from './page.module.scss';
import React from 'react';
import getEventContent from './data/getEventContent';
import EventItemComponent from './EventItemComponent';

export default function EventsComponent() {
  const eventContent = getEventContent();

  return (
    <div className={styles.container}>
      <header>
        <h2>Events</h2>
      </header>
      <section className={styles.event}>
        <h2>Study Now Event</h2>
        {eventContent.map((content, i) => {
          return <EventItemComponent {...content} key={i}></EventItemComponent>;
        })}
      </section>
    </div>
  );
}
