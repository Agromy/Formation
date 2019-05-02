import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Task} from '../task'
import {TaskProviderService} from '../task-provider.service';
import {DetailProviderService} from '../detail-provider.service'



@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {
/*Input va servir a mettre la propriété taskList dans la nouvelle balise HTML app nav list du selector de Component*/ 
 taskList: Array<Task>;

 

 constructor (
   private provider : TaskProviderService,
   private current: DetailProviderService,
 ){}

 ngOnInit(): void{
  this.provider.getTasks().subscribe(tasks => this.taskList=tasks);
}
/* on met dans le constructeur la classe TaskProviderService qui récupère via la méthode get l'objet Array<Task> du json task.json* par son URL*/

  select(task){
    console.log('j\'ai cliqué sur nav list',task);
    this.current.afficheDetail(task);
  }

}

