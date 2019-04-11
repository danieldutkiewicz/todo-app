import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] })

export class AppComponent {
  title = 'Simple To-Do';
  todoArray = JSON.parse(localStorage.getItem("todo"));

  //Submits form and validation
  todoSubmit(value:any){
    if(value.length > 0){
      if(!this.todoArray){
        this.todoArray = [];
      }
      this.todoArray.push(value);
      localStorage.setItem("todo", JSON.stringify(this.todoArray));
    }
    else{
      //do nothing
    }
  }
   
  //Deletes todo from list
  deleteItem(index:any){
    this.todoArray.splice(index, 1);
    localStorage.clear();
    localStorage.setItem("todo", JSON.stringify(this.todoArray));
    }
}
