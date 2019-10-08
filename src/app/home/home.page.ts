import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   public url = '/list';
  
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
