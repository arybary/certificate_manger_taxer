import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CertificateData } from '../../models/certificate';

@Component({
  selector: 'certificate-info',
  templateUrl: './certificate-info.component.html',
  styleUrl: './certificate-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificateInfoComponent {
  @Input() certificateInfo?: CertificateData | null | undefined;
}
