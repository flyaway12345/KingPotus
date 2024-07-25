import { Component } from '@angular/core';
import { KingPotusComponent } from "./king-potus/king-potus.component";
import { InfoCardsComponent } from "./info-cards/info-cards.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [KingPotusComponent, InfoCardsComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
