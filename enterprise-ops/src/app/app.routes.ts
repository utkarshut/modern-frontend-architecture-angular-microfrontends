import { Routes } from '@angular/router';
import { LayoutShell } from './core/layout/layout-shell/layout-shell';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
    {
        path: '',
        component: LayoutShell,
        children: [
            {
                path: 'users',
                loadComponent: () =>
                    import('./features/users/users-page/users-page')
                        .then(m => m.UsersPage)
            },
            {
                path: 'billing',
                loadComponent: () =>
                    import('./features/billing/billing-page/billing-page')
                        .then(m => m.BillingPage)
            },
            {
                path: 'reports',
                loadComponent: () =>
                    loadRemoteModule({
                        type: 'module',
                        remoteEntry: 'http://localhost:4201/remoteEntry.js',
                        exposedModule: './ReportsEntry'
                    }).then(m => m.ReportsEntry)
                        .catch(() =>
                            import('./shared/remote-error/remote-error')
                                .then(m => m.RemoteError)
                        )
            },
            {
                path: '',
                redirectTo: 'users',
                pathMatch: 'full'
            }
        ]
    }
];