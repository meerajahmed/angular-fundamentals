import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {EventService} from "../shared/event.service";

@Injectable()
export class EventListResolver implements Resolve<any> {

  constructor( private eventService: EventService ){
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.eventService.getEvents();
  }

}