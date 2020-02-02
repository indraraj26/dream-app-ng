import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TaskBindingComponent } from "./task-binding/task-binding.component";
import { TwoWayBindingComponent } from "./two-way-binding/two-way-binding.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { FormTerminalComponent } from './form-terminal/form-terminal.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
@NgModule({
  declarations: [AppComponent, TaskBindingComponent, TwoWayBindingComponent, 
    StructuralDirectivesComponent, 
    FormTerminalComponent, 
    TemplateDrivenFormsComponent, ReactiveFormsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
