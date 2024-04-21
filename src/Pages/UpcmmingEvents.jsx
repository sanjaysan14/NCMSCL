import React, { useState } from "react";
import "../Stylesheets/UpcmmingEvents.css";

const UpcomingEvents = () => {
  const events = [
    "Football Championship - May 15th, 2024",
    "Basketball Tournament - June 2nd, 2024",
    "Tennis Open - July 8th, 2024",
    "Swimming Competition - August 17th, 2024",
    "Athletics Meet - September 5th, 2024",
    "Football Championship - May 15th, 2024",
    "Basketball Tournament - June 2nd, 2024",
    "Tennis Open - July 8th, 2024",
    "Swimming Competition - August 17th, 2024",
    "Athletics Meet - September 5th, 2024",
  ];
  const events2 = [
    "Datatball Championship - May 15th, 2024",
    "Basketball Tournament - June 2nd, 2024",
    "Tennis Open - July 8th, 2024",
    "Swimming Competition - August 17th, 2024",
    "Athletics Meet - September 5th, 2024",
    "Datatball Championship - May 15th, 2024",
    "Basketball Tournament - June 2nd, 2024",
    "Tennis Open - July 8th, 2024",
    "Swimming Competition - August 17th, 2024",
    "Athletics Meet - September 5th, 2024",
  ];

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="upcoming-events">
      <h1 className="upcomming-event-head">Upcoming Events</h1>
      <p className="upcomming-event-para">
        NCMS Championship League A offers a wide range of programs and
        initiatives designed to enhance leadership capabilities, including
        workshops, seminars, mentorship programs, and networking events.
      </p>
      <div
        className={`marquee-container ${isHovered ? "paused" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {events.map((event, index) => (
          <div key={index} className="event">
            {event}
          </div>
        ))}
      </div>
      <div
        className={`marquee-container1 ${isHovered ? "paused" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {events2.map((event, index) => (
          <div key={index} className="event">
            {event}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
