import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {EventService} from "../../shared/event.service";

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router ){
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const canActivate = !!this.eventService.getEvent(+route.params['id']) ;
    if(!canActivate)
      this.router.navigate(['/404']);
    return canActivate;
  }
}