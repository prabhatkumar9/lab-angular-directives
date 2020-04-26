import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  studentList: any = [
    { SrlNo: 1, Name: 'Charlie', Course: 'Bsc(Hons)', Grade: 'A' },
    { SrlNo: 2, Name: 'Leslie', Course: 'BA', Grade: 'B' },
    { SrlNo: 3, Name: 'John', Course: 'Bcom', Grade: 'C' },
    { SrlNo: 4, Name: 'Jack', Course: 'Bsc-Hons', Grade: 'D' },
    { SrlNo: 5, Name: 'Shawn', Course: 'MBA', Grade: 'A' },
    { SrlNo: 6, Name: 'Shilling', Course: 'Msc', Grade: 'B' },
    { SrlNo: 7, Name: 'Tensing', Course: 'MA', Grade: 'C' },
    { SrlNo: 8, Name: 'Bob', Course: 'MBA', Grade: 'D' },
    { SrlNo: 9, Name: 'Gorge', Course: 'MA', Grade: 'B' },
    { SrlNo: 10, Name: 'weasly', Course: 'B.Tech', Grade: 'A' },

  ];





  title = 'directive-attribute';

  successClass = "text-success";
  hasError = false;
  public isSpecial = true;
  public highColor = "orange";
  public colors = ["red", "blue", "green", "yellow"];
  phones = ["Iphone 10", "Samsung Galaxy 9", "Blackbery 10Z"];

  // ng class
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  // ng Style 
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  public chngeCol: any = "";
  public art: any = "";
  public swStyleA: any = {
    'font-size': '18px', 'color': 'red',
  }
  public swStyleB: any = {
    'font-size': '16px', 'color': 'blue'
  }
  public swStyleC: any = {
    'font-size': '14px', 'color': 'green'
  }
  public swStyleD: any = {
    'font-size': '12px', 'color': 'black'
  }


  public changecolor(): void {
    this.chngeCol = {
      color: "goldenrod",
      fontSize: "xx-large",
    }
  }

  public changeArt() {
    this.art = {
      margin: "10px",
      border: "2px solid orangered",
      padding: "15px",
      backgroundColor: "rgba(128, 128, 128, 0.24)",
      width: "50%"
    }
  }

  display = false;

  public show(): void {
    this.display = true;

  }

  public hide(): void {
    this.display = false;
  }

  error: boolean = true;
  public showNgblock(): void {
    if (this.error) {
      this.error = false;
    } else {
      this.error = true;
    }
  }

}
