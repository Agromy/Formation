import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task, TaskStatus} from '../task'



@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {
/*Input va servir a mettre la propriété taskList dans la nouvelle balise HTML app nav list du selector de Component*/ 
 @Input() taskList: Array<Task>;

 /*Output va servir à transmettre une donnée au parent via task selected qui est le nom de l'évennement que j'ai créé 
 grace a new EventEmitter (outil de angular) : donc ici on fabrique un nouvel evennement. Par ailleurs, <Task> est le typage de ce nouvel evenement.
 */
 @Output() taskSelected = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  select(task){
    console.log('j\'ai cliqué sur nav list',task);
    this.taskSelected.emit(task);
  }

}
