import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SrcLibsApiComponent } from './src-libs-api.component';

describe('SrcLibsApiComponent', () => {
  let component: SrcLibsApiComponent;
  let fixture: ComponentFixture<SrcLibsApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SrcLibsApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SrcLibsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
