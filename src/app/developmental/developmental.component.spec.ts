import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentalComponent } from './developmental.component';

describe('DevelopmentalComponent', () => {
  let component: DevelopmentalComponent;
  let fixture: ComponentFixture<DevelopmentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopmentalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevelopmentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
