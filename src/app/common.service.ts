import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http:HttpClient) { }

  loginUser(name, email){
  return this.http.get("https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/users?firstName="+name+"&email="+email)
  }

  listCompany(){
    return this.http.get("https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/companies")
  }

  listContact(){
    return this.http.get("https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/contacts")
  }
  deleteContact(id){
    return this.http.delete("https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/contacts?id="+id)
  }

}
