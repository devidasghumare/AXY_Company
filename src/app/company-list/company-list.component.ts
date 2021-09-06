import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalValueComponent } from './modal-value/modal-value.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  constructor(public cmServ:CommonService, public dialog: MatDialog, private router: Router) { }

  companyList:any;
  selectedObject:any;
  contactList:any;
  selected="1";
  newValue:any;


  ngOnInit(): void {
   this.companyListfunc();    
    this.contactListfunc();
  }

  companyListfunc(){
    this.cmServ.listCompany().subscribe(
      (data:any)=>{
        this.companyList = data;
        this.selectedObject = this.companyList[0]
      },
      (error:any)=>{
        console.log("Error"); 
      }
    )
  }

  contactListfunc(){
    this.cmServ.listContact().subscribe(
      (data:any)=>{
        this.contactList = data;
      },
      (error:any)=>{
        console.log("Error");
      }
    )
  }

  handleChange(index) {
    console.log(index)
    //console.log(this.companyList[index]);
    this.contactListfunc();
    var filterVal = this.companyList.filter(item =>item.id==index);
    this.selectedObject= filterVal[0];
    console.log(this.selectedObject)
  }

  openEdit(index,edit){
    const dialogRef = this.dialog.open(ModalValueComponent, {
      data: {isEdit:edit,contact:edit?this.contactList[index]:null,index:index+1}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
    if(edit){
      this.contactList[index].name=result.name;
      this.contactList[index].phone=result.phone;
      this.contactList[index].country=result.country;
    }
    else{
      this.contactList.push(result);
    }
      }
      //this.animal = result;
    });

  }

  addData(){
    this.newValue = {id:"", name: "", country: "",phone:""}; 
    this.contactList.push(this.newValue);
  }

  deleteContact(id){
    var filterVal = this.contactList.filter(item =>item.id!=id);
    this.contactList = filterVal;
    //this.selectedObject= filterVal[0];
  }

  logout(){
    this.router.navigate(['/**']);
  }  

}
