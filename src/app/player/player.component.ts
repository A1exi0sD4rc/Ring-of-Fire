import { Component, input } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  @Input() name: string|undefined;
  @Input() playerActiv: boolean = false;
}
