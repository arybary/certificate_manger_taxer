import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CertificateFacade } from './state/certificate.facade';
import { Observable } from 'rxjs';
import { Certificate } from './models/certificate';

@Component({
  selector: 'app-certificate-manager',
  templateUrl: './certificate-manager.component.html',
  styleUrl: './certificate-manager.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificateManagerComponent implements OnInit {
  public readonly certificates$: Observable<Certificate[]> = this.certificateFacade.certificates$;

  constructor(private readonly certificateFacade: CertificateFacade) { }



  ngOnInit(): void {
    this.certificateFacade.loadCertificates();
  }

}
