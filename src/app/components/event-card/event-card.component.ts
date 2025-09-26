import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
  @Input({ required: true }) image!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
}
