import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos : string[] = [];
  new_todo:string = '';


  // here is the submit function which adds the todos

  submitTodo(){
    if(!!this.new_todo){
      this.todos.unshift(this.new_todo);
      this.new_todo = '';
    }
  }


// here is the function which removes the todo from list

  taskCompleted(index:number){
    this.todos.splice(index,1);
  }

}
