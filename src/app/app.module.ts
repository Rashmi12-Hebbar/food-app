import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import {MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule} from '@angular/material';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RestuarantComponent } from './restuarant/restuarant.component';

// const routes = [

//   { path: '/', component: LoginComponent, pathMtch: 'full' },

// { path:'/', Component: RegisterComponent }

// ]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RestuarantComponent
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
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
