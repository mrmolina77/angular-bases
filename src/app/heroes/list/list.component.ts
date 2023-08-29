import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public HeroeNames: string[] = ['Spiderman', 'Iromman', 'Hulk', 'She Hulk',  'Thor'];
  public lastDeleted?:string;

  removeLastHero() : void {
    this.lastDeleted=this.HeroeNames.pop();

  }
}
