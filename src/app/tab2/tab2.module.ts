import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, NgModel } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    imports: [ 
        CommonModule ,
        FormsModule,
        IonicModule,
        Ng2SearchPipeModule
    ],
    declarations: [Tab2Page]
})

export class Tab2PageModule {}



