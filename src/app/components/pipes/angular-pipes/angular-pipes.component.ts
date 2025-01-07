import { DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  imports: [DatePipe, UpperCasePipe, JsonPipe],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss'
})
export class AngularPipesComponent {

  public date = signal(new Date());
  public json = signal([
    {
      name: "Trembolona",
      ml: "10"
    },
    {
      name: "Testosterona",
      ml: "15"
    },
    {
      name: "Durateston",
      ml: "5"
    }
  ]);
}
