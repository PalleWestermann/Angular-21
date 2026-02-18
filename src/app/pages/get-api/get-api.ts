import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi implements OnInit{

  todoList: any[] = [];
  todoService = inject(TodoService)
  constructor(private http: HttpClient) {
    const res = this.todoService.concatStrings("Angular", "Tutorials");
  }
  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe({
      next: (result: any) => {
        this.todoList = result;
      }
    });
  }
}
