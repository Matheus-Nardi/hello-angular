import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  imports: [CommonModule, FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name: string = "Matheus Alexandre";
  public age: number = 18;
  public isDisable = true;
  public imgSrc = "https://64.media.tumblr.com/37fc00f1b9b8d2a07ad7a54de830577c/8ad09dec9554fc66-af/s540x810/0b4c16ce38696fe296555991e6aac659c2725f4c.jpg";
  public maxW = 100;
  public i = 0;

  public isOver18 = this.age >= 18 ? 'green' : 'red';

 
  public calculateAge(birthYear: number): number {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear; 
}

  public add(){
    this.i = this.i + 1;
  }

  public remove(){
   this.i = this.i - 1;
  }

  public changeColor(): string{
    if(this.i % 5 == 0)
      return "purple";
    else
      return "cadetblue";
  }

  public onKeyDown(event: Event){
    return console.log(event);
  }

  public onMouseMove(event: MouseEvent){
    return console.log({
      clientX: event.clientX,
      clientY: event.clientY,
    });
  }
}
