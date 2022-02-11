import { Component, OnInit } from '@angular/core';
import { Goal } from "../goal";
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal[] = [
    {id:1, name:'Watch Tinder Swindler',description:'Cause I was swayed by the mass, I am curious'},
    {id:2,name:'Buy Cookies',description: 'I have a craving'},
    {id:3,name:'Get new Phone Case',description:'Diana has her birthday coming up soon'},
    {id:4,name:'Get Dog Food',description:'Pupper likes expensive sancks'},
    {id:5,name:'Solve math homework',description:'Damn Math'},
    {id:6,name:'Plot my world domination plan',description:'Cause I am an evil overlord'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
