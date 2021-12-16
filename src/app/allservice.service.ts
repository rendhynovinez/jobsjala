import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { AuthConstants } from './config/auth-constants';
import { HttpService } from './services/http.service';
import { StorageService } from './services/storage.service';


@Injectable({
  providedIn: 'root'
})
export class AllserviceService {

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router,
    private storage:Storage,
  ) { }


  profilecreate(postData:any):Observable<any>{
    return this.httpService.post('profile-create', postData)
  }

  applyjob(postData:any):Observable<any>{
    return this.httpService.post('applyjob', postData)
  }

  

  updateBiodata(postData:any):Observable<any>{
    return this.httpService.put('profile-update', postData)
  }

  Getdetailprofile():Observable<any>{
    return this.httpService.get('detail-profile')
  }

  listjob():Observable<any>{
    return this.httpService.get('listjob')
  }

  detailJob(params:string):Observable<any>{
    return this.httpService.get('detail-job/'+params)  
  }

  listeducation():Observable<any>{
    return this.httpService.get('listeducation')
  }

  liveinarea():Observable<any>{
    return this.httpService.get('listarea')
  }

  listgroup():Observable<any>{
    return this.httpService.get('listgroup')
  }

  listjobspecialist():Observable<any>{
    return this.httpService.get('listjobspecialist')
  }

  listetnic():Observable<any>{
    return this.httpService.get('listetnic')
  }

  userhistoryjob():Observable<any>{
    return this.httpService.get('users-history-job')
  }
}
