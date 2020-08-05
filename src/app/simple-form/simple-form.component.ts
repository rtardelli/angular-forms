import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {

  simpleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.simpleForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.simpleForm.value);
  }

}
