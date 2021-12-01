import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JptodosComponent } from './jptodos/jptodos.component';
import { JptodoService } from './jptodo.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, JptodosComponent],
  bootstrap: [AppComponent],
  providers: [JptodoService],
})
export class AppModule {}
