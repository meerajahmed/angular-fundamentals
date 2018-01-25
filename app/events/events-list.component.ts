import {Component, OnInit} from "@angular/core";
import {EventService} from "../shared/event.service";
import {ActivatedRoute} from "@angular/router";
import {IEvent} from "../shared/event.model";

@Component({
  selector: "events-list",
  // path is relative to index.html
  /*templateUrl: "app/events/events-list.component.html",*/
  template: `
      <div>
          <h1>Upcoming Angular 2 Events</h1>
          <hr>
          <!-- when eventClickeventDataFrom event is fired on event-thumbnail component execute handleEventClick method -->
          <div *ngFor="let eventDataFrom of events" class="col-md-5">
              <event-thumbnail [eventDataTo]="eventDataFrom"  ></event-thumbnail>
          </div>
      </div>
  `
})
export class EventsListComponent implements OnInit {

  events: IEvent[];

  constructor( private eventService: EventService, private routes: ActivatedRoute ){
  }
  // called after component first OnChange
  ngOnInit(): void {
    this.events  = this.routes.snapshot.data["events"];
  }

  handleEventClick(data) {
    console.log(data)
  }

}