import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public url = '/home';
  
  constructor(
    public router: Router,
    public navCtrl: NavController
  ) {}

  ngOnInit(){}

  navigate() {
    this.router.navigate([this.url]);
  }

  navigateForwards() {
    this.navCtrl.navigateForward(this.url);
  }

  navigateBackwards() {
    this.navCtrl.navigateBack(this.url);
  }

  navigateroot() {
    this.navCtrl.navigateRoot(this.url);
  }

  navigateByUrl(){
    this.router.navigateByUrl(this.url);
  }  
}
