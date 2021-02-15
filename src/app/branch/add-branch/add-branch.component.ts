import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { KwiknkleenService } from 'src/app/kwiknkleen service/kwiknkleen.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {
  addbranchFormRegistration: FormGroup;
  submitted = false;

  district = '';
  bname;
  username;
  password;
  cname;
  phn;
  aphn;
  email;
  date;
  proof;
  id;
  address;
  services;

  isLoading = false;
  button = 'Submit';
  constructor(private formbuilder: FormBuilder, private kwiknkleen:KwiknkleenService, private router: Router)
{
  
}
  ngOnInit() {
    this.addbranchFormRegistration = this.formbuilder.group(
      {
        
  district: ['', Validators.required],
  bname: ['', Validators.required],
  username: ['', Validators.required],
  password: ['', Validators.required],
  phn: ['', Validators.required],
  aphn: ['', Validators.required],
  cname: ['', Validators.required],
  email: ['', Validators.required],
  date: ['', Validators.required],
  proof: ['', Validators.required],
  id: ['', Validators.required],
  address: ['', Validators.required],
  services: ['', Validators.required],
      })
    }

       submit() {
          this.submitted = true;
          this.isLoading = true;
          this.button = 'Processing';
          // stop here if form is invalid
          if (this.addbranchFormRegistration.invalid) {
            this.isLoading = false;
            this.button = 'submit';
            return;
          }
          else {
        this.isLoading = true;
        this.button = 'Processing';
           
            
          }
        }
      }
    
