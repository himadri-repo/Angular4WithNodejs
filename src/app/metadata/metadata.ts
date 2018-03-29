// import { Component, OnInit, NgZone } from '@angular/core';

export class Menu {
    private _menuName: string;
    get menuName() {
        return this._menuName;
    }
    set menuName(menuItemName: string) {
        this._menuName = menuItemName;
    }

    private _menuLink: string;
    get menuLink() {
        return this._menuLink;
    }
    set menuLink(menuLinkItem: string) {
        this._menuLink = menuLinkItem;
    }

    childMenus = [];
}
