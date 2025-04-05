import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MainLayoutComponent } from './Core/layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './Core/layout/auth-layout/auth-layout.component';
import { TimelineComponent } from './features/timeline/component/timeline/timeline.component';
import path from 'path';
import { SigninComponent } from './Core/Auth/signin/signin.component';
import { SignupComponent } from './Core/Auth/signup/signup.component';

export const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [] },

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'Signin', component: SigninComponent },
      { path: 'SignUp', component: SignupComponent },
    ],
  },
  {
    path: 'timeline',
    component: TimelineComponent,
    children: [],
  },
];
