import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CertificateData } from '../../models/certificate';

@Component({
  selector: 'certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrl: './certificate-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificateListComponent {
  @Input() certificates: CertificateData[] = [];
  @Input() selectedCertificateId?: number | null;
  @Output() selectedCertificateChange = new EventEmitter();

  public onChange(id: number) {



    this.selectedCertificateChange.emit(id);
  }
}
