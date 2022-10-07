import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailSubscribeComponent } from './email-subscribe/email-subscribe.component';

const routes: Routes = [
  { path: 'email-subscribe', component: EmailSubscribeComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
