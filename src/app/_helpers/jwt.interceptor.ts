import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { AccountService } from '@app/_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        const user = this.accountService.userValue;

        //console.log("user = " + user.jwt);
        const isLoggedIn = user && user.jwt;
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        //if (isLoggedIn && isApiUrl)
        if (localStorage.getItem('jwt') && user) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${localStorage.getItem('jwt')}`
                }
            });
        }

        return next.handle(request);
    }
}