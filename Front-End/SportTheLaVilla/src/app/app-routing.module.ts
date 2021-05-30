import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { EntrarComponent } from './paginas/entrar/entrar.component';
import { HomeComponent } from './paginas/home/home.component';

const routes: Routes = [
  {path: '', component:EntrarComponent},
  {path: 'home',component:HomeComponent},
  {path: 'post', component: PostsComponent},
  {path: 'entrar', component:EntrarComponent},
  {path: 'defaultComponent',  component: DefaultComponent,
  children: [{ path: '', component: DashboardComponent}]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
