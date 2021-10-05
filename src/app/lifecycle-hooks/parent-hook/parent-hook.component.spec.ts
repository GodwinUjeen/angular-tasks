import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentHookComponent } from './parent-hook.component';

describe('ParentHookComponent', () => {
  let component: ParentHookComponent;
  let fixture: ComponentFixture<ParentHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentHookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
