import { Component, OnInit } from '@angular/core';
// import { ISettings } from './e-wizard.model';


@Component({
  selector: 'ngx-e-wizard',
  templateUrl: './e-wizard.component.html',
  styleUrls: ['./e-wizard.component.scss']
})
export class EWizardComponent implements OnInit {

  // model: ISettings = {} as ISettings;

  // selectedAndroid: HTMLInputElement;
  // dropBoxAndroid: HTMLElement;
  // selectAllModels: HTMLInputElement;

  // selectedFriends: HTMLElement;
  // dropBoxFriends: HTMLElement;

  // selectAllCheckbox: any =
  //   { name: 'selectAllBrowsers', checked: false };
  // browserCheckboxes: any[] = [
  //   { name: 'Chrome', value: 'chrome', checked: false },
  //   { name: 'Firefox', value: 'firefox', checked: false },
  //   { name: 'EDGE', value: 'edge', checked: false },
  //   { name: 'Safari', value: 'safari', checked: false },
  // ]

  // androidCheckbox: any = { name: 'Android', value: 'android', checked: false }
  // selectAllModelsCheckbox: any =
  //   { name: 'selectAllModels', checked: false };
  // modelsCheckboxes: any[] = [
  //   { name: 'Samsung Galaxy', value: 'galaxyG1', checked: false },
  //   { name: 'Samsung Galaxy', value: 'galaxyG1', checked: false },
  //   { name: 'Samsung Galaxy', value: 'galaxyG1', checked: false },
  //   { name: 'Samsung Galaxy', value: 'galaxyG1', checked: false },
  //   { name: 'Samsung Galaxy', value: 'galaxyG1', checked: false },
  //   { name: 'Samsung Galaxy', value: 'galaxyG1', checked: false },
  //   { name: 'Samsung Galaxy', value: 'galaxyG1', checked: false },
  //   { name: 'Samsung Galaxy', value: 'galaxyG1', checked: false },
  //   { name: 'Samsung Galaxy', value: 'galaxyG1', checked: false },
  //   { name: 'Samsung Galaxy', value: 'galaxyG1', checked: false },
  //   { name: 'Samsung Galaxy', value: 'galaxyG1', checked: false },

  // ]


  // castCheckboxesToModel() {
  //   //mora da se inicijalizuje svaki atribut da bi se vratio,
  //   // vracam se u krug
  //   // let array = Object.getOwnPropertyNames(this.model);
  //   // this.modelsCheckboxes.forEach((el) => {

  //   // })
  //   // this.model.android = this.androidCheckbox.checked;
  //   // console.log(this.model.android);
  //   // console.log(array);
  // }


  // // createConfigForm() {
  // //   this.configForm = this.fb.group({
  // //     displayName: [null, [Validators.required]],
  // //     email: [null, 
  // //       [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')],
  // //       [this.validateEmailNotTaken()]
  // //            ],
  // //     password: [null, [Validators.required]]
  // //   });
  // // }


  // toggleDrop() {
  //   this.dropBoxAndroid = document.querySelector('.drop-box');
  //   if (this.androidCheckbox.checked == true) {
  //     this.dropBoxAndroid.classList.add('active');
  //   } else {
  //     this.dropBoxAndroid.classList.remove('active');
  //   }
  // }
  // closeDrop() {
  //   this.selectedAndroid = <HTMLInputElement>document.getElementById('android');
  //   if (this.modelsCheckboxes.every(val => val.checked == false)) {
  //     this.selectedAndroid.checked = false;
  //   } else {
  //     this.selectedAndroid.checked = true;
  //   }
  //   // checked = true mozda ne radi

  //   this.dropBoxAndroid = document.querySelector('.drop-box');
  //   this.dropBoxAndroid.classList.remove('active');
  // }

  // toggleDropTwo() {
  //   this.dropBoxFriends = document.querySelector('.drop-box-two');
  //   console.log(this.dropBoxFriends)
  //   if (this.dropBoxFriends.classList.contains('active')) {
  //     this.dropBoxFriends.classList.remove('active');
  //   } else {
  //     this.dropBoxFriends.classList.add('active');
  //   }
  // }
  // closeDropTwo() {
  //   this.dropBoxAndroid = document.querySelector('.drop-box-two');
  //   this.dropBoxAndroid.classList.remove('active');
  // }
  // selectAllBrowsersToggle() {
  //   this.browserCheckboxes.forEach((el) => {
  //     el.checked = this.selectAllCheckbox.checked;
  //   });
  // }
  // selectAllModelsToggle() {
  //   this.modelsCheckboxes.forEach((el) => {
  //     el.checked = this.selectAllModelsCheckbox.checked;
  //   });
  // }

  // isAllSelected(selectAllBtn, selected) {
  //   selectAllBtn.checked = selected.every((el) => {
  //     return el.checked == true;
  //   });
  // }
  // confirm() {
  //   // this.castCheckboxesToModel();
  //   console.log(this.model);
  // }
  // sendRequest() {
  //   // this.castCheckboxesToModel();
  // }


  constructor() { }

  ngOnInit(): void {
  }

}
