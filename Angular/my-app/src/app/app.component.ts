import { Component } from '@angular/core';
import {Task, TaskStatus} from './task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/* mon composant appComponent a un attribu/propiété : name dont la valeur est une chaine de caractere
*/
export class AppComponent {
 
 tasks: Array<Task> =[ 
   { 
    name : 'Learn Angular',
    status : TaskStatus.Doing,
    deadLine: new Date ('2019-05-28'),
    doer : 'Agromy',
    difficulty : "bla"
  },

  {
    name : 'learn Angular 2',
    status : TaskStatus.ToDo,
    deadLine: new Date ('2019-05-28'),
    doer: 'Agromy',
    difficulty : "hard"
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

  afficheDetail(task : Task){
  console.log('j\'ai récupéré ma tache', task);
  this.currentTask = task;

  }

  addTaskToList(task : Task){
    this.tasks.unshift(task);
    this.currentTask = task
/*unshift est egale a push*/
  }


}



