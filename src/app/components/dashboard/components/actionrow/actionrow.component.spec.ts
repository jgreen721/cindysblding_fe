import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionrowComponent } from './actionrow.component';

describe('ActionrowComponent', () => {
  let component: ActionrowComponent;
  let fixture: ComponentFixture<ActionrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
