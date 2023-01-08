import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { HomeCoreComponent } from './home-core/home-core.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { SliderComponent } from './home-core/compornent/slider/slider.component';
import {MatBadgeModule} from '@angular/material/badge';
import { NavbarComponent } from './home-core/compornent/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatBadgeModule
  ],
  declarations: [HomeCoreComponent,SliderComponent,NavbarComponent]
})
export class CoreModule { }
