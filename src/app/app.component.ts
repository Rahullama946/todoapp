import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Item } from './item';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,ItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'To do Application';
  desc:string="";
  filter : "all" | "active" | "done" = "all";
   allItems= [
    { description: "eat", done: true },
    { description: "brush teeth", done: true},
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
   ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter === "done" ? item.done : !item.done);
  }

  addItem(description: string){
    this.allItems.unshift({
      description,
      done:false
    })
    this.desc="";
  }
  remove(item: Item){
    this.allItems.splice(this.allItems.indexOf(item),1);
  }
}
