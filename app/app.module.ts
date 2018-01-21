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
    NavBarComponent
  ],
  providers: [EventService], /* Angular injector is now aware of EventService */
  bootstrap: [EventsAppComponent]
})
export class AppModule {

}
