import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { TopicListComponent } from './topic/topic-list.component';
import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' }
    { path: 'welcome', component: WelcomeComponent },
    { path: 'topics', component: TopicListComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);