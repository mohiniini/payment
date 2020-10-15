import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { SubmitcardComponent } from './submitcard/submitcard.component';

const routes: Routes = [

  {
    path:'' , component: CreditcardComponent
  },
  {
    path:'submitdetails' , component: SubmitcardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
