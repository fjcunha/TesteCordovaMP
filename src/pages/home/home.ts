import { Component, ComponentFactoryResolver } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var window;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

public status:any = '';
public result:any = '';

  constructor(public navCtrl: NavController) {

  }

  createToken(){
    
    if (window.cordova) {
      console.log(JSON.stringify(window.cordova.plugins));
      // window.cordova.plugins.MP.coolMethod('FUNCIONOU!!!',
      //   function (success) {
      //     console.log('success coolMethod');
      //     console.log(JSON.stringify(success));
      //   },
      //   function (error) {
      //     console.log('failure coolMethod');
      //     console.log(JSON.stringify(error));
      //   }
      // );
      window.cordova.plugins.MP.createToken('TEST-2e305326-c806-4d57-97ca-98f761c9cebd', "5031433215406351", 11, 2019, "123", "APROJuan", "CPF", "42083779843",
        (success)=> {
          console.log('success create token');
          this.status = 'success create token';
          console.log(JSON.stringify(success));
          this.result = JSON.stringify(success);
        },
        (error) => {
          console.log('failure create token');
          this.status = 'failure create token';
          console.log(JSON.stringify(error));
          this.result = JSON.stringify(error);
        }
      );
    } else {
      console.log('Cordova not founded');
    }
  }

}
