
import { createAction, props } from '@ngrx/store';
import { Certificate } from '../../models/certificate';


export const loadCertificates = createAction('[Certificate] Load Certificates');
export const certificatesLoaded = createAction('[Certificate] Certificates Loaded', props<{ certificates: Certificate[] }>());

export const addCertificate = createAction('[Certificate] Add Certificate', props<{ certificateData: File }>());
export const certificateAdded = createAction('[Certificate] Certificate Added', props<{ certificate: Certificate }>());


