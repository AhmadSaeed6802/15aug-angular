import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';
// import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
// import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css'],
})
export class ToDosComponent {
  // todos!: string;
  todoshere!: Todo[];
  todosheredone!: Todo[];


  constructor() {
    var localItem = localStorage.getItem('todosherekey');
    var localItemdone=sessionStorage.getItem("todosherekeydone");
    
   
    if (localItemdone == null) {
      this.todosheredone = [];
    } else {
      this.todosheredone = JSON.parse(localItemdone);
    }
    if (localItem == null) {
      this.todoshere = [];
    } else {
      this.todoshere = JSON.parse(localItem);
    }
    // this.todoshere = [
    //   {
    //     sno: 1,
    //     title: 'This is title',
    //     desc: 'this is description',
    //     active: true,
    //   },
    //   {
    //     sno: 2,
    //     title: 'This is title2',
    //     desc: 'this is description',
    //     active: true,
    //   },
    //   {
    //     sno: 3,
    //     title: 'This is title3',
    //     desc: 'this is description',
    //     active: true,
    //   },
    // ];
  }
  //------------------------------------//
  deleteTodo(todo: Todo) {
    if (this.todoshere.includes(todo)) {
      const index = this.todoshere.indexOf(todo);
    this.todoshere.splice(index, 1);
    // console.log(todo);
    localStorage.setItem('todosherekey', JSON.stringify(this.todoshere));
    //sessionStorage.setItem("todosherekey",JSON.stringify(this.todoshere));
    } else if (this.todosheredone.includes(todo)) {
      const index = this.todosheredone.indexOf(todo);
    this.todosheredone.splice(index, 1);
    // console.log(todo);
    localStorage.setItem('todosherekeydone', JSON.stringify(this.todosheredone));
    }    
  }
//--------------------------------------------//
  addTodo(todo: Todo) {
    if (todo.title == null || todo.title == '') {
      alert('Please enter the title');
    } else if (todo.desc == null || todo.desc == '') {
      alert('Please enter the description');
    } else {
     
    // this.todoshere.push(todo);
    // this.todoshere.reverse();
    this.todoshere.unshift(todo);


      localStorage.setItem('todosherekey', JSON.stringify(this.todoshere));
      //sessionStorage.setItem("todosherekey",JSON.stringify(this.todoshere));
    }
  }
//---------------------------------------------------//
  toggleTodo(todo: Todo) {
    const index = this.todoshere.indexOf(todo);
    this.todoshere[index].active=!this.todoshere[index].active;
    localStorage.setItem('todosherekey', JSON.stringify(this.todoshere));
    //sessionStorage.setItem("todosherekey",JSON.stringify(this.todoshere));

    if(!this.todoshere[index].active===true){
      
    }
  }
  // todos = JSON.parse(String(this.todoshere));

//--------------------------------------------------------------------------------------------------

  // todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  // done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<Todo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.todoshere.splice(event.previousIndex, 1); // Remove the value from the current index
      const movedTodo = this.todoshere.splice(event.previousIndex, 1)[0];

      this.todoshere.splice(event.currentIndex, 0, movedTodo ); // Insert the value at the new index
      localStorage.setItem('todosherekey', JSON.stringify(this.todoshere));
      localStorage.setItem('todosherekeydone', JSON.stringify(this.todosheredone));
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      localStorage.setItem('todosherekey', JSON.stringify(this.todoshere));
      localStorage.setItem('todosherekeydone', JSON.stringify(this.todosheredone));
    }
  }


}





/**
 *  Drag&Drop connected sorting group
 */
// export class FragdropComponent {
  

// }