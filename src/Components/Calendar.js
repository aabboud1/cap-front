import React, {Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default class DemoApp extends Component {
  
  
    render() {

        var calendar = new Calendar(calendarEl, {

            eventClick: function(info) {
              alert('Event: ' + info.event.title);
              alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
              alert('View: ' + info.view.type);
          
              // change the border color just for fun
              info.el.style.borderColor = 'red';
            }
          
          });


    return (
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
    )
  }
}