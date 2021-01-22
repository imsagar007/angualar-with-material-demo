import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sampleweb';

  voiceSearch(){
    setTimeout(
      ()=>{
        alert("button clicked")
        console.log("button clicked console.log");

  },500);
  }
}
