import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FormComponent } from './home/form/form.component';
import { LanguageSelectComponent } from './home/language-select/language-select.component';
import { CodeComponent } from './home/code/code.component';
import { FooterComponent } from './home/footer/footer.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FormComponent,
    LanguageSelectComponent,
    CodeComponent,
    FooterComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
