import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAndInfoCertificateComponent } from './input-and-info-certificate.component';

describe('InputAndInfoCertificateComponent', () => {
  let component: InputAndInfoCertificateComponent;
  let fixture: ComponentFixture<InputAndInfoCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputAndInfoCertificateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputAndInfoCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
