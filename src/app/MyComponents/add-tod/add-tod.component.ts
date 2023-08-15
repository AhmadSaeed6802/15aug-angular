import { Component, EventEmitter,Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-tod',
  templateUrl: './add-tod.component.html',
  styleUrls: ['./add-tod.component.css']
})
export class AddTodComponent {
title1!:string;
desc!:string;
@Output() todoAdd: EventEmitter<Todo> =new EventEmitter();
onSubmit(){
  const todo:Todo=new Todo;
  todo.title=this.title1;
  todo.desc=this.desc;

  // const sno:number =8;
  
  // const todo={
  //   sno:8,
  //   title:this.title1,
  //   desc:this.desc,
  //   active:true, 
  //   ret:"wret"
  // }

  this.todoAdd.emit(todo);
  this.title1="";
  this.desc="";

}
}
