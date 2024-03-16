import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CertificateFacade } from '../../state/certificate.facade';

@Component({
  selector: 'app-input-and-info-certificate',
  templateUrl: './input-and-info-certificate.component.html',
  styleUrl: './input-and-info-certificate.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputAndInfoCertificateComponent {

  @Output() fileChange = new EventEmitter<File>()

  constructor(private readonly certificateFacade: CertificateFacade) { }

  public onFileChange(file: File): void {
    this.certificateFacade.addCertificate(file)
    console.log(file)

  }

}
