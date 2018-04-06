import { Component } from '@angular/core';
import { MenusectionComponent } from '../menusection/menusection.component';
import { TranslateService } from '@ngx-translate/core';

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

    user = {
        name: 'Himadri',
        age: 43
    };

    public constructor(public menusection: MenusectionComponent, public translate: TranslateService) {
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

    switchLanguage(language: string) {
        this.translate.use(language);
    }
}
