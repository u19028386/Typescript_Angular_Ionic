import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MyeditPage } from '../myedit/myedit.page';
import { FoodService } from 'src/app/services/myservice';

import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule ],
})



export class Tab4Page implements OnInit{
  myprofile = {
    mfullname : 'Mbali Dlamini',
    mnumber : '092 122 4578',
    memail : 'mbali@gmail.com'

  }
 
  
  public ffood : any = [];
  public oTotal !: number;
  public FTotal !: number;
  public fdeliver : number = 50;
  public CTotal !: number;
  
  
  constructor (private mrouter : Router, private modalc : ModalController,private foodService: FoodService ) {}
  @ViewChild(IonModal)
  modal!: IonModal;


  message = 'This is a modal.';

  ngOnInit(): void {
    // this.foodService.getFood(+this.route.snapshot.params['id']).subscribe((food: any) => {this.food = food})
    this.foodService.getF().subscribe((ff: any) => {
      this.ffood = ff;
      this.oTotal = this.foodService.getTotP();
      this.FTotal = this.oTotal + this.fdeliver;
      this.CTotal = this.foodService.getTotCount() + 1;
    })
  }


  cancel() {
    this.modal.dismiss('cancel');
  }


  onOpen() {
    this.modal.present();
  }

  openCartPage (){
    this.mrouter.navigate(['/tabs/tab3']);
  }

  doedit(){
    this.modalc.create({
      component : MyeditPage,
      componentProps : this.myprofile

    }).then(modalres => {
      modalres.present();

      modalres.onDidDismiss().then( res => {
        if (res.data != null){
          this.myprofile = res.data;
        }
      })
    })

    // for past orders
    

  }}

