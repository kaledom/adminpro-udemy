// Angular
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// Módulos creados
// Componentes creados
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PagesComponent } from './pages.component';


const routes: Routes = [

    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
          { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
          { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' }  },
          { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' }  },
          { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }  },
          { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' }  },
          { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del tema' }  },
          
        ]
      },
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
