import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserGraphComponent } from './user-graph/user-graph.component';
import { AuthGuardService } from './services/auth-gaurd.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UserGraphMoodComponent } from './user-graph-mood/user-graph-mood.component';
import { UserGraphDietComponent } from './user-graph-diet/user-graph-diet.component';
import { UserGraphAnalysisComponent } from './user-graph-analysis/user-graph-analysis.component';
import { UserGraphOverviewComponent } from './user-graph-overview/user-graph-overview.component';
import { LogMoodItemFormComponent } from './log-mood-item-form/log-mood-item-form.component';
import { LogSleepItemFormComponent } from './log-sleep-item-form/log-sleep-item-form.component';
import { LogDietItemFormComponent } from './log-diet-item-form/log-diet-item-form.component';
import { UserGraphSleepComponent } from './user-graph-sleep/user-graph-sleep.component';
import { UserGraphSleepQualityComponent } from './user-graph-sleep-quality/user-graph-sleep-quality.component';
import { UserGraphGeneralMoodComponent } from './user-graph-general-mood/user-graph-general-mood.component';
import { UserGraphAppetiteLevelComponent } from './user-graph-appetite-level/user-graph-appetite-level.component';
import { LogItemFormComponent } from './log-item-form/log-item-form.component';
import {MatSliderModule} from '@angular/material/slider';
const appRoutes: Routes = [
  { path: 'login', component: LoginFormComponent, data: { animation: 'tiger' } },
  { path: 'register', component: RegistrationFormComponent, data: { animation: 'dolphin'}},
  { path: 'profile', component: UserProfileComponent,data: { animation: 'dolphin'}},
  { path: 'add', component: LogItemFormComponent, data: { animation: 'dolphin'}},
  //{ path: 'graph', component: UserGraphComponent },
  //{ path: ':medium', component: LogItemListComponent, data: { animation: 'dolphin'}},
  { path: 'dietForm', component: LogDietItemFormComponent,data: { animation: 'dolphin'}},
  { path: 'sleepForm', component: LogSleepItemFormComponent, data: { animation: 'dolphin'}},
  { path: 'moodForm', component: LogMoodItemFormComponent, data: { animation: 'dolphin'}},
  {
    path: 'graph',
    component: UserGraphComponent,
    children: [
      {path: '', redirectTo: 'graph/overview',pathMatch: 'full'},
      {path: 'moodGraph', component: UserGraphMoodComponent, data: { animation: 'dolphin' }},
      {path: 'dietGraph', component: UserGraphDietComponent, data: { animation: 'dolphin' }},
      {path: 'overview', component: UserGraphOverviewComponent, data: { animation: 'dolphin' }},
      {path: 'analysisGraph', component: UserGraphAnalysisComponent, data: { animation: 'dolphin' }}, 
      {path: 'sleepGraph', component: UserGraphSleepComponent, data: { animation: 'dolphin' }},   
      {path: 'sleepQualityGraph', component: UserGraphSleepQualityComponent, data: { animation: 'dolphin' }},
      {path: 'generalMoodGraph', component: UserGraphGeneralMoodComponent, data: { animation: 'dolphin' }}, 
      {path: 'appetiteLevelGraph', component: UserGraphAppetiteLevelComponent, data: { animation: 'dolphin' }}
    ]
  },
 // { path: '**', pathMatch: 'full', redirectTo: '/error' }, CHANGE: ADD ERROR PAGE
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

export const routing = RouterModule.forRoot(appRoutes);