import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-value',
  templateUrl: './modal-value.component.html',
  styleUrls: ['./modal-value.component.scss']
})
export class ModalValueComponent implements OnInit {
contactData:any;
isEdit:any;
index:any;
  constructor(public dialogRef: MatDialogRef<ModalValueComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, public fb:FormBuilder) { 
        this.contactData = data.contact;
        this.isEdit = data.isEdit;
      this.index= data.index
    }
    contactForm = this.fb.group({
      name: ["", Validators.required],
      country: ["", Validators.required],
      phone:["",Validators.required],
      id:[""]
    });

  ngOnInit(): void {
    if(this.isEdit){
      this.contactForm.controls.name.setValue(this.contactData.name);
      this.contactForm.controls.country.setValue(this.contactData.country);
      this.contactForm.controls.phone.setValue(this.contactData.phone);
    }
    this.contactForm.controls.id.setValue(this.index);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(data){
    this.dialogRef.close(data);
  }

}
