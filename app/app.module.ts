import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {EventsAppComponent} from "./events-app.component";
import {EventsListComponent} from "./events/events-list.component";
import {EventThumbnailComponent} from "./events/event-thumbnail.component";
import {NavBarComponent} from "./nav/navbar.component";
import {EventService} from "./shared/event.service";
import {EventDetailsComponent} from "./events/event-details/event-details.component";
import {appRoutes} from "./routes";
import {RouterModule} from "@angular/router";
import {CreateEventComponent} from "./events/create-event.component";
import {Error404Component} from "./errors/404.component";
import {EventRouteActivator} from "./events/event-details/event-route-activator.service";
import {EventListResolver} from "./events/event-list-resolve.service";
import {AuthService} from "./user/user.service";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) //Module with Providers
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    EventService /* Angular injector is now aware of EventService */ ,
    EventRouteActivator,
    EventListResolver,
    AuthService,   /*providers are shared across angular modules*/
    { provide: "canDeactivateCreateEvent", useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {

}

function checkDirtyState(component: CreateEventComponent){
  if( component.isDirty ){
    return window.confirm("You have not saved this event, do you really want to cancel?");
  }
  return true;
}