import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthConstants } from '../config/auth-constants';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { ToastService } from '../services/toast.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  postData = {
    email: '',
    password: ''
  }

  loginAction(){
    this.presentLoading('Authenticating..');
    this.authService.login(this.LoginForm.value).subscribe((res:any)=>{
      if(res){
        debugger
        this.storageService.store(AuthConstants.AUTH, res.success.token);
        localStorage.setItem(AuthConstants.AUTH, res.success.token);
        this.router.navigate(['biodata']);
        this.LoadingController.dismiss();
      }else{
        this.toastService.presentToast('kesalahan yang tak diduga');
        this.LoadingController.dismiss();
      }
    }, async (error) => {
      this.toastService.presentToast('wrong email and password, please enter correctly');
      this.LoadingController.dismiss();
  })
  }



  
  get email(){
     return this.LoginForm.get('email');
  }

  get password(){
    return this.LoginForm.get('password');
  }

  public errorMessages = {
     email : [
       {type:'required', message: 'Required'},
       {type: 'pattern', message: 'Enter email Correctly'}
     ],
     password : [
        {type: 'required', message: 'Required'},
    
     ]
  }

  LoginForm = this.formBuilder.group({
     email : [null, [Validators.required, Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/)]],
     password : [null, [Validators.required]]
  })

  async presentLoading(message :string) {
    const loading = await this.LoadingController.create({
      message
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }


  constructor(private formBuilder:FormBuilder,
  private router:Router,
  private authService:AuthService,
  private storageService: StorageService,
  private toastService:ToastService,
  private LoadingController:LoadingController) { }

  ngOnInit() {

  }



}
