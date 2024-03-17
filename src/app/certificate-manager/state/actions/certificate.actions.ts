import { createAction, createActionGroup, props } from '@ngrx/store';
import { CertificateData } from '../../models/certificate';

export const loadCertificates = createAction('[Certificate] Load Certificates');
export const certificatesLoaded = createAction(
  '[Certificate] Certificates Loaded',
  props<{ certificates: CertificateData[] }>()
);

export const addCertificate = createAction(
  '[Certificate] Add Certificate',
  props<{ certificateData: File }>()
);

export const certificateAdded = createActionGroup({
  source: '[Certificate] Certificate Added',
  events: {
    addCertificate: props<{ certificate: CertificateData }>(),
    selectCertificate: props<{ certificateId: number }>(),
  },
});
