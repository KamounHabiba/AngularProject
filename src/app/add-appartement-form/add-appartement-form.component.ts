import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-appartement-form',
  templateUrl: './add-appartement-form.component.html',
  styleUrls: ['./add-appartement-form.component.css']
})
export class AddAppartementFormComponent {
  apartForm!:FormGroup;
 constructor(private fb: FormBuilder){}
ngOnInit():void{
  this.apartForm = this.fb.group({
    apartmentNumber:["", Validators.required]
  })
}
  
 
}
