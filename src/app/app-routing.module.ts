import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { FormHolderComponent } from './form-holder/form-holder.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "simple", component: SimpleFormComponent },
  { path: "form", component: FormHolderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
