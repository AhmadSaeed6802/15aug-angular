import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ToDosComponent } from './MyComponents/to-dos/to-dos.component';
import { AboutComponent } from './MyComponents/about/about.component';
import {  FragdropComponent } from './fragdrop/fragdrop.component';


const routes:Routes=[
  {path:'',component:ToDosComponent },
  {path:'About',component:AboutComponent },
  {path:'DragDrop',component:FragdropComponent }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
