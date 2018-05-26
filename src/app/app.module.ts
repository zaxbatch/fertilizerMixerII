import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PpmTargetComponent } from './ppm-target/ppm-target.component';
import { FineTuneComponent } from './fine-tune/fine-tune.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'ppm-target', component: PpmTargetComponent },
  { path: 'fine-tune', component: FineTuneComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PpmTargetComponent,
    FineTuneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
  ],
  declarations: [
    AppComponent,
    PpmTargetComponent,
    FineTuneComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
