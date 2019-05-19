import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()

export class ProfileGaurdService implements CanActivate {
    token: string;

    constructor(private router: Router ) {}

    canActivate(router: ActivatedRouteSnapshot): boolean {
        this.token = localStorage.getItem('TOKEN_NUMBER');
        if (this.token === null) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}
