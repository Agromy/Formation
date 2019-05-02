import { Component,OnInit } from '@angular/core';
import { Task } from '../task';
import {DetailProviderService} from '../detail-provider.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
/* le input permet de forcer la propriétée dans le html. Je donne le nom currentTask a la propriété que je force dans
 le HTML app.component.  */
 task= new Task("doer");

  constructor (private DetailProviderService : DetailProviderService) {}

  ngOnInit(): void{
    this.DetailProviderService.getCurrentTask().subscribe(task => this.task = task);
    };
    /* je recupere getTasks de mon manager (juste plus haut)  qui vient de task-provider.service et je lui subscribe */
/*je donne a mon observable qui fait partie de ma fonction getTasks la fonction subscribe*/
  }

 


