import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {EventsAppComponent} from "./events-app.component";
import {EventsListComponent} from "./events/events-list.component";
import {EventThumbnailComponent} from "./events/event-thumbnail.component";
import {NavBarComponent} from "./nav/navbar.component";
import {EventService} from "./shared/event.service";

@NgModule({
  imports: [BrowserModule],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  providers: [EventService], /* Angular injector is now aware of EventService */
  bootstrap: [EventsAppComponent]
})
export class AppModule {

}
