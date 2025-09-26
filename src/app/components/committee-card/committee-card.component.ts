import {Component, Input} from '@angular/core';
import {EventCardComponent} from '../event-card/event-card.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-committee-card',
  standalone: true,
  imports: [
    EventCardComponent,
    NgOptimizedImage
  ],
  templateUrl: './committee-card.component.html',
  styleUrl: './committee-card.component.css'
})
export class CommitteeCardComponent {
  @Input({ required: true }) image!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) position!: string;
}
