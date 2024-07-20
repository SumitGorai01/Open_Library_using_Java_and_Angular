import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommicsBookComponent } from './commics-book.component';

describe('CommicsBookComponent', () => {
  let component: CommicsBookComponent;
  let fixture: ComponentFixture<CommicsBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommicsBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommicsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
