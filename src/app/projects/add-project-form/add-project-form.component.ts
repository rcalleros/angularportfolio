import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {Project} from '../project.model';
@Component({
  selector: 'add-project-form',
  templateUrl: './add-project-form.component.html',
  styleUrls: ['./add-project-form.component.scss']
})
export class AddProjectFormComponent implements OnInit {

  addProjectForm: FormGroup;

  constructor(private fb: FormBuilder) { }
  @Input() item: Project;
  @Input() id: number;
  @Output() formModel: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
    this.addProjectForm = this.fb.group({
      Name: [this.item.Name, [Validators.required]],
      Content: [this.item.Content, [Validators.required]]
    });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.id);
  }
  updateFormModel(){
    const formModel = {
      id: this.id,
      ...this.addProjectForm.value
    };
    this.formModel.emit(formModel);
  }
  onBlur() {
    console.log(this.addProjectForm.value);
    this.updateFormModel();
  }

}
