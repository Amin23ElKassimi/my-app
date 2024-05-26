import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { CounterComponent } from './counter/counter.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    UserProfileComponent,
    ImageViewerComponent,
    CounterComponent,
    TwoWayBindingComponent,
    ClassBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatCardModule,
    FormsModule,
    [MatButtonModule, MatDividerModule, MatIconModule],
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
