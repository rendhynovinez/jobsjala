import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthConstants } from '../config/auth-constants';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { ToastService } from '../services/toast.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private formBuilder:FormBuilder, 
    private authService:AuthService,
    private storageService:StorageService,
    private router:Router,
    private toastService:ToastService
    ) { }

  postData = {
    username:'',
    email: '',
    password: '',
    password_confirmation: ''
  }

 
  signupAction(){
    debugger
    this.authService.signup(this.SignUpForm.value).subscribe((res:any)=>{
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

  get username(){
    return this.SignUpForm.get('username');
 }

 get email(){
   return this.SignUpForm.get('email');
 }

 get password(){
   return this.SignUpForm.get('password');
 }
 get password_confirmation(){
  return this.SignUpForm.get('password_confirmation');
}

 get LiveInArea(){
   return this.SignUpForm.get('LiveInArea');
 }

 public errorMessages = {
  username : [
    {type : 'required', message: 'Required'},
    {type : 'maxlength', message: 'Name cant be longer then 50 characters'}
  ],
  
  email : [
    {type : 'required', message : 'Required'},
    {type : 'pattern', message : 'Enter e-mail correctly'}
  ],
  password : [
    {type : 'required', message : 'Required'}
  ],
  password_confirmation : [
    {type : 'required', message : 'Required'}
  ],
  LiveInArea : [
    {type : 'required', message : 'Required'}
  ]
}

    SignUpForm = this.formBuilder.group({
      username : [null,[Validators.required,Validators.maxLength(30)]],
      email : [null, [Validators.required, Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/)]],
      password :[null, [Validators.required]],
      password_confirmation :[null, [Validators.required]],
      LiveInArea : [null, [Validators.required]]
      
    })







  ngOnInit() {
    console.log(this.SignUpForm.value);
  }

}
