import { Component, OnInit, NgZone } from '@angular/core';
import { MetadataService } from '../services/metadata.service';
import { Observable } from 'rxjs/Observable';
import { Menu } from '../metadata/metadata';
import { AuthService } from '../services/auth.service';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-menusection',
    templateUrl: 'menusection.component.html',
    styleUrls: ['menusection.component.css']
})
export class MenusectionComponent implements OnInit {
    menus: Array<Menu> = [];
    user = null;

    constructor(private zone: NgZone,
                private metadataService: MetadataService,
                private authService: AuthService,
                private router: Router ) {
        let menuItem = new Menu();
        menuItem.menuName = 'First Menu';
        menuItem.menuLink = '/first';
        this.menus.push(menuItem);

        menuItem = new Menu();
        menuItem.menuName = 'Second Menu';
        menuItem.menuLink = '/second';
        this.menus.push(menuItem);

        menuItem = new Menu();
        menuItem.menuName = 'Third Menu';
        menuItem.menuLink = '/third';
        this.menus.push(menuItem);

        menuItem = new Menu();
        menuItem.menuName = 'Forth Menu';
        menuItem.menuLink = '/four';
        let childMenu = new Menu();
        childMenu.menuName = 'Four one';
        childMenu.menuLink = '/fourone';
        menuItem.childMenus.push(childMenu);

        childMenu = new Menu();
        childMenu.menuName = 'Four two';
        childMenu.menuLink = '/fourtwo';
        menuItem.childMenus.push(childMenu);

        childMenu = new Menu();
        childMenu.menuName = 'Four three';
        childMenu.menuLink = '/fourthree';
        menuItem.childMenus.push(childMenu);

        childMenu = new Menu();
        childMenu.menuName = 'Four four';
        childMenu.menuLink = '/fourfour';
        menuItem.childMenus.push(childMenu);

        childMenu = new Menu();
        childMenu.menuName = 'Four five';
        childMenu.menuLink = '/fourfive';
        menuItem.childMenus.push(childMenu);

        childMenu = new Menu();
        childMenu.menuName = 'Four six';
        childMenu.menuLink = '/foursix';
        menuItem.childMenus.push(childMenu);
        this.menus.push(menuItem);

        menuItem = new Menu();
        menuItem.menuName = 'Fifth Menu';
        menuItem.menuLink = '/fifth';
        this.menus.push(menuItem);

        console.log(this.menus);
    }

    getClass(menuItem: Menu): string {
      if (menuItem.childMenus.length === 0) {
        return 'active';
      } else if (menuItem.childMenus.length > 0) {
        return 'dropdown';
      } else {
        return '';
      }
    }

    getMenus(): void {
        this.metadataService.getMenus()
        .subscribe((menuItems) => {
            this.zone.run(() => {
                console.log('Menu received');
                console.log(menuItems);
                this.menus = menuItems;
            });
        });
    }

    ngOnInit(): void {
        this.authService.getAuthState().subscribe(user => this.user = user);
        this.getMenus();
    }

    loginWithGoogle() {
        this.authService.loginWithGoogle();
    }

    logout() {
        this.authService.logout().then((res) => {
            this.router.navigate(['/']);
        });
    }

    get authenticated(): boolean {
        return this.authService.authenticated;
    }

    hasPermission(node: Menu): boolean {
        let flag = false;

        const permission = this.getPermission(environment.authRules, node.menuLink);

        console.log(permission);
        if (permission.isDenied) {
            console.log('Denied ' + permission.statusCode);
            if (permission.statusCode === 401) {
                if (this.authenticated) {
                    console.log('401 ' + this.authenticated);
                    flag = true;
                } else {
                    console.log('Denied with 401');
                }
            }
        } else {
            flag = true;
        }

        return flag;
    }

    getPermission(rules, url): any {
        let permission = 'deny';
        let statusCode = 401;
        if (rules && rules.length > 0) {
            // rules.forEach(rule => {
            for (let index = 0; index < rules.length; index++) {
                const rule = rules[index];
                // console.log(rule);
                if (rule.permission === 'deny') {
                    if (url.indexOf(rule.path) > -1) { // path present in the url
                        permission = 'deny';
                        statusCode = rule.errorcode;
                        break;
                    } else if (rule.path === '*') { // deny all
                        permission = 'deny';
                        statusCode = rule.errorcode;
                        break;
                    }
                } else if (rule.permission === 'allow') {
                    if (url.indexOf(rule.path) > -1) { // path present in the url
                        permission = 'allow';
                        statusCode = 0;
                    } else if (rule.path === '*') { // allow all
                        permission = 'allow';
                        statusCode = 0;
                    }
                }
            }
        }
        return {'isDenied': (permission === 'deny'), 'statusCode': statusCode };
    }
}
