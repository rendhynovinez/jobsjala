import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders }    from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthConstants } from '../config/auth-constants';
import { StorageService } from './storage.service';



HttpClient


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  token:any;
  constructor(private http: HttpClient, private storageService: StorageService) {
     this.token = this.storageService.getTokenKey(AuthConstants.AUTH);
   }
 
  post(serviceName : string, data:any){
 

    let tokens = this.token.__zone_symbol__value;

    if(tokens === null){
       tokens = localStorage.getItem(AuthConstants.AUTH);
    }
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type':'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods" : "POST",  
      'Authorization':'Bearer '+ tokens
    });
    
    const options = {headers : headers, withCredentials : true};

    const url = environment.apiUrl + serviceName;

    return this.http.post(url, data,options);
  }

  get(serviceName : string){

    let tokens = this.token.__zone_symbol__value;

    if(tokens === null){
       tokens = localStorage.getItem(AuthConstants.AUTH);
    }

    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type':'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods" : "GET",  
      'Authorization':'Bearer '+ tokens
    });

    const options = {headers : headers, withCredentials : true};

    const url = environment.apiUrl + serviceName;

    return this.http.get(url,options);
  }

  put(serviceName : string, data:any){

    let tokens = this.token.__zone_symbol__value;

    if(tokens === null){
       tokens = localStorage.getItem(AuthConstants.AUTH);
    }
    
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type':'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods" : "PUT", 
      'Authorization':'Bearer '+ this.token.__zone_symbol__value
    });
    
    const options = {headers : headers, withCredentials : true};

    const url = environment.apiUrl + serviceName;

    return this.http.put(url,data, options);

  }
}
