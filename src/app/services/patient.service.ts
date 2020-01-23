import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Patient } from "../models/patient.model";
import { Observable } from "rxjs";
@Injectable()
export class PatientService {
  
  apiUrl: string = "http://localhost:8080/patients/create";
  constructor(private http: HttpClient) {}
  savePost(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, patient);
  }
}
