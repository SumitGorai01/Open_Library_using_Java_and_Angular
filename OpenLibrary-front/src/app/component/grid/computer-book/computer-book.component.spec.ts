import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerBookComponent } from './computer-book.component';

describe('ComputerBookComponent', () => {
  let component: ComputerBookComponent;
  let fixture: ComponentFixture<ComputerBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComputerBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComputerBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
