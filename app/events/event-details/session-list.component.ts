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
  @Input()
  sortBy: string;

  visibleSessions: ISession[];

  ngOnChanges(changes: SimpleChanges): void {
    if( this.sessions ){
      if('filterBy' in changes){
        this.filterSession(this.filterBy);
      }
      if('sortBy' in changes){
        this.sortBy === "name"
          ? this.visibleSessions.sort(sortByNameAsc)
          : this.visibleSessions.sort(sortByVote);
      }
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

  toggleVote(session: ISession) {
    if( this.userHasVotes() ){
      this.voterService.deleteVoter(session, this.auth.currentuser.userName);
    } else {
      this.voterService.addVoter(session, this.auth.currentuser.userName)
    }
    if( this.sortBy === "votes" ){
      this.visibleSessions.sort(sortByVotesDesc)
    }
  }

  userHasVotes(session: ISession): boolean {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }
}

function sortByNameAsc(s1: ISession, s2: ISession){
  if(s1.name > s2.name) return 1;
  else if(s1.name === s2.name) return 0;
  else return -1;
}

function sortByVote(s1: ISession, s2: ISession){
  return s2.voters.length - s1.voters.length;
}