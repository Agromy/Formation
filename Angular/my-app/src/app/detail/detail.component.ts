import { Component,Input, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
/* le input permet de forcer la propriétée dans le html. Je donne le nom currentTask a la propriété que je force dans
 le HTML app.component.  */
  @Input() currentTask:Task;

  constructor() { }

  ngOnInit() {
  }

}
