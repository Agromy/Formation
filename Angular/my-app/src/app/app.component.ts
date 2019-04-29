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
 
 tasks: Array<Task> =[ 
   { 
    name : 'Learn Angular',
    status : TaskStatus.Doing,
    deadLine: new Date ('2019-05-28')
  },

  {
    name : 'learn Angular 2',
    status : TaskStatus.ToDo,
    deadLine: new Date ('2019-05-28'),
    doer: 'Agromy'
  },

  {
    name : 'learn Angular 3',
    status : TaskStatus.ToDo,
    deadLine: new Date ('2019-05-28'),
    doer: 'Agromy',
    difficulty : 'extrem'
  }
  ];

  currentTask = this.tasks[1]

}


