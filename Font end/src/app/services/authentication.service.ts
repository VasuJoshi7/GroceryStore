import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'app/model/User';
import { API_URL } from 'environments/config';




@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<any>;
    LoggedIn: boolean = false;
    public currentUser: Observable<User>;
    user: any;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.LoggedIn = this.isLoggedIn()
    }

    public get currentUserValue() {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string): Observable<any> {

        return this.http.post<any>(API_URL + 'auth/login', { "email": email, "password": password });
    }

    logout() {
        debugger;
        // remove user from local storage to log user out
        localStorage.removeItem('auth-token');
        localStorage.removeItem('role');
        localStorage.removeItem('userId');
        this.LoggedIn = false
        return false;

    }
    isLoggedIn() {
        this.user = localStorage.getItem("currentUser");
        if (this.user != null) {
            return true;
        }
        else {
            return false;
        }
        // return true;
    }
    getToken() {
        return JSON.stringify(localStorage.getItem('auth-token'));
    }


    register(user: any) {
        return this.http.post<any>(API_URL + 'auth/register', user)
            .pipe(map(data => {
                // localStorage.setItem('currentUser', JSON.stringify(data));
                // this.currentUserSubject.next(data);
                // this.LoggedIn = true;
                return data;
            }));
    }

    DeleteUser(userid: number): Observable<any> {
        return this.http.delete<any>(API_URL + 'user/' + userid);
    }
}