import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {EventsAppComponent} from "./events-app.component";
import {EventsListComponent} from "./events/events-list.component";
import {EventThumbnailComponent} from "./events/event-thumbnail.component";
import {NavBarComponent} from "./nav/navbar.component";
import {EventDetailsComponent} from "./events/event-details/event-details.component";
import {appRoutes} from "./routes";
import {RouterModule} from "@angular/router";
import {CreateEventComponent} from "./events/create-event.component";
import {Error404Component} from "./errors/404.component";
import {EventRouteActivator} from "./events/event-details/event-route-activator.service";
import {EventListResolver} from "./events/event-list-resolve.service";
import {AuthService} from "./user/user.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateSessionComponent} from "./events/event-details/create-session.component";
import {SessionLisComponent} from "./events/event-details/session-list.component";
import {
  Toastr,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective,
  DurationPipe,
  EventService,
  LocationValidator,
  TOASTR_TOKEN,
  JQ_TOKEN
} from "./shared/index";
import {VotingComponent} from "./events/event-details/upvote.component";
import {VoterService} from "./events/event-details/voter.service";
import {HttpModule} from "@angular/http";


declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes) //Module with Providers
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionLisComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    VotingComponent,
    LocationValidator
  ],
  providers: [
    EventService /* Angular injector is now aware of EventService */ ,
    EventRouteActivator, // shorthand for { provide: EventRouteActivator, useClass: EventRouteActivator}
    EventListResolver,
    VoterService,
    AuthService,   /*providers are shared across angular modules*/
    { provide: "canDeactivateCreateEvent", useValue: checkDirtyState },
    { provide: TOASTR_TOKEN, useValue: toastr },
    /* useValue ->  value already exists
    *  useClass -> create instance of class
    *  useFactory -> need to provide factory function
    *  useExisting ->
    * */
    { provide: JQ_TOKEN, useValue: jQuery }
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