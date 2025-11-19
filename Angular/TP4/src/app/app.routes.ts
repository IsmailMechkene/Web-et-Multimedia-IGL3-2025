import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome';
import { ArticlesComponent } from './components/articles/articles';
import { ProduitsComponent } from './components/produits/produits';
import { TachesComponent } from './components/taches/taches';
import { DashboardComponent } from './components/dashboard/dashboard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: WelcomeComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'articles', pathMatch: 'full' },
      { path: 'articles', component: ArticlesComponent },
      { path: 'products', component: ProduitsComponent },
      { path: 'tasks', component: TachesComponent }
    ]
  },
  { path: '**', redirectTo: '/login' }
];