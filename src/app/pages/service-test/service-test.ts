import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-service-test',
  imports: [],
  templateUrl: './service-test.html',
  styleUrl: './service-test.css',
})
export class ServiceTest {

  constructor(private todoService: TodoService) {
    const res = todoService.concatStrings("Angular", "Tutorial");
  }
}
