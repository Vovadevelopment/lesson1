import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CatsService} from './services/cats.service';
import {FormsModule} from "@angular/forms";
import {ButtonModule} from 'primeng/button';
import {DataTableModule} from 'primeng/datatable';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    DataTableModule
  ],
  providers: [CatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
