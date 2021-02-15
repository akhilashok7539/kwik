import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { KwiknkleenService } from 'src/app/kwiknkleen service/kwiknkleen.service';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.css']
})
export class AddServicesComponent implements OnInit {
  addserviceFormRegistration: FormGroup;
  submitted = false;

  name;
  packages;
  isLoading = false;
  button = 'Submit';
  constructor(private formbuilder: FormBuilder, private kwiknkleen:KwiknkleenService, private router: Router)
{
  
}
  ngOnInit() {
    this.addserviceFormRegistration = this.formbuilder.group(
      {
        
        name: ['', Validators.required],
        packages: ['', [Validators.required, Validators.maxLength(50)]],
      })
    }

        submit() {
          this.submitted = true;
          this.isLoading = true;
          this.button = 'Processing';
          // stop here if form is invalid
          if (this.addserviceFormRegistration.invalid) {
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
    
