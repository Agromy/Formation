import { Component } from '@angular/core';
import {Task, Task2, TaskStatus} from './task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/* mon composant appComponent a un attribu/propiété : title dont la valeur est une chaine de caractere
*/
export class AppComponent {
  task: Task ={
    name : 'Learn Angular',
    status : TaskStatus.Doing,
    deadLine: new Date ('2019-05-28')
  };

  task2: Task2 ={
    name : 'ou pas',
    status : TaskStatus.Done,
    deadLine: new Date ('2019-05-28'),
    doer: 'jlhfyitfv'
  }

}


