import {Component, OnInit} from "@angular/core";
import {EventService} from "../../shared/event.service";
import {ActivatedRoute} from "@angular/router";
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

  constructor(private eventService: EventService,
    private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(
      +this.route.snapshot.params["id"]
    );
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