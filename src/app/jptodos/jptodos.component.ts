import { Component, OnInit } from '@angular/core';
import { JptodoService } from '../jptodo.service';
import { jptodo } from '../model/jptodo';
@Component({
  selector: 'app-jptodos',
  templateUrl: './jptodos.component.html',
  styleUrls: ['./jptodos.component.css'],
})
export class JptodosComponent implements OnInit {
  jptodos: jptodo[];
  jptodo: jptodo;
  constructor(private jptodoService: JptodoService) {
    this.jptodos = [];
    this.jptodo = {
      userId: 0,
      id: 0,
      title: '',
      completed: false,
    };
  }

  ngOnInit(): void {
    this.getJpTodos();
  }
  getJpTodos() {
    this.jptodoService.getTodos().subscribe((todos) => {
      console.log(todos);
      this.jptodos = todos;
    });
  }
  addTodo() {
    console.log('add to do', this.jptodo);
    this.jptodoService.addTodo(this.jptodo).subscribe((post) => {
      console.log('data from server');
      console.log(post);
      this.jptodos.unshift(post);
    });
  }
}
