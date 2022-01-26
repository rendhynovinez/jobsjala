import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  async ngOnInit() {
  }


  async store(storageKey: string, value:any){
    await this.storage.create();
    //const encryptedValue = btoa(escape(JSON.stringify(value)));
    await this.storage.set(storageKey,value)
  }



  async get(storageKey: string){
    await this.storage.create();
    const res = await this.storage.get(storageKey);
    if(res.value){
      // return JSON.parse(unescape(atob(res.value)));
      return res.value;
    }else{
      return false;
    }
  }

  async getTokenKey(storageKey: string){
    await this.storage.create();
    const res = await this.storage.get(storageKey);
    return res;
 
  }

  async getToken(storageKey: string){
    await this.storage.create();
    const res = await this.storage.get(storageKey);
    if(res){
      // return JSON.parse(unescape(atob(res.value)));
      return res;
    }else{
      return false;
    }
  }

  async removeItem(storageKey: string){
    await this.storage.create();
    await this.storage.remove(storageKey);
    localStorage.clear();
  }

  async clear(){
    await this.storage.clear();
    localStorage.clear();

  }



}
