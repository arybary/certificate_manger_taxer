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

  public readonly selectedCertificate$: Observable<CertificateData | null | undefined> =
    this.certificateFacade.selectedCertificate$;

  public readonly selectedCertificateId$: Observable<number | null> =
    this.certificateFacade.selectedCertificateId$;

  constructor(private readonly certificateFacade: CertificateFacade) { }

  @Output() selectedCertificateChange = new EventEmitter();

  public onSelectedCertificateChange(id: number) {
    this.isAddCertificate = true;
    this.certificateFacade.selectCertificate(id);
  }
  public onClickButton() {
    this.isAddCertificate = !this.isAddCertificate;
  }
  public onFileChange(file: File): void {
    this.certificateFacade.addCertificate(file);
    this.certificateFacade.loadCertificates();
    this.isAddCertificate = true;
  }
  ngOnInit(): void {
    this.certificateFacade.loadCertificates();
  }
}
