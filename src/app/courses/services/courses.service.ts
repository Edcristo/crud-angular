import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from './../modelo/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {


  constructor(private httpClient: HttpClient) {}
  list(): Course[] {
    return [{ _id: '1', name: 'Angular', category: 'frot-end' }];
  }
}
