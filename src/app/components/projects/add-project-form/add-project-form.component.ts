import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {Project, ProjectModel} from '../project.model';
@Component({
  selector: 'add-project-form',
  templateUrl: './add-project-form.component.html',
  styleUrls: ['./add-project-form.component.scss']
})
export class AddProjectFormComponent implements OnInit {

  addProjectForm: FormGroup;
  isDeleted = false;
  @Input() item: ProjectModel;
  @Input() id: number;
  @Output() formModel: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addProjectForm = this.fb.group({
      Name: [this.item.Values.Name, [Validators.required]],
      Content: [this.item.Values.Content, [Validators.required]]
    });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.id);
  }
  updateFormModel() {
    const formModel = {
      Id: this.id,
      IsValid: (this.addProjectForm.status === 'VALID'),
      IsDeleted: this.isDeleted,
      Values: {...this.addProjectForm.value}
    };
    this.formModel.emit(formModel);
  }
  onDelete() {
    this.isDeleted = true;
    this.updateFormModel();

  }
  onChange() {
    this.updateFormModel();
  }

}
