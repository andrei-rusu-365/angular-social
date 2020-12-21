import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContinutComponent } from './continut/continut.component';
import {LoginComponent} from './login/login.component';
import { MainComponent } from './main/main.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: MainComponent},
  { path: 'name', component: NameEditorComponent},
  { path: 'profil', component: ProfileEditorComponent},
  { path: '**', component: PageNotFoundComponent},
  { path: 'user-post-details/:id', component: ContinutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
