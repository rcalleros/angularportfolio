import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {ProjectModel, Project} from './project.model';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

 formModel: ProjectModel[];

  constructor() {
    this.formModel = [
        {
          Id: 0,
          IsValid: true,
          IsDeleted: false,
          Values: {
            Name: 'example1',
            Content: 'more text',
            Image: 'empty string'
            }
        },
        {
          Id: 1,
          IsValid: true,
          IsDeleted: false,
          Values: {
          Name: 'example2',
          Content: 'some text',
          Image: 'empty string'
        }
        }];
  }

  ngOnInit() {  }

  updateFormModel(project: ProjectModel) {
    console.log(project);
    this.formModel[project.Id] = {...project };

  }

  availableProjects = () => this.formModel.filter((item) => !item.IsDeleted);
  formsValid = () => {
    const isValid = this.formModel.filter(item => !item.IsValid && !item.IsDeleted);
    return isValid.length === 0;
  }

  addNewProject() {
    const newId  = this.formModel.length;
    this.formModel.push(new ProjectModel(newId, false, false, {Name: '', Content: '', Image: ''} ));
  }
}
