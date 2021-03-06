import { EventsListComponent } from './app/events/events-list.component';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';
import { CreateEventComponent } from './app/events/create-event.component'
import { Error404Component } from './app/errors/404.component'
import { EventRouteActivator } from './app/events/event-details/event-route-activator.service'

import { Routes } from '@angular/router'

export const appRoutes = [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
   {path: 'user', loadChildren: './app/user/user-module#UserModule'},
]
