import { Routes } from '@angular/router';
import {IndexComponent} from './pages/index/index.component';
import {EventsComponent} from './pages/events/events.component';
import {CommitteeComponent} from './pages/committee/committee.component';
import {SponsorComponent} from './pages/sponsor/sponsor.component';
import {AboutComponent} from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'events', component: EventsComponent },
  { path: 'committee', component: CommitteeComponent },
  { path: 'sponsor', component: SponsorComponent },
  { path: 'about', component: AboutComponent },
];
