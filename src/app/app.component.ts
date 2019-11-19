import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'abapDocApp';

  constructor( @Inject(DOCUMENT) private document: Document , private router: Router ) 
  {
  }

  ngOnInit() {
//    this.document.location.href = 'file:///C:/wamp64/www/Angular2/angular-cli/abapDocApp/src/app/doc/AbapDoc.html';
//    this.document.location.href = 'file://app/doc/AbapDoc.html';
    this.router.navigate(['abapdoc']);
  }  
}
