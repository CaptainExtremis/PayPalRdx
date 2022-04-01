import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  title = "Account";

  constructor(private route: ActivatedRoute) { }

  friends = [
    { id: 1, name: 'Friend 1' },
    { id: 2, name: 'Friend 2' },
    { id: 3, name: 'Friend 3' },
  ];

  cashAdd()
  {
    var userMoney = 1600;
    let userInput = prompt("Type how much money you want to add.");
    var userNum = Number(userInput);

    if (userNum >= 1600)
    {
      alert("Overflow: You don't have that much money in your account.");
    }
    else
    {
      alert("Transaction successful");
    }
  }

  cashTransfer()
  {
    var userMoney = 1600;
    let userInput = prompt("Type how much money you want to transfer.");
    var userNum = Number(userInput);

    if (userNum > 1600)
    {
      alert("Overflow: You don't have that much money in your account.");
    }
    else
    {
      alert("Transaction successful");
    }
  }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
      let id = Number(params.get('userid'));
      console.log(id);
    })
  }

}
