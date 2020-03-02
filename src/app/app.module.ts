import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "../component/header/header.component";
import { BodyComponent } from "../component/body/body.component";
import { Body2Component } from "../component/body2/body2.component";
import { NavbarComponent } from "../component/navbar/navbar.component";
import { FormsModule } from "@angular/forms";
import { FootterComponent } from "../component/footter/footter.component";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    Body2Component,
    FootterComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
