import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { ReportsComponent } from './features/reports/reports.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'reports',
                component: ReportsComponent
            }
        ]
    },
    {
        path: 'auth',
        component: LoginComponent
    }
];
