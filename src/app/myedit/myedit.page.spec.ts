import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { MyeditPage } from './myedit.page';

describe('MyeditPage ', () => {
  let component: MyeditPage ;
  let fixture: ComponentFixture<MyeditPage >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyeditPage , IonicModule, ExploreContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyeditPage );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
