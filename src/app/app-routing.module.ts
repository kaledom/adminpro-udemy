import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';
import { PagesModule } from './pages/pages.module';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'pages', loadChildren: () => import( `./pages/pages.module` ).then( m => m.PagesModule ) },
  { path: '**', component: NopagefoundComponent }
];

@NgModule({
  imports: [
    PagesModule,
    RouterModule.forRoot( routes, { useHash: true } )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
