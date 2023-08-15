import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  enteredtxt:string='';
  onSubmit(inputEl:HTMLInputElement){
    this.enteredtxt=inputEl.value;
  }

}
