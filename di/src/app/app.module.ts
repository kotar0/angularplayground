import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloService } from './hello.service';
import { GoodbyeService } from './goodbye.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: HelloService,
      useClass: GoodbyeService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
