import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localEmail = localStorage.getItem("email");
  if (localEmail == null)
  {
    router.navigateByUrl("login");
  }
    return true;

};
