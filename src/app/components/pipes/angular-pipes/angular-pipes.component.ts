import { AsyncPipe, CommonModule, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, PercentPipe, registerLocaleData, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, LOCALE_ID, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { CustomStringPipe } from '../../../pipes/custom-string.pipe';


@Component({
  selector: 'app-angular-pipes',
  imports: [DatePipe, UpperCasePipe, JsonPipe, AsyncPipe, CurrencyPipe, DecimalPipe, PercentPipe, FormsModule, CustomStringPipe],
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

  public loadingData$: Observable<string[]> = of(['Missão 01', 'Missão 02', 'Missão 03']).pipe(delay(3000));

  public capital = signal<number>(0);
  public juros = signal<number>(0);
  public tempo = signal<number>(0);
  public resultado = signal<number>(0);

  public calcular() {
    if (this.capital && this.juros && this.tempo) {
      return this.resultado.set(this.capital() * (this.juros()/100) * this.tempo());
    }
  }

  public word = signal<string>('');
}
