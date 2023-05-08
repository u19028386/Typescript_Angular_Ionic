import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule, IonModal } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FoodService } from 'src/app/services/myservice';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule],
})
export class Tab3Page implements OnInit{
  //food: any[] = [];
  public ffood : any = [];
  public oTotal !: number;
  public FTotal !: number;
  public CTotal !: number;
  public fdeliver : number = 50;

  constructor(private foodService: FoodService, private modalc : ModalController) {}
  @ViewChild(IonModal)
  modal!: IonModal;

  message = 'This is a modal.';

  ngOnInit(): void {
    this.foodService.getF().subscribe((ff: any) => {
      this.ffood = ff;
      this.oTotal = this.foodService.getTotP();
      this.FTotal = this.oTotal + this.fdeliver;
      this.CTotal = this.CTotal + 1;
    })
  }

  //move to past
  addCart(f: any){
    this.foodService.addCart(f);
  
  }

  myTot(){
    this.FTotal = this.oTotal + this.fdeliver;
  }

  cancel() {
    this.modal.dismiss('cancel');
  }

  mOpen(){
    this.modal.present();
  }

  // moving it to the 
  


  
}
