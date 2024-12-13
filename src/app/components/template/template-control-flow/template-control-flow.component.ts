import { AsyncPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  imports: [FormsModule, NgFor, AsyncPipe],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public age: number;
  constructor() {
    this.age = 0;

  }

  public loadingData$: Observable<string[]> = of(['Missão 01', 'Missão 02', 'Missão 03']).pipe(delay(3000));

}
