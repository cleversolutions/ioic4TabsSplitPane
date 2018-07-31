import { Component } from '@angular/core';
import { MenuController, Tab } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(private menuController: MenuController) {

  }

  protected tabChanged(evt: CustomEvent) {
    const tab: Tab = (evt.detail.tab as Tab);
    // Make sure we are responding to a tab change
    if (tab === undefined) {
      return;
    }
    console.log(`tab ${tab.label} activated`);
    this.menuController.enable(true, tab.label).then(menu => {
      console.log('enabled menu', menu);
    });
  }
}
