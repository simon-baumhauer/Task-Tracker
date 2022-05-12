import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTask(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
