import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(public loadingController: LoadingController) {}

  async presentLoading(message :string) {
    const loading = await this.loadingController.create({
      message
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  ngOnInit() {
    this.presentLoading('test');
  }

}
