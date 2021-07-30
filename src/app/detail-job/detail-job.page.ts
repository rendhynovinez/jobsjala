import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllserviceService } from '../allservice.service';
import { ToastService } from '../services/toast.service';
Router

@Component({
  selector: 'app-detail-job',
  templateUrl: './detail-job.page.html',
  styleUrls: ['./detail-job.page.scss'],
})
export class DetailJobPage implements OnInit {

    ItemDetailDescription: string;
    itemCompany: string;
    itemStatus: string;
    itemTitle: string;
    itemSalary: string;
    itemAdress: string;
    ItemCategory: string;
    ItemRequirements:string;
    details:string;
    job_id:number;
    data:any;
    condition:Boolean;

  constructor(public router: Router, private allserviceService: AllserviceService,
    private toastService:ToastService){
      // Passing Paramter Data Job
      if (router.getCurrentNavigation().extras.state) {
            const pageName = this.router.getCurrentNavigation().extras.state;
            this.data = pageName;
            this.itemCompany = pageName.itemCompany;
            this.itemStatus = pageName.itemStatus;
            this.itemTitle = pageName.itemTitle;
            this.itemSalary = pageName.itemSalary;
            this.itemAdress = pageName.itemAdress;
            this.ItemCategory = pageName.ItemCategory; 
            this.ItemRequirements = pageName.ItemRequirements;
            this.ItemDetailDescription = pageName.ItemDetailDescription;
            this.details = pageName.details;
            this.job_id = pageName.job_id;
            this.cekData(this.job_id);
            
      }
  }

  cekData(params){
    this.allserviceService
    .detailJob(params)
    .subscribe((res) => {
      if(res.history_status == 1){
          this.condition = true;
      }else{
        this.condition = false;
      }
    }, async (error) => {
        this.toastService.presentToast('Error Get Data, Try Again Later');
    });
  }

    submit(){
      this.allserviceService
      .applyjob({'jobs_id' : this.data.job_id})
      .subscribe((res) => {
        this.router.navigate(['success-apply-job']);
      }, async (error) => {
          this.toastService.presentToast('Error Get Data, Try Again Later');
      });
    }

    ngOnInit() {
        this.router.getCurrentNavigation().extras.state
    }

}
