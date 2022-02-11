import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from './note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  ProductList: any = ['Labtob', 'IPhone 11', 'IPhone 12', 'Samsung'];
  ngOnInit(): void {}
  registerationForm = this.fb.group({
    userName: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        ForbiddenNameValidator(/super admin/),
      ],
    ],
    ddl: [''],
    comment: [''],
    subscribe: [false],
    alternativeComment: this.fb.array([]),
  });
  get userName() {
    return this.registerationForm.get('userName');
  }

  get ddl() {
    return this.registerationForm.get('ddl');
  }
  get comment() {
    return this.registerationForm.get('comment');
  }

  get aleternativeComment() {
    return this.registerationForm.get('alternativeComment') as FormArray;
  }

  addAlternativeComment() {
    this.aleternativeComment.push(this.fb.control(''));
  }
  get email() {
    return this.registerationForm.get('email');
  }

  setCommentValidation() {
    this.registerationForm
      .get('subscribe')
      ?.valueChanges.subscribe((checkedValue) => {
        if (checkedValue) {
          this.comment?.setValidators(Validators.required);
        } else {
          this.comment?.clearValidators();
        }
        this.comment?.updateValueAndValidity();
      });
  }
}
