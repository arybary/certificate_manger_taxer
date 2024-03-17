import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CertificateFacade } from '../../state/certificate.facade';
import { CertificateData } from '../../models/certificate';
import { Observable } from 'rxjs';

@Component({
  selector: 'input-and-info-certificate',
  templateUrl: './input-and-info-certificate.component.html',
  styleUrl: './input-and-info-certificate.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputAndInfoCertificateComponent {
  public readonly selectedCertificate$: Observable<CertificateData | null | undefined> =
    this.certificateFacade.selectedCertificate$;

  @Input() isAddCertificate?: boolean;
  @Output() fileChange = new EventEmitter<File>();

  constructor(private readonly certificateFacade: CertificateFacade) { }

  public onFileChange(file: File): void {
    this.certificateFacade.addCertificate(file);
    this.certificateFacade.loadCertificates();
    this.isAddCertificate = true;
  }
}
