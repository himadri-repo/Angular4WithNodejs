import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'auth.component.html',
    styleUrls: ['auth.component.css']
})
export class AuthComponent {

    constructor(private route: ActivatedRoute,
                private router: Router) {
    }

    fnCancel(e) {
        try {
            this.router.navigate(['/']);
        } catch (ex) {
            console.log(ex.message);
        }
    }
}
