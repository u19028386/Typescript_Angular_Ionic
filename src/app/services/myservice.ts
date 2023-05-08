import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of} from 'rxjs';
import { Food } from '../shared/food';
// import { Storage } from '@ionic/storage-angular';
// import { IonicStorageModule } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  //
  public foodCartItems : any =[]
  public fList = new BehaviorSubject<any>([]);

  private foodCart = [];
  


  constructor() {
    if(!localStorage.getItem('foods')) {
      let foods = [ 
        {
            "id": 1,
             "rname": "BigBurger",
             "rtype": "African",
            "rratings": 4,
            "rdistance": "7 kms away",
            "rimage": "assets/burger1.jpg",
            "rprice": 70,
        },
        {
                  "id": 2,
                   "rname": "PizzaPie",
                   "rtype": "Isian",
                  "rratings": 4.5,
                  "rdistance": "1.5 kms away",
                  "rimage": "assets/pizza2.jpg",
                  "rprice": 70,
              },
              {
                   "id": 3,
                  "rname": "BriyaniQueen",
                  "rtype": "Indian",
                  "rratings": 3,
                  "rdistance": "2 kms away",
                  "rimage": "assets/briyani3.jpg",
                  "rprice": 90,
                },
                {
                  "id": 4,
                  "rname": "MinceQueen",
                  "rtype": "Italian",
                  "rratings": 4,
                  "rdistance": "3 kms away",
                  "rimage": "assets/mince4.jpg",
                  "rprice": 70,
                },
      ]  
      localStorage.setItem('foods', JSON.stringify(foods)) 
    }
   }


  getFoods(): Observable<any[]> {
    let foods:any[]=[]
    if (localStorage.getItem('foods'))
    {
      foods = JSON.parse(localStorage.getItem('foods')!)
    }
    return of(foods)
  }



  getFood(id:number): Observable<any>
  {
    let foods:Food[]  = [];

    if (localStorage.getItem('foods'))
    {
      foods = JSON.parse(localStorage.getItem('foods')!)
    }

    let food:any = foods.find(food => food.id === id)

    return of(food)
  }

  
   getsetFood( f : any){
     this.foodCartItems.push(f);
     this.fList.next(f);
   }

   addCart(f : any){
     this.foodCartItems.push(f);
     this.fList.next(this.foodCartItems);
    this.getTotP();
    this.getTotCount();
     
   }

   getF(): Observable<any[]>{
    let foodss:any[]=[]
    foodss = this.foodCartItems
    return of (foodss)
   }
   
   getTotP() : number{
     let sumTot = 0;
     this.foodCartItems.map((p:any)=>{sumTot += p.rprice});
     return sumTot;
   }

   getTotCount() : number {
    let fCount = 0;
    return fCount;
   }

   
}