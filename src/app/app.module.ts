import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContinutComponent } from './continut/continut.component';
import { CardComponent } from './card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { UserPostDetailsComponent } from './user-post-details/user-post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContinutComponent,
    CardComponent,
    FormsComponent,
    LoginComponent,
    PageNotFoundComponent,
    MainComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    UserPostDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
