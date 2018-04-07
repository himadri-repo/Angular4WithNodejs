import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public showModel: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onChildRead(eventData: string) {
    console.log(eventData);

    setTimeout(() => {
      this.showModel = true;
    }, 3000);
  }

  closeModel() {
    this.showModel = false;
  }
}
