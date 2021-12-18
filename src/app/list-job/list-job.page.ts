import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { AllserviceService } from '../allservice.service';
import { DetailJobPage } from '../detail-job/detail-job.page';
import { ToastService } from '../services/toast.service';





@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.page.html',
  styleUrls: ['./list-job.page.scss'],
})
export class ListJobPage implements OnInit {

  public item:any = [];
  constructor(public navCtrl:NavController, 
    private allserviceService:AllserviceService,
    private toastService:ToastService,
    private LoadingController:LoadingController){

  }

  jobList = [];
  current_job = this.jobList[0];

  GetDatajobList(){
    this.presentLoading('Getting Data..');
    this.allserviceService
    .listjob()
    .subscribe((res) => {
      this.jobList = res.data;
      this.LoadingController.dismiss();
    }, async (error) => {
      this.LoadingController.dismiss();
      this.toastService.presentToast('Error Getting Data..');
    });
  }

  today : number = Date.now();


  ngOnInit() {
    this.GetDatajobList();
  }
  
  OpenDetail(item){
    this.navCtrl.navigateForward('detail-job', { state: item });
  }

  async presentLoading(message :string) {
    const loading = await this.LoadingController.create({
      message
    });
    await loading.present();
  }

}
