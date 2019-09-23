import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioritySelectComponent } from './priority-select.component';
import { FormsModule } from '@angular/forms';

describe('PrioritySelectComponent', () => {
  let component: PrioritySelectComponent;
  let fixture: ComponentFixture<PrioritySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ PrioritySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioritySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
