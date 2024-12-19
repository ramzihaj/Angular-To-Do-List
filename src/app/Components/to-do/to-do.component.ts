import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [FormsModule,
    CommonModule

  ],
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  Title: string = "To Do List Application";
  imageLink: string = "https://www.unepieceenplus.com/getattachment/f1d2612c-d50f-4ac5-974a-5330cee5463a/attachment.aspx?width=760";

  tasks: string[] = [];
  newTask: string = "";

  addTask(): void {
    if (this.newTask.trim() !== "") {
      this.tasks.push(this.newTask.trim());
      this.newTask = "";
    }
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  /*editTask(index: number): void {
    const updatedTask = prompt("Edit task", this.tasks[index]);
    if (updatedTask !== null && updatedTask.trim() !== "") {
      this.tasks[index] = updatedTask.trim();
    }
  }
  */  
  editTask(index: number, newTaskEdit:string): void | string
  {
    
    if(newTaskEdit.trim() !== ""){
      this.tasks[index] = newTaskEdit;
    }
    else 
    {
      newTaskEdit= this.tasks[index];
      return this.newTask = newTaskEdit;
    }
    this.newTask = "";
  }
}
