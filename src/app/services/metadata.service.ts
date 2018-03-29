import { Injectable } from '@angular/core';
import {} from '@angularfire2';
// import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { tap } from 'rxjs/operators';
// import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Menu } from '../metadata/metadata';

const metadataApiUrl = 'http://localhost:3000/api/metadata/menus';

@Injectable()
export class MetadataService {

  constructor(private http: Http) { }

  getMenus(): Observable<Menu[]> {
      return this.http.get(metadataApiUrl)
        .map((res: Response) => {
          const menuItems = res.json();
          const menus = [];
          menuItems.map(menuItem => {
            const menu = new Menu();
            menu.menuName = menuItem.name;
            menu.menuLink = menuItem.link;
            // menu.childMenus = menuItem.link;
            menuItem.childMenus.map(childMenu => {
              const childItem = new Menu();
              childItem.menuName = childMenu.name;
              childItem.menuLink = childMenu.link;
              childItem.childMenus = [];
              menu.childMenus.push(childItem);
            });
            menus.push(menu);
        });
        return menus;
      });
  }
}
