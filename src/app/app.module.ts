import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { HomeComponent } from './home/home.component';
import { FormHolderComponent } from './form-holder/form-holder.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormHolderComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
