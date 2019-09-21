import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RestuarantComponent } from './pages/restuarant/restuarant.component';
import { RestuarantMenuComponent } from './pages/restuarant-menu/restuarant-menu.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { WindowmodelComponent } from './pages/windowmodel/windowmodel.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent, pathMatch: "full" },
  { path: 'register', component: RegisterComponent },
  { path: 'restuarant', component: RestuarantComponent },
  { path: 'resto-menu/:rid', component: RestuarantMenuComponent },
  // { path : 'checkout', component:CheckoutComponent},
  { path : 'windowmodel', component:WindowmodelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }