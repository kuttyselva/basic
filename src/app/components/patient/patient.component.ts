import { Component, OnInit } from '@angular/core';
import { PatientService} from 'src/app/services/patient.service';
import { Patient } from 'src/app/models/patient.model';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private patientService:PatientService) { }

  ngOnInit() {
  }

  addPatient(name,age,phone,disease,location,password){
    this.patientService.savePost({name,age,phone,disease,location,password} as Patient).subscribe((data)=>console.log(data));

  }

}
