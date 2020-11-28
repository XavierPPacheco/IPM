import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ipm-website';

  myFunction = () => {
    alert("clicked")
    document.getElementById("myDropdown").classList.toggle("show");
  }
}

