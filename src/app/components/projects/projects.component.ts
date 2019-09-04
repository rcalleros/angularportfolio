import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import {ProjectModel, Project, ProjectViewModel} from './project.model';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  model = new ProjectViewModel();
  projectsForm: any;
  constructor(
    private fb: FormBuilder
  ) {
   this.model.Projects = [
     {
       Name: 'John Jacobs',
       Content: 'some example'
     }
    ];
  }

  ngOnInit() {
    this.projectsForm = this.formInit(); // init form with FormBuilder
    if ( this.model.Projects.length > 0) {
      this.model.Projects.forEach((item) => this.addNewProject(item) );
    }

   }



  addNewProject(item) {
    const newId  = this.model.Projects.length;
    const model = new Project();
    const newProject  = this.projectForm(item);
    this.projectsArray.push(newProject);
  }

  formInit = () => this.fb.group({
    FirstName: ['', [Validators.required]],
    LastName: ['', [Validators.required]],
    street: ['', [Validators.required]],
    Projects: this.fb.array([])
  })

  projectForm = (data?: Project) => this.fb.group({
    Name: [data ? data.Name : '', [Validators.required]],
    Content: [data ? data.Content : '', [Validators.required]],
  })

  deleteProject(index) {
    this.projectsArray.removeAt(index);
  }
  getValuesFromFormGroup() {
    Object.keys(this.projectsForm.controls).forEach((field) =>  this.model[field] = this.projectsForm.controls[field].value);
  }
  get projectsArray() {
    return this.projectsForm.get('Projects');
  }
  //poc masking
  // performance hit?
  // id's ?
}
