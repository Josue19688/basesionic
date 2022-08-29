import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes:Componente[]=[
    {
      icon:'add-circle',
      name:'Action Sheet',
      redirectTo:'/action-sheet'
    },
    {
      icon:'alarm-outline',
      name:'Alerta',
      redirectTo:'/alert'
    },
    {
      icon:'person-circle-outline',
      name:'Avatar',
      redirectTo:'/avatar'
    },
    {
      icon:'toggle-outline',
      name:'Botones',
      redirectTo:'/botones'
    },
    {
      icon:'id-card-outline',
      name:'Tarjetas',
      redirectTo:'/cards'
    },
    {
      icon:'calendar',
      name:'Data Time',
      redirectTo:'/data-time'
    },
    {
      icon:'add-circle-outline',
      name:'Floatin bottons',
      redirectTo:'/fab'
    },
    {
      icon:'grid',
      name:'Responsive Rows',
      redirectTo:'/grid'
    },
    {
      icon:'infinite',
      name:'Infinite Scroll',
      redirectTo:'/infinit-scroll'
    },
    {
      icon:'hammer',
      name:'Input - Forms',
      redirectTo:'/input'
    },
    {
      icon:'list',
      name:'Lista - Sliding',
      redirectTo:'/list'
    },


  ];
  constructor() { }

  ngOnInit() {
  }

}

interface Componente{
  icon:string;
  name:string;
  redirectTo:string;
}
