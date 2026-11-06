import { Session } from './../../services/session';
import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-connexion',
  styleUrl: './connexion.css',
  templateUrl: './connexion.html',
})
export class Connexion {
  private Session=inject(Session);
  private router=inject(Router);

  @Input() retour='';
  nom='';
  seConnecter(){
    this.Session.connecter(this.nom);
    this.router.navigateByUrl(this.retour || '/mes-inscriptions');
  }
}
