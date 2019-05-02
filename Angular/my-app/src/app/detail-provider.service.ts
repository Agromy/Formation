import { Injectable } from '@angular/core';
import {Task} from './task';
import {Subject, Observable} from 'rxjs';
import { TaskProviderService } from './task-provider.service';

@Injectable({
  providedIn: 'root'
})
export class DetailProviderService {
taskSubject = new Subject<Task>();

  constructor(private provider: TaskProviderService) {
    this.provider.getTasks().subscribe(tasks => this.taskSubject.next(tasks[0]));
   }

  getCurrentTask():Observable<Task>{
    return this.taskSubject.asObservable();
  }
  /*les composant (observateurs) peuvent souscrire aux observables mais ne doivent pas pouvoirs déclencher de nouveaux états*/
  /*permet de distribuer le taskSubject en tant qu'observable et non pas en tant que subject*/

  afficheDetail(task:Task){
  this.taskSubject.next(task);
  /*En cas de changement de tache courante on notifie les observateurs avec un nouvel état*/
  }
}
/*next est une fonction de subject qui permet de déclencher l'évennement et donc d'enclencher les observer*/