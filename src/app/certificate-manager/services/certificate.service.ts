// certificate.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Certificate } from '../models/certificate';


@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  constructor() { }

  getCertificates(): Observable<Certificate[]> {
    // Логика загрузки сертификатов из LocalStorage
    const certificates: Certificate[] = JSON.parse(localStorage.getItem('certificates') as string) || [];
    return of(certificates);
  }

  convertAndAddCertificate(certificateData: File): Observable<Certificate> {
    // Логика преобразования и добавления сертификата
    const certificate: Certificate = {
      commonName: 'Example',
      issuerName: 'Issuer',
      validFrom: '2022-01-01',
      validTo: '2024-01-01'
    };

    const certificates: Certificate[] = JSON.parse(localStorage.getItem('certificates') as string) || [];
    certificates.push(certificate);
    localStorage.setItem('certificates', JSON.stringify(certificates));

    return of(certificate);
  }

  // Другие методы, если необходимо
}
