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
    console.log(evt);
    const tab: Tab = (evt.detail.tab as Tab);
    // Make sure we are responding to a tab change
    if (tab === undefined) {
      return;
    }
    console.log(`tab ${tab.tab} activated`);
    this.menuController.enable(true, tab.tab).then(menu => {
      // this.menuController.open(tab.tab); While this will open the menu, it's not what you expect in a splitview
      console.log('enabled menu', menu);
    });  }
}
