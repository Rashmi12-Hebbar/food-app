import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatListModule } from '@angular/material';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RestuarantComponent } from './pages/restuarant/restuarant.component';
import { RestuarantMenuComponent } from './pages/restuarant-menu/restuarant-menu.component';
import { DishDescriptionsComponent } from './pages/dish-descriptions/dish-descriptions.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { WindowmodelComponent } from './pages/windowmodel/windowmodel.component';
import { AddrestuarantComponent } from './addrestuarant/addrestuarant.component';
import { PopupComponent } from './popup/popup.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RestuarantComponent,
    RestuarantMenuComponent,
    DishDescriptionsComponent,
    CheckoutComponent,
    WindowmodelComponent,
    AddrestuarantComponent,
    PopupComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule, MatListModule,
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
