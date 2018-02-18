import {Component, OnDestroy, OnInit} from "@angular/core";
import {EventService} from "../../shared/event.service";
import {ActivatedRoute, Params} from "@angular/router";
import {IEvent, ISession} from "../../shared/event.model";

@Component({
  templateUrl: "app/events/event-details/event-details.component.html",
  styles: [`
    .container {
      padding: 0 20px;
    }
    .event-image {
      height: 100px;
    }
    a {
      cursor: pointer;
    }
  `]
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy: string = "all";
  sortBy: string = "votes";

  constructor(private eventService: EventService,
    private route: ActivatedRoute){
  }

  ngOnInit(): void {
    /* Component is not re-initialed when we route to same route, so we need to observe route params
    * */
    this.route.params.forEach((params: Params) => {
      this.eventService.getEvent(+params['id']).subscribe((event: IEvent) => {
        this.event = event;
        /* We need to reset the component state as well
         * */
        this.addMode = false;
        this.filterBy = "all";
        this.sortBy = "votes";
      });
    });
  }

  addSession(): void{
    this.addMode = true;
  }

  saveNewSession(session:ISession): void {
    session.id = Math.max.apply(null, this.event.sessions.map( s => s.id));
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession(): void {
    this.addMode = false;
  }
  
}