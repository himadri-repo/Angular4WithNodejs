import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MenusectionComponent } from '../menusection/menusection.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'appheader.component.html',
    styleUrls: ['appheader.component.css'],
    providers: [MenusectionComponent]
})
export class AppheaderComponent implements OnInit {
    phonenumber: String = '+919874550200';
    email: String = 'contact.rosaleen@gmail.com';

    @Output() childReadyEvent: EventEmitter<string> = new EventEmitter(true);

    user = {
        name: 'Himadri',
        age: 43
    };

    public constructor(public menusection: MenusectionComponent, public translate: TranslateService) {
    }

    ngOnInit(): void {
        // throw new Error('Method not implemented.');
        console.log('child model created');
        this.childReadyEvent.emit('Child component got created.');
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
