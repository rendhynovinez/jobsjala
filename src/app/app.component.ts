import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ToastService } from './services/toast.service';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { Platform } from '@ionic/angular';
import { FCMConstants } from './config/fcm-constants';





@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private authService:AuthService,
    private router:Router, private toastService:ToastService, private firebaseX:FirebaseX, public platform: Platform) {}

    ngOnInit(): void {

        this.platform.ready().then(() => {
              this.firebaseX.getToken()
              //.then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
              .then(token => localStorage.setItem(FCMConstants.FCM, `${token}`)) // save the token server-side and use it to push notifications to this device
              .catch(error => console.error('Error getting token', error));
            
           
        });

        this.firebaseX.onMessageReceived()
        .subscribe(data => console.log(`User opened a notification ${data}`));
      
        this.firebaseX.onTokenRefresh()
        .subscribe((token: string) => console.log(`Got a new token ${token}`));


    }

  logout(){
    this.authService.logout();
  }
}
