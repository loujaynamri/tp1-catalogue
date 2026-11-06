import { routes } from './app.routes';
import { ApplicationConfig } from '@angular/core';
import { provideRouter,withComponentInputBinding } from '@angular/router';
import { Routes } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers:[provideRouter(routes,withComponentInputBinding())]
};
