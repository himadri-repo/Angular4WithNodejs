import { Component } from '@angular/core';
import { MenusectionComponent } from '../menusection/menusection.component';

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'appheader.component.html',
    styleUrls: ['appheader.component.css'],
    providers: [MenusectionComponent]
})
export class AppheaderComponent {
    phonenumber: String = '+919874550200';
    email: String = 'contact.rosaleen@gmail.com';

    public constructor(public menusection: MenusectionComponent) {

    }

    loginWithGoogle() {
        return this.menusection.loginWithGoogle();
    }

    logout() {
        this.menusection.logout();
    }

    authOperation() {
        if (this.authenticated) {
            this.logout();
        } else {
            this.loginWithGoogle();
        }
    }

    get authenticated() {
        return this.menusection.authenticated;
    }

    get AuthLabel(): string {
        if (this.authenticated) {
            return 'Logout';
        } else {
            return 'Login';
        }
    }
}
