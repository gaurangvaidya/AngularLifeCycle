import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { HttpcomponentComponent } from './httpcomponent/httpcomponent.component';
import {HttpClientModule} from '@angular/common/http';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { TestComponent } from './test/test.component';
import { MyngifDirective } from './myngif.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    HttpcomponentComponent,
    LifecycleComponent,
    TestComponent,
    MyngifDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
