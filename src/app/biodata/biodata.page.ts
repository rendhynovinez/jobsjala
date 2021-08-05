import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';
import { AllserviceService } from '../allservice.service';
import { AuthConstants } from '../config/auth-constants';
import { StorageService } from '../services/storage.service';
import { ToastService } from '../services/toast.service';




@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.page.html',
  styleUrls: ['./biodata.page.scss'],
})
export class BiodataPage implements OnInit {
  
  listEducation = [];
  current_educaton = this.listEducation[0];


  listEtnics = [];
  current_etnics = this.listEtnics[0]; 


  liveinarea = [];
  current_liveinarea = this.liveinarea[0]; 


  listjobspecialist = [];
  current_listjobspecialist = this.listjobspecialist[0]; 

  ProfileCreate = [];



  constructor(private formBuilder:FormBuilder, private platform:Platform,
    private allserviceService: AllserviceService,
    private storageService:StorageService,
    private router:Router,
    private toastService:ToastService,
    private LoadingController:LoadingController) { 
      this.allserviceService
      .Getdetailprofile()
      .subscribe((res) => {
        console.log(res);
        debugger
         if(res.data.length !== 0){
          this.router.navigate(['list-job']);
          this.LoadingController.dismiss();
         }; 
      }, async (error) => {
        this.LoadingController.dismiss();
        this.toastService.presentToast('Error Get Data');
      });

    }
  
  get fullname(){
      return this.BiodataForm.get('fullname');
  }

  get dateofbirth(){
    return this.BiodataForm.get('dateofbirth');
  }

  get phonenumber(){
    return this.BiodataForm.get('phonenumber');
  }

  get gender(){
    return this.BiodataForm.get('gender');
  }

  get etnics(){
    return this.BiodataForm.get('etnics');
  }

  get address(){
    return this.BiodataForm.get('address');
  }
  
  
  get LiveInArea(){
    return this.BiodataForm.get('LiveInArea');
  }

  get Organization(){
    return this.BiodataForm.get('Organization')
  }

  get Education(){
    return this.BiodataForm.get('Education')
  }

  get JobSpecialist(){
    return this.BiodataForm.get('JobSpecialist')
  }

  get Skills(){
    return this.BiodataForm.get('Skills')
  }

  

  public errorMessages = {
      fullname : [
        {type : 'required', message: 'Input Is Required'},
        {type : 'maxlength', message: 'Name cant be longer then 50 characters'},
        {type : 'pattern', message: 'Please enter a valid your name'}
      ],
      dateofbirth : [
        {type : 'required', message: 'Input Is Required'},
        {type : 'maxlength', message: 'Name cant be longer then 50 characters'}
      ],
      phonenumber : [
        {type : 'required', message: 'Phone Is Required'},
        {type : 'maxlength', message: 'Name cant be longer then 50 characters'}
      ],

      gender : [
        {type : 'required', message: 'Input Is Required'}
      ],

      etnics : [
        {type : 'required', message: 'Input Is Required'}
      ],

      address : [
        {type : 'required', message: 'Input Is Required'}
      ],

      LiveInArea : [
        {type : 'required', message: 'Input Is Required'}
      ],

      Education : [
        {type : 'required', message: 'Input Is Required'}
      ],
      
      JobSpecialist : [
        {type : 'required', message: 'Input Is Required'}
      ],

      Skills:[
        {type : 'required', message: 'Input Is Required'}
      ],
      
      Organization : [
        {type : 'required', message: 'Input Is Required'},
        {type : 'maxlength', message: 'Name cant be longer then 200 characters'}
      ],
      
  }

  BiodataForm = this.formBuilder.group({
    fullname : [null,[Validators.required,Validators.maxLength(50),Validators.pattern('^[A-Za-z -]+$')] ],
    dateofbirth : [null,[Validators.required,Validators.maxLength(50) ]],
    phonenumber : [null,[Validators.required,Validators.maxLength(50)]],
    gender : [null,[Validators.required]],
    etnics : [null,[Validators.required]],
    address : [null,[Validators.required]],
    Education: [null, [Validators.required]],
    JobSpecialist: [null, [Validators.required]],
    Skills: [null, [Validators.required]],
    LiveInArea: [null, [Validators.required]],
    Organization : [null,[Validators.required,Validators.maxLength(200) ]]
  })




  GetDataEducation(){
    this.presentLoading('Getting Data..');
    this.allserviceService
    .listeducation()
    .subscribe((res) => {
      this.listEducation = res.data;
    }, async (error) => {
      this.toastService.presentToast('Error Get Data, Try Again Later');
    });
  }

  GetDataliveinarea(){
    this.allserviceService
    .liveinarea()
    .subscribe((res) => {
      this.liveinarea = res.data;
    }, async (error) => {
      this.toastService.presentToast('Error Get Data, Try Again Later');
    });
  }


  GetDatalistjobspecialist(){
    this.allserviceService
    .listjobspecialist()
    .subscribe((res) => {
      this.listjobspecialist = res.data;
    }, async (error) => {
      this.toastService.presentToast('Error Get Data, Try Again Later');
    });
  }


  GetDatalistetnic(){
    this.allserviceService
    .listetnic()
    .subscribe((res) => {
      this.listEtnics = res.data;
      this.LoadingController.dismiss();
    }, async (error) => {
      this.LoadingController.dismiss();
      this.toastService.presentToast('Error Get Data, Try Again Later');
    });
  }


  ngOnInit() {

    this.GetDataEducation();
    this.GetDatalistetnic();
    this.GetDatalistjobspecialist();
    this.GetDataliveinarea();

  }
  submit(){
    this.allserviceService
    .profilecreate(this.BiodataForm.value)
    .subscribe((res) => {
      this.ProfileCreate = res.data;
      this.router.navigate(['success-biodata']);
    }, async (error) => {
        this.toastService.presentToast('Error Save Data, Try Again Later');
    });

    
  }


  async presentLoading(message :string) {
    const loading = await this.LoadingController.create({
      message
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  

}
