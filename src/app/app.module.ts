import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppComponent } from './app.component';
import { ForumState } from './store/forum.state';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationMessagePipe } from './pipes/validation-message.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ValidationMessagePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([ForumState]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
