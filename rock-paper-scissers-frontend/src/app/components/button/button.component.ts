import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() title!: string;
  @Output() btnOnClick = new EventEmitter();

  onClick() {
    this.btnOnClick.emit();
  }
}
