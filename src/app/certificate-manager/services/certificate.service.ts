import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Certificate } from 'pkijs';
import * as asn1js from 'asn1js';
import { CertificateData } from '../models/certificate';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor() { }

  getCertificates(): Observable<CertificateData[]> {
    const certificates: CertificateData[] = JSON.parse(localStorage.getItem('certificates') || '[]');
    return of(certificates);
  }

  convertAndAddCertificate(certificateData: File): Observable<CertificateData> {
    return new Observable(observer => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as ArrayBuffer;
        const certificate = this.parseCertificate(new Uint8Array(result));
        const certificates: CertificateData[] = JSON.parse(localStorage.getItem('certificates') || '[]');
        certificates.push(certificate);
        localStorage.setItem('certificates', JSON.stringify(certificates));
        observer.next(certificate);
        observer.complete();
      };
      reader.readAsArrayBuffer(certificateData);
    });
  }





  parseCertificate(certData: Uint8Array): CertificateData {
    const asn1 = asn1js.fromBER(certData.buffer);
    const certificate = new Certificate({ schema: asn1.result });

    console.log(certificate);
    const id = new Date().getTime();
    const subject = certificate.subject.typesAndValues;
    const issuer = certificate.issuer.typesAndValues;
    const notBefore = certificate.notBefore.value;
    const notAfter = certificate.notAfter.value;

    const commonName = this.findCommonName(subject);
    const issuerName = this.findCommonName(issuer);

    const validFrom = notBefore ? notBefore.toISOString().substring(0, 10) : 'Unknown';
    const validTo = notAfter ? notAfter.toISOString().substring(0, 10) : 'Unknown';

    return {
      id,
      commonName,
      issuerName,
      validFrom,
      validTo
    };
  }

  findCommonName(nameArray: any[]): string {
    for (const typeAndValue of nameArray) {
      if (typeAndValue.type === '2.5.4.3') { // OID for Common Name
        return typeAndValue.value.valueBlock.value;
      }
    }
    return 'Unknown';
  }


}



