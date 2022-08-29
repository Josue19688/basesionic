import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('lista') lista:IonList;

  usuarios:Observable<any>;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.usuarios=this.dataService.getUsers();
  }

  favorite(item:any){
     console.log('Favorite ', item);
     this.lista.closeSlidingItems();
  }

  shared(item:any){
    console.log('shared ', item);
    this.lista.closeSlidingItems();
  }

  unread(item:any){
    console.log('unread ', item);
    this.lista.closeSlidingItems();
  }

}
