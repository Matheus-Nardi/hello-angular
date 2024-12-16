import { AsyncPipe, NgFor, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  imports: [FormsModule, NgFor, AsyncPipe, NgSwitch],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public age: number;
  constructor() {
    this.age = 0;
  }

  public loadingData$: Observable<string[]> = of(['Missão 01', 'Missão 02', 'Missão 03']).pipe(delay(3000));
  public users: Array<{ name: string, age: number }> = [];
  public pagamento = "";

  public addNewUser(valueName: string, valueAge: any) {
    return this.users.push({
      name: valueName,
      age: valueAge
    });
  }

  public clear() {
    this.users = [];
  }

  public setPayment(payment: string) {
    switch (payment) {
      case 'Pix': this.pagamento = 'Pix'; break;
      case 'Boleto': this.pagamento = 'Boleto'; break;
      case 'CC': this.pagamento = 'Cartao credito'; break;
      case 'CD': this.pagamento = 'Cartao debito'; break;
      default: this.pagamento = ''; // Nenhuma opção
    }
  }

}
