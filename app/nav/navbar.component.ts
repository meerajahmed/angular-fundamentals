import {Component} from "@angular/core";
import {AuthService} from "../user/user.service";
import {ISession} from "../shared/event.model";
import {EventService} from "../shared/event.service";

@Component({
  selector: "nav-bar",
  templateUrl: "app/nav/navbar.component.html",
  styles: [`
    .nav.navbar-nav {font-size: 16px;}
    li > a.active { color: #F97924; }
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {
      #searchForm { display: none}
    }
  `]
})
export class NavBarComponent {
  searchTerm: string = "";
  foundSessions : ISession[];
  constructor( private auth: AuthService, private eventService: EventService){
  }
  searchSessions(searchTerm){
    this.eventService.searchSessions(searchTerm)
      .subscribe(sessions => {
        this.foundSessions = sessions;
      });
  }
}