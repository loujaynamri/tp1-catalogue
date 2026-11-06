import { email } from '@angular/forms/signals';
import { COURS, Cours } from './../../app/model/cours';
import { Session } from './../../services/session';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { nomComplet } from '../../app/validators/nom-complet';

@Component({
  imports: [RouterLink,ReactiveFormsModule],
  selector: 'app-inscription',
  styleUrl: './inscription.css',
  templateUrl: './inscription.html',
})
export class Inscription implements OnInit {
  private session = inject(Session);
  @Input() id='';
  confirmation='';
  form=new FormGroup({
    nom:new FormControl('',[Validators.required,nomComplet]),
    email:new FormControl('',[Validators.required,Validators.email]),
    telephone:new FormControl('',[Validators.pattern(/^[0-9]{8}$/)]),
    niveau:new FormControl('',[Validators.required]),
    motivation:new FormControl('',[Validators.required,Validators.minLength(20)]),
    conditions:new FormControl(false,[Validators.requiredTrue]),
  });
  get cours() : Cours | undefined {
    return COURS.find(c=>c.id === Number(this.id));
  }
  ngOnInit() {
    this.form.patchValue({nom:this.session.nom()});
  }
  get nom() { return this.form.controls.nom; }
  get email() { return this.form.controls.email; }
  get telephone() { return this.form.controls.telephone; }
  get niveau() { return this.form.controls.niveau; }
  get motivation() { return this.form.controls.motivation; }
  get conditions() { return this.form.controls.conditions; }
  envoyer(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    const{nom,email}=this.form.value;
    this.confirmation=`Merci ${nom} ! Votre inscription a <<${this.cours?.titre}>> est enregistrée.`
    +
    `Un message de confirmation sera envoyé a ${email}.`;
    console.log('inscription :', this.form.value);
    this.form.reset();
  }
}
