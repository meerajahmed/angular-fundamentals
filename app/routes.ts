import {Routes} from "@angular/router";
import {EventsListComponent} from "./events/events-list.component";
import {EventDetailsComponent} from "./events/event-details/event-details.component";
import {CreateEventComponent} from "./events/create-event.component";

export const appRoutes: Routes = [
  { path: "events", component: EventsListComponent },
  { path: "events/new", component: CreateEventComponent }, // order of the paths is important
  // if we place events/new route after events/:id Angular will always match events/:id instead of events/new
  { path: "events/:id", component: EventDetailsComponent },
  { path: "", redirectTo: "/events", pathMatch: "full" }
];