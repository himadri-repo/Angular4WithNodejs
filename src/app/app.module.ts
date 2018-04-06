import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { MenusectionComponent } from './menusection/menusection.component';
import { AppheaderComponent  } from './appheader/appheader.component';
import { AuthComponent  } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup.component';

/*Service imports*/
import { MetadataService } from './services/metadata.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: AuthComponent},
  {path: 'signup', component: SignupComponent},
  {path: '',  redirectTo: '/', pathMatch: 'full' },
  {path: '**',  component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent, MenusectionComponent, AppheaderComponent, AuthComponent, HomeComponent, SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase, 'salon'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [MetadataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
