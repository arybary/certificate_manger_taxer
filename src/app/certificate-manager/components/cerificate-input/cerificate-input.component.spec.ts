import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerificateInputComponent } from './cerificate-input.component';

describe('CerificateInputComponent', () => {
  let component: CerificateInputComponent;
  let fixture: ComponentFixture<CerificateInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CerificateInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CerificateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
