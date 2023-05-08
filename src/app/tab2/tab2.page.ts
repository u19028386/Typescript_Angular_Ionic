import { Component , OnInit} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { FoodService } from 'src/app/services/myservice';
import { Food } from 'src/app/shared/food';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule, Ng2SearchPipeModule,FormsModule
]
})
export class Tab2Page {

  searchName!: string;
  searchType!: string;
  searchRating!: number;
  searchDistance! : string;
  searchPrice!: number;
  food: any[] = [];
  constructor(private foodService: FoodService, private route: ActivatedRoute, private mrouter : Router) {}

  ngOnInit(): void {
    this.foodService.getFoods().subscribe((ff: any) => {this.food = ff;})
  }

  addCart(f: any){
    this.foodService.addCart(f);
    this.mrouter.navigate(['/tabs/tab3']);
  }





}
