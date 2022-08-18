import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderportfolioComponent } from './headerportfolio.component';

describe('HeaderportfolioComponent', () => {
  let component: HeaderportfolioComponent;
  let fixture: ComponentFixture<HeaderportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderportfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
