import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateGroupingComponent } from './create-grouping.component';

describe('CreateGroupingComponent', () => {
  let component: CreateGroupingComponent;
  let fixture: ComponentFixture<CreateGroupingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGroupingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
