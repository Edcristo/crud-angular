import { Component, OnInit } from '@angular/core';

import { Course } from '../modelo/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [
    {_id:"1", name: 'Angular', category: 'frot-end'}
  ];
  displayedColumns = ['name', 'category'];

  constructor() {
    //this.courses =[];
  }
  ngOnInit(): void {}
}
