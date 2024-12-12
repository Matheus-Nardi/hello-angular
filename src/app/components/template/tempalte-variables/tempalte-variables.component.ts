import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-tempalte-variables',
  imports: [],
  templateUrl: './tempalte-variables.component.html',
  styleUrl: './tempalte-variables.component.scss'
})
export class TempalteVariablesComponent implements AfterViewInit {

  @ViewChild('name')
  public nameInput!: ElementRef;
  ngAfterViewInit(): void {
    console.log(this.nameInput.nativeElement.value)
  }


}
