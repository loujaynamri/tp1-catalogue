import { inject } from '@angular/core';
import { Session } from './../services/session';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const session=inject(Session);
  const router=inject(Router);
  if(session.connecte()){
    return true;
  }
  return router.createUrlTree(['/connexion'],{queryParams:{return:state.url}});

};
