import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CertificateStateModule } from './certificate-manager/state/certificate-state.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { appRedusers, metaReducers } from './redusers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { InputAndInfoCertificateComponent } from './certificate-manager/containers/input-and-info-certificate/input-and-info-certificate.component';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CertificateStateModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(appRedusers, { metaReducers }),
    EffectsModule.forRoot(),

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],



  bootstrap: [AppComponent]
})
export class AppModule { }
