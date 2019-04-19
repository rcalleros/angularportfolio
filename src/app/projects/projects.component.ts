import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {Project} from './project.model';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

 formModel: Array<Project>;

  constructor() {
    this.formModel = [
      {
        Id: 0,
        Name: 'example1',
        Content: 'more text',
        Image: 'empty string'
      },
      {
        Id: 1,
        Name: 'example2',
        Content: 'some text',
        Image: 'empty string'
      }];
  }

  ngOnInit() {  }

  updateFormModel(project: Project) {
    console.log(project);
    this.formModel[project.Id] = {
      Id: project.Id,
      Name: project.Name,
      Content: project.Content,
      Image: ''
    };

  }

  addNewProject() {
    const newId  = this.formModel.length;
    this.formModel.push(new Project(newId, '', '', ''));
  }
}
