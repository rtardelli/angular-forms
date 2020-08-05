import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponentComponent } from './simple-component/simple-component.component';
import { HomeComponent } from './home/home.component';
import { FormHolderComponent } from './form-holder/form-holder.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponentComponent,
    HomeComponent,
    FormHolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
