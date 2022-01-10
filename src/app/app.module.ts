import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsViewComponent } from './components/skills-view/skills-view.component';
import { WorkExperienceViewComponent } from './components/work-experience-view/work-experience-view.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { EducationViewComponent } from './components/education-view/education-view.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillsDrawerComponent } from './components/skills-drawer/skills-drawer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DrawerService } from './services/drawer.service';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GaugeModule } from 'angular-gauge';
import { NgxGaugeModule } from 'ngx-gauge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { ClassDialogComponent } from './components/class-dialog/class-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    SkillsViewComponent,
    WorkExperienceViewComponent,
    EducationViewComponent,
    SkillsDrawerComponent,
    ClassDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    ScrollingModule,
    MatProgressSpinnerModule,
    GaugeModule.forRoot(),
    NgxGaugeModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
    DrawerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
