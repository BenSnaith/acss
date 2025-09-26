import { Component } from '@angular/core';
import {EventCardComponent} from "../../components/event-card/event-card.component";
import {CommitteeCardComponent} from '../../components/committee-card/committee-card.component';

@Component({
  selector: 'app-committee',
  standalone: true,
  imports: [
    EventCardComponent,
    CommitteeCardComponent
  ],
  templateUrl: './committee.component.html',
  styleUrl: './committee.component.css'
})
export class CommitteeComponent {

}
