import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  //Mention Config
  dropdown: any = [
    { key: "Chirag", value: "Chirag Humphreys", email: "Chirag@zurb.com", avatar_url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=20' },
    { key: "Sush", value: "Sush Bihar", email: "Sush@zurb.com", avatar_url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=20' },
    { key: "Gohel", value: "Gohel Sir", email: "Gohel@zurb.com", avatar_url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=20' },
    { key: "Ronak", value: "Ronak Bapu", email: "Ronak@zurb.com", avatar_url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=20' },
    { key: "Sushma Tivari", value: "Sushma Tivari", email: "Tivari@zurb.com", avatar_url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=20' },
    { key: "Patel", value: "Patel Bhai", email: "Patel@zurb.com", avatar_url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=20' },
    { key: "Sushi", value: "Sushi Tivari", email: "Sushi@zurb.com", avatar_url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=20' },
    { key: "Sidhu", value: "Sidhu Tivari", email: "Sidhu@zurb.com", avatar_url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=20' },
    { key: "Ronak", value: "Ronak Bapu", email: "Ronak@zurb.com", avatar_url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=20' },
    { key: "Sushma Tivari", value: "Sushma Tivari", email: "Tivari@zurb.com", avatar_url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=20' },
    { key: "Patel", value: "Patel Bhai", email: "Patel@zurb.com", avatar_url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=20' },
    { key: "Sushi", value: "Sushi Tivari", email: "Sushi@zurb.com", avatar_url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=20' },
    { key: "Sidhu", value: "Sidhu Tivari", email: "Sidhu@zurb.com", avatar_url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=20' }
  ];

  config: any = {
    trigger: '@',
    selectClass: 'highlight',
    values: [],
    menuContainer: document.getElementById("wrapper"),
    menuItemTemplate: function (item) {
      return '<img src="' + item.original.avatar_url + '">' + "&nbsp;<b>" + item.original.key + "</b>";
    },
    selectTemplate: function (item) {
      return (
        '<span contenteditable="false">&nbsp;<a href="http://zurb.com" target="_blank" title="' + item.original.email + '">' + item.original.key + "</a></span>"
      );
    }
  }

  constructor() { }
}
