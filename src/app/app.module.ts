import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './componentes/persona/persona.component';
import { PersonasComponent } from './componentes/personas/personas.component';
import { FormsModule } from '@angular/forms';
import { PersonaFormComponent } from './componentes/persona-form/persona-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    PersonasComponent,
    PersonaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
