import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinit-scroll',
  templateUrl: './infinit-scroll.page.html',
  styleUrls: ['./infinit-scroll.page.scss'],
})
export class InfinitScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll:IonInfiniteScroll;
  data:any[]=Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    //ESTO NOS SERVIRA PARA MOSTRAR DATOS DE LOS USUARIOS
    setTimeout(()=>{

        if(this.data.length>50){
          event.target.complete();
          this.infiniteScroll.disabled=true;
          return;
        }
        const nuevoArr=Array(20);
        this.data.push(...nuevoArr);
        event.target.complete();
    },1000);
  }

}
