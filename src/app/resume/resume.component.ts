import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  gmail = 'shnsalal@gmail.com';
  linkdin = 'https://www.linkedin.com/in/shankar-singh-salal-725796131/';
  github = 'https://github.com/shnsalal';

  constructor() { }

  ngOnInit() {
  }

}
