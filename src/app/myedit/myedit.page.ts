import { Component } from '@angular/core';
import { IonicModule, NavParams } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-myedit',
  templateUrl: 'myedit.page.html',
  styleUrls: ['myedit.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule, FormsModule],
})
export class MyeditPage {


  mProfile : any = {};
  
  constructor(private modalc : ModalController, private navP : NavParams) {
    this.mProfile = this.navP.data;
  }


  close(){
    this.modalc.dismiss(this.mProfile);
  }
}