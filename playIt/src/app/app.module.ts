import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CatsService} from './services/cats.service';
import {FormsModule} from "@angular/forms";
import {ButtonModule} from 'primeng/button';
import {DataTableModule} from 'primeng/datatable';
import { CatInfoComponent } from './cat-info/cat-info.component';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    CatInfoComponent,
    ArticleComponent
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
