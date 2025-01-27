import { ChainablePromiseElement } from 'webdriverio';
import { ViewsNameType } from '../../src/renderer/app/models/store.model';
import utils from '../libs/utils';

class Navigation {
  private tabIndexes: {
    ENV_ROUTES: number;
    ENV_DATABUCKETS: number;
    ENV_HEADERS: number;
    ENV_LOGS: number;
    ENV_PROXY: number;
    ENV_SETTINGS: number;
  } = {
    ENV_ROUTES: 1,
    ENV_DATABUCKETS: 2,
    ENV_HEADERS: 3,
    ENV_LOGS: 4,
    ENV_PROXY: 5,
    ENV_SETTINGS: 6
  };

  public get routesTab(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('app-header .header .nav .nav-item:nth-child(1) .nav-link');
  }

  public get databucketsTab(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('app-header .header .nav .nav-item:nth-child(2) .nav-link');
  }

  public get logsTab(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('app-header .header .nav .nav-item:nth-child(4) .nav-link');
  }

  public get headersTab(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('app-header .header .nav .nav-item:nth-child(3) .nav-link');
  }

  public get proxyTab(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('app-header .header .nav .nav-item:nth-child(5) .nav-link');
  }

  public get settingsTab(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('app-header .header .nav .nav-item:nth-child(6) .nav-link');
  }

  public async switchView(viewName: ViewsNameType): Promise<void> {
    await $(
      `.header .nav .nav-item:nth-child(${this.tabIndexes[viewName]}) .nav-link`
    ).click();
    await browser.pause(100);
  }

  public async assertActiveTab(viewName: ViewsNameType): Promise<void> {
    switch (viewName) {
      case 'ENV_DATABUCKETS':
        await utils.assertHasClass(this.databucketsTab, 'active');
        break;

      case 'ENV_ROUTES':
        await utils.assertHasClass(this.routesTab, 'active');
        break;

      case 'ENV_HEADERS':
        await utils.assertHasClass(this.headersTab, 'active');
        break;

      case 'ENV_LOGS':
        await utils.assertHasClass(this.logsTab, 'active');
        break;
    }
  }

  public async assertHeaderValue(
    viewName: ViewsNameType,
    value: string
  ): Promise<void> {
    switch (viewName) {
      case 'ENV_DATABUCKETS':
        await utils.assertElementText(this.databucketsTab, value, true);
        break;

      case 'ENV_ROUTES':
        await utils.assertElementText(this.routesTab, value, true);
        break;

      case 'ENV_HEADERS':
        await utils.assertElementText(this.headersTab, value, true);
        break;

      case 'ENV_LOGS':
        await utils.assertElementText(this.logsTab, value, true);
        break;
    }
  }
}

export default new Navigation();
