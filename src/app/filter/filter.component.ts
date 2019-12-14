import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms'
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  title = 'orgchart';
  form: FormGroup;
  Departments = [];
  Teams = [];
  submitText: string = 'Not submitted yet.';
  selecteddept: string;
  selectedteam: string;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      Departments: [''],
      Teams: ['']
    });
    this.Departments = this.getdepartments();
    this.Teams = this.getteams();
    //--------------------------------------------------------
    console.log(this.selecteddept)
  }

  getdepartments() {
    return [
      { id: '1', name: 'ICAN' },
      { id: '2', name: 'NIP' },
      { id: '3', name: 'DIGITAL' },
      { id: '4', name: 'NSPIRE' }
    ];


  }
  getteams() {
    return [
      { id: '1', name: 'JAWWAD' },
      { id: '2', name: 'AQIB' },
      { id: '3', name: 'NISAR' },
      { id: '4', name: 'SHAHZEB' }
    ];

  }
  submit(dept: string, team: string) {
    this.submitText = 'Submitted successfully!';
    console.log(dept);
    console.log(team);
    let navigationExtras: NavigationExtras = {

      queryParams: {

        "dept": this.selecteddept,

        "team": this.selectedteam

      }

    };

    this.router.navigate(['chart'], navigationExtras);

    
  };

 

  ngOnInit() {

  }

}
