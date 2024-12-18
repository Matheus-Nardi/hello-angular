import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TempalteVariablesComponent } from './components/template/tempalte-variables/tempalte-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponent, TemplateBindingComponent, TempalteVariablesComponent, TemplateControlFlowComponent, TemplateDeferrableViewsComponent],
  styles: [`
    h1{
      color: purple;
    }
    `],
  template: `
  <!-- <router-outlet /> 
  <app-new-component/> -->
  
  <!-- <app-template-binding/>
  <app-tempalte-variables/> -->
  <!-- <app-template-control-flow/> -->
   <app-template-deferrable-views/>
  ` ,
})
export class AppComponent {

}

