import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toDoForm: FormGroup;
  toDoList: any = [{'title': 'submit documents', 'dueDate': '2018-10-25', 'priority': 1}]

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createOrResetForm();
    console.log('toDo form', this.toDoForm)
  }

  createOrResetForm(){
    this.toDoForm = this.formBuilder.group({
      title: ['', Validators.required],
      dueDate: ['', Validators.required],
      priority: ['', Validators.required]
    });
  }

  addToDoItem() {
    console.log('at the submit---', this.toDoForm);
    if(this.toDoForm.valid){
    this.toDoList.push(this.toDoForm.value);
    this.createOrResetForm();
  }
  }

  toggleCompletion(item){
     item.completed = !item.completed;
  }

  removeToDoItem(i){
   console.log('index------', i);
   this.toDoList.splice(i, 1);
  }

  checkForDue(item){
    // console.log('due date====', item.dueDate);
    const currentDate = new Date().getTime();
    const dueDate = new Date(item.dueDate).getTime();
    return dueDate < currentDate ? 'overdue': 'due_soon';
  }


  sortByPriority() {
    this.toDoList.sort((a,b) =>{
      return b.priority - a.priority;
    });
  }

}
