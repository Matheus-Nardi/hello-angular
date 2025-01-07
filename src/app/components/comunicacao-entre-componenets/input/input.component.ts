import { Component, Input, signal } from '@angular/core';

function toUpperCase(value: string) {
  return value.toUpperCase();
}

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  public name = signal("Sem dados");
  public age = signal("0");
  @Input(
    {
      required: true,
      transform: toUpperCase
    }
  ) set inputName(value: string) {
    this.name.set(value);
  }

  @Input({ required: true }) set inputAge(value: string) {
    this.age.set(value);
  }
}
