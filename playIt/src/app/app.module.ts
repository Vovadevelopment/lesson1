import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { MessagesService } from './services/messages.service';
import { MassageComponent } from './massage/massage.component';
import {MomentPipe} from './shared/my-date.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MassageComponent,
    MomentPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
