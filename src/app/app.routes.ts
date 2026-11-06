import { ListeCoursComponent } from './composants/liste-cours/liste-cours';
import { Introuvable } from './../pages/introuvable/introuvable';
import { Connexion } from './../pages/connexion/connexion';
import { PageDetail } from './../pages/page-detail/page-detail';
import { Routes } from "@angular/router";
import { Accueil } from "../pages/accueil/accueil";
export const routes:Routes=[
  { path: '', component: Accueil, title: 'Accueil' },
  { path: 'cours', component: ListeCoursComponent, title: 'Catalogue' },
  { path: 'cours/:id', component: PageDetail, title: 'Détail du cours' },
  { path: 'connexion', component: Connexion, title: 'Connexion' },
  { path: '**', component: Introuvable, title: 'Page introuvable' },
]
