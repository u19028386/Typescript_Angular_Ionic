import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/myservice';
import { Food } from 'src/app/shared/food';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule],
})
export class Tab1Page {
food: any[] = [];
fCart = [];
  constructor(private foodService: FoodService, private route: ActivatedRoute, private mrouter : Router) {}

  ngOnInit(): void {
    // this.foodService.getFood(+this.route.snapshot.params['id']).subscribe((food: any) => {this.food = food})
    this.foodService.getFoods().subscribe((ff: any) => {this.food = ff;})
  }

   addCart(f: any){
     this.foodService.addCart(f);
     this.mrouter.navigate(['/tabs/tab3']);
   }

 

  
}
