import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo:string;

  constructor(private alertController:AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: [
        {
          text:'Cancel',
          handler:(blah)=>{
            console.log('Cancelar');
          }
        },
        {
          text:'Ok!',
          handler:(blah)=>{
            console.log('Confirmar');
          }
        }
      ],
    });

    await alert.present();
  }

//capturar datos atravez de un modal de alerta
  async presentAlerttwo() {
    const alert = await this.alertController.create({
      header: 'Input',
      subHeader:'Ingrese su información',
      inputs: [
        {
          placeholder: 'Name',
          type:'text',
          name:'txtNombre'
        },
      ],
      buttons: [
        {
          text:'Cancel',
          handler:(blah)=>{
            console.log('Cancelar');
          }
        },
        {
          text:'Ok!',
          handler:(data)=>{
            console.log('Confirmar', data);
            this.titulo=data.txtNombre;
          }
        }
      ],
    });

    await alert.present();
  }

}
