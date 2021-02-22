import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IconSetComponent } from '../icon-set.component';

import { SparkAngularModule } from "@sparkdesignsystem/spark-angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [AppComponent,IconSetComponent],
  imports: [
    SparkAngularModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
