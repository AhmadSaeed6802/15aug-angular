import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
@Input() Todo !:Todo;
@Output() todoDelete:EventEmitter<Todo> =new EventEmitter<Todo>();
@Output() todoCheckbox:EventEmitter<Todo> =new EventEmitter<Todo>();

onclick(Todo:Todo){
   this.todoDelete.emit(Todo);
  console.log("onclick has been triggered")
}
onCheckboxClick(Todo:Todo){
this.todoCheckbox.emit(Todo);
}
}

