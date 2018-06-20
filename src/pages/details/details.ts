import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  item;
  ing;

  constructor(public navCtrl: NavController, public navParams:NavParams) {
      this.item = navParams.data.item;
      this.ing = navParams.data.item.secao[0].conteudo;
  }

  ionViewDidLoad() {
    console.log('Hello DetailsPage Page');
  }

}