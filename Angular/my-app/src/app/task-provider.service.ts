import { Injectable } from '@angular/core';
import {Task} from './task';
import { HttpClient} from '@angular/common/http';
import {Observable, ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskProviderService {
tasks= new Array<Task>();
  tasksSubject = new ReplaySubject<Task[]>(1);

  constructor(private http : HttpClient){
    this.http.get<Task[]>('assets/tasks/json')
    .subscribe(tasks=>{this.tasks=tasks;
    this.tasksSubject.next(this.tasks);
  });

}

getTasks():Observable<Task[]>{
  return this.tasksSubject.asObservable();
  /*on doit typer l'appel get pour lui dire qu'on recupere des Task[] et on rend donc le retour compatible avec l'Observable qu'on a typé en Task[]*/
  /*ici c'est le client http qui va créer l'observable pour nous?*/
  };
   add(newTask: Task){
     console.log('add')
     this.tasks.unshift(newTask);
     this.tasksSubject.next(this.tasks);
   }


}
