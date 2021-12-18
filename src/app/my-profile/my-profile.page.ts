import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AllserviceService } from '../allservice.service';
import { StorageService } from '../services/storage.service';
import { ToastService } from '../services/toast.service';



@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {


  userData = [];

  genders = [{"id" : 1,"name":"Male"},{"id" : 2,"name":"Female"}]

  selectedGender:Number;
  selectedLiveInArea:Number;
  selectedetnics:Number;

  listEtnics = [];
  current_etnics = this.listEtnics[0]; 


  liveinarea = [];
  current_liveinarea = this.liveinarea[0]; 

  constructor(  private allserviceService: AllserviceService,
    private storageService:StorageService,
    private router:Router,
    private toastService:ToastService,
    private formBuilder:FormBuilder,
    private LoadingController:LoadingController) { 
    }

    MyProfileForm = this.formBuilder.group({
      id:[],
      fullname : [null],
      dateofbirth : [null],
      phonenumber : [null],
      gender : [null],
      etnics :[null],
      address : [null],
      Skills: [null],
      LiveInArea: [null],
    });


    GetdetailProfile(){
      this.allserviceService
      .Getdetailprofile()
      .subscribe((res) => {
        console.log(res);
        this.userData['id'] = res.data[0].id;
        this.userData['phonenumber'] = res.data[0].phonenumber;
        this.userData['Skills'] = res.data[0].Skills;
        this.userData['address']  = res.data[0].address;
        this.userData['customer_id'] = res.data[0].customer_id;
        this.userData['dateofbirth'] = res.data[0].dateofbirth;
        this.userData['fullname'] = res.data[0].fullname;
        this.selectedGender = parseInt(res.data[0].gender);
        this.selectedLiveInArea = parseInt(res.data[0].LiveInArea);
        this.selectedetnics = parseInt(res.data[0].etnics);   
      }, async (error) => {
        this.toastService.presentToast('Error Get Data');
      });
    }

    compareObject(a: any, b: any) {
      return a.id === b.id;
   }

  
    GetDataliveinarea(){
      this.allserviceService
      .liveinarea()
      .subscribe((res) => {
        this.liveinarea = res.data;
      }, async (error) => {
        const message = JSON.parse(await error.error.text()).message;
        this.toastService.presentToast(message);
      });
    }
  
  
    GetDatalistetnic(){
      this.allserviceService
      .listetnic()
      .subscribe((res) => {
        this.listEtnics = res.data;
      }, async (error) => {
        const message = JSON.parse(await error.error.text()).message;
        this.toastService.presentToast(message);
      });
    }
  
  
    ngOnInit() {
      this.GetDatalistetnic();
      this.GetDataliveinarea();
      this.GetdetailProfile();
    }

    submit(){
      console.log(this.MyProfileForm.value);
      this.allserviceService
      .updateBiodata(this.MyProfileForm.value)
      .subscribe((res) => {
        this.router.navigate(['success-biodata']);
      }, async (error) => {
          this.toastService.presentToast('Error Get Data, Try Again Later');
      });
    }

}
