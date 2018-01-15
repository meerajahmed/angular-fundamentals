import {Component} from "@angular/core";

@Component({
  selector: "events-list",
  // path is relative to index.html
  /*templateUrl: "app/events/events-list.component.html",*/
  template: `
      <div>
          <h1>Upcoming Angular 2 Events</h1>
          <hr>
          <!-- when eventClickeventDataFrom event is fired on event-thumbnail component execute handleEventClick method -->
          <event-thumbnail [eventDataTo]="eventDataFrom" (eventClickFrom)="handleEventClick($event)"></event-thumbnail>
      </div>
  `
})
export class EventsListComponent {
  eventDataFrom = {
    id: 1,
    name: "Angular Connect",
    date: "9/26/2018",
    time: "10:00 am",
    price: 599.99,
    imageUrl: "/app/assets/images/angularconnect-shield.png",
    location: {
      address: "1057 DT",
      city: "London",
      country: "England"
    }
  };

  handleEventClick(data) {
    console.log(data)
  }
}