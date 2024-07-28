import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTecketsComponent } from './new-teckets.component';

describe('NewTecketsComponent', () => {
  let component: NewTecketsComponent;
  let fixture: ComponentFixture<NewTecketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTecketsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTecketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
