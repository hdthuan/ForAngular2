/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PageContentComponent } from './page-content.component';

describe('Component: PageContent', () => {
  it('should create an instance', () => {
    let component = new PageContentComponent();
    expect(component).toBeTruthy();
  });
});
