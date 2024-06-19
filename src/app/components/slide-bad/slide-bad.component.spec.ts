import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideBadComponent } from './slide-bad.component';

describe('SlideBadComponent', () => {
  let component: SlideBadComponent;
  let fixture: ComponentFixture<SlideBadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlideBadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlideBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
