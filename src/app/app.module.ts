import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';

const appRoutes: Routes = [
  { path: '1', component: Comp1Component },
  { path: '2', component: Comp2Component },
  { path: '3', component: Comp3Component },
  { path: '',   redirectTo: '/1', pathMatch: 'full' },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }