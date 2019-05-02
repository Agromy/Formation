import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { DetailComponent } from './detail/detail.component';
import { BiduleComponent } from './bidule/bidule.component';
import { CreateComponent } from './create/create.component';
import { TaskProviderService } from './task-provider.service';

/*const taskFactory = (language) =>{
  if(language ==='fr'){
    return new Task();
  }
  return new Task();
}*/

@NgModule({
  declarations: [
    AppComponent,
    NavListComponent,
    DetailComponent,
    BiduleComponent,
    CreateComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    /*module HttpClient rajouter pour aller chercher le task.json via une requiete ajax*/
  ],
  
  providers: [
    TaskProviderService,
  /* l'écriture du dessus est le raccourci de : {provide: TaskProviderService, useClass: TaskProviderService}
    c'est un provider de classes. qui a le type TaskProviderService et le nom (par provide)TaskProviderService */
  /* {provide: TaskProviderService, useExisting: TaskProviderService} créer un alias sur un service existant*/
  /* {provide: Task, useValue: {name: 'coucou'}}  donne une valeur a une propriété*/
  /* {provide: Task, useFactory: taskFactory, deps: ['fr'] } on passe une fonction qui a été créée plus haut et a qui on passe le parametre fr */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
