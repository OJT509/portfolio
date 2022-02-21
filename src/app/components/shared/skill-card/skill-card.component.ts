import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/modals/skill-modal';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {

  @Input() skillData: Skill;

  constructor() { }

  ngOnInit(): void {
  }

}
