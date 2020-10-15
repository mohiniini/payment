import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitcardComponent } from './submitcard.component';

describe('SubmitcardComponent', () => {
  let component: SubmitcardComponent;
  let fixture: ComponentFixture<SubmitcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
