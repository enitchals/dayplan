import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return (
      <div className="Calendar">
        <div className="Box">
          <h1>Today's Schedule</h1>
          <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=DAY&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=lambdaschool.com_cuci175t3l691o5olggr0qqkpk%40group.calendar.google.com&amp;color=%232F6309&amp;ctz=America%2FLos_Angeles" frameborder="0" width="350px" height="600px" scrolling="no"></iframe>
          <p></p>
        </div>
      </div>
    );
  }
}

export default Calendar;
