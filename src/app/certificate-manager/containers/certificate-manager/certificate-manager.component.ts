import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CertificateData } from '../../models/certificate';
import { CertificateFacade } from '../../state/certificate.facade';

@Component({
  selector: 'app-certificate-manager',
  templateUrl: './certificate-manager.component.html',
  styleUrl: './certificate-manager.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificateManagerComponent implements OnInit {
  public isAddCertificate: boolean = true;

  public readonly certificates$: Observable<CertificateData[]> =
    this.certificateFacade.certificates$;

  public readonly selectedCertificateId$: Observable<number | null> =
    this.certificateFacade.selectedCertificateId$;

  constructor(private readonly certificateFacade: CertificateFacade) { }

  @Output() selectedCertificateChange = new EventEmitter();

  public onSelectedCertificateChange(id: number) {
    console.log(id)
    this.certificateFacade.selectCertificate(id)
  }
  public onClick() {
    this.isAddCertificate = !this.isAddCertificate;
  }
  ngOnInit(): void {
    this.certificateFacade.loadCertificates();
    console.log(this.certificates$);
  }
}
