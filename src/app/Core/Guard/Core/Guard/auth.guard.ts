import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Use the correct inject function
  const localData = localStorage.getItem('TicketData');

  if (localData != null) {
    return true;
  } else {
    router.navigateByUrl('/login'); // Ensure this is a string, not an array
    return false;
  }
};
