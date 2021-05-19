import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDivider } from '@angular/material/divider';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  reminder = new FormGroup({
    date: new FormControl(''),
    hour: new FormControl(''),
    city: new FormControl(''),
    weather: new FormControl(''),
    reminderText: new FormControl('', Validators.maxLength(30)),
    color: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
