import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VedasBookComponent } from './vedas-book.component';

describe('VedasBookComponent', () => {
  let component: VedasBookComponent;
  let fixture: ComponentFixture<VedasBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VedasBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VedasBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
