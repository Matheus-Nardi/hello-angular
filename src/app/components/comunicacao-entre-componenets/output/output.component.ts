import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {

  @Output() public outputName = new EventEmitter<string>();

  @Output() public outputAge = new EventEmitter<string>();


  public sendOutputName() {
    return this.outputName.emit("Arroz com feijão");
  }

  public sendOutputAge() {
    return this.outputAge.emit("23");
  }
}
