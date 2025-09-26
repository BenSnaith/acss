import { Component } from '@angular/core';
import {EventCardComponent} from '../../components/event-card/event-card.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    EventCardComponent
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

}
