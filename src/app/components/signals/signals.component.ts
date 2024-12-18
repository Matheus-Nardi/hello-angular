import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

  public firstName = signal('Matheus ');
  public lastName = signal('Nardi');

  public fullName = computed(() => {
    this.firstName() + this.lastName();
  });

  public array = signal(['Pera', 'Maça']);

  constructor() {
    effect(() => {
      console.log(this.firstName());
      console.log(this.array());
    })
  }

  public updateName() {
    return this.firstName.set("Alexandre");
  }

  public updateArray(value: string) {
    this.array.update((oldValue: Array<string>) => {
      console.log(oldValue);
      return [...oldValue, value];
    })
  }
}
