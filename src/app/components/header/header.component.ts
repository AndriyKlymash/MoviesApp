import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userSearch = {
    searchText: 'SEARCH'
  }

  // myForm1=new FormGroup({
  //   genres:new FormControl('genre')
  // })

  constructor() {
  }

  ngOnInit(): void {
  }

  search(myForm: HTMLFormElement) {
    console.log(myForm.searcText.value)
  }

  find() {

  }
}
