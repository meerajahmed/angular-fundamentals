import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {ISession} from "../../shared/event.model";

@Component({
  selector: "session-list",
  templateUrl: "app/events/event-details/session-list.component.html"
})
export class SessionLisComponent implements OnChanges {

  @Input()
  sessions: ISession[];
  @Input()
  filterBy: string;

  visibleSessions: ISession[];

  ngOnChanges(changes: SimpleChanges): void {
    if( this.sessions ){
      this.filterSession(this.filterBy);
    }
  }

  filterSession( filter ){
    if( filter === "all" ){
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLowerCase() === filter;
      });
    }
  }
}