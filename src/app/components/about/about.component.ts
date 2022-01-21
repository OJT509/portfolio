import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/modals/skill-modal';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  birthDate: string = "September, 5, 1997";
  age: number;

  skills: Skill[] = [
    { skillName: "Angular", skillIcon: "fab fa-angular fa-2x" },
    { skillName: "Material", skillIcon: "fas fa-pencil-alt fa-2x" },
    { skillName: "Bootstrap", skillIcon: "fab fa-bootstrap fa-2x" },
    { skillName: "TypeScript", skillIcon: "fas fa-file-code fa-2x" },
    { skillName: "HTML", skillIcon: "fab fa-html5 fa-2x" },
    { skillName: "CSS", skillIcon: "fab fa-css3-alt fa-2x" },
    { skillName: "C#", skillIcon: "fas fa-laptop-code fa-2x" },
    { skillName: "Git Bash", skillIcon: "fas fa-terminal fa-2x" }
  ]

  constructor() { }

  ngOnInit(): void {
    this.age = this.getAge(this.birthDate);
  }

  getAge(dateString: string): number {
    let todaysDate = new Date();
    let fullBirthDate = new Date(dateString);
    let currentAge = todaysDate.getFullYear() - fullBirthDate.getFullYear();
    let m = todaysDate.getMonth() - fullBirthDate.getMonth();
    if (m < 0 || (m === 0 && todaysDate.getDate() < fullBirthDate.getDate())) {
      currentAge--;
    }
    return currentAge;
  }
}
