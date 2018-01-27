import {Routes} from "@angular/router";
import {EventsListComponent} from "./events/events-list.component";
import {EventDetailsComponent} from "./events/event-details/event-details.component";
import {CreateEventComponent} from "./events/create-event.component";
import {Error404Component} from "./errors/404.component";
import {EventRouteActivator} from "./events/event-details/event-route-activator.service";
import {EventListResolver} from "./events/event-list-resolve.service";
import {CreateSessionComponent} from "./events/event-details/create-session.component";

export const appRoutes: Routes = [
  { path: "events", component: EventsListComponent,
    resolve: { events: EventListResolver /* values resolved from  EventListResolver will be added to route -> snapshot -> data */ }
    },
  { path: "events/new", component: CreateEventComponent, canDeactivate: ["canDeactivateCreateEvent"] }, // order of the paths is important
  // if we place events/new route after events/:id Angular will always match events/:id instead of events/new
  { path: "events/:id", component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: "events/session/new", component: CreateSessionComponent },
  { path: "404", component: Error404Component},
  { path: "user", loadChildren: "app/user/user.module#UserModule"},
  { path: "", redirectTo: "/events", pathMatch: "full" }
];