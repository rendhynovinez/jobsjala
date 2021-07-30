import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
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

    this.authService.login(this.LoginForm.value).subscribe((res:any)=>{
      if(res){
        this.storageService.store(AuthConstants.AUTH, res.success.token);
        this.router.navigate(['biodata']);
      }else{
        this.toastService.presentToast('kesalahan yang tak diduga');
      }
    }),
    (error, any) => {
      this.toastService.presentToast('Connection Error');
    }
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



  constructor(private formBuilder:FormBuilder,
  private router:Router,
  private authService:AuthService,
  private storageService: StorageService,
  private toastService:ToastService) { }

  ngOnInit() {

  }



}
