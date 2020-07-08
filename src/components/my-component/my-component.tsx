import {Component, h, State,} from '@stencil/core';
import {
  forCreate,
  forFooter,
  forHeader,
  forInput,
  forTell,
  forWelcome, forWindow,
  forWrapper
} from "../../utils/mock";

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
  scoped: true,
})
export class MyComponent {

  @State() popupComplited: boolean;

  render() {
    return (
      <div>
        <cnt-flexy-view-islam-visit-welcome-1-0-0 payload={forWelcome}
                                                  pathToAssets={this.testPathToAssets}/>
        <cnt-flexy-view-islam-visit-header-1-0-0 categories={forHeader}
                                                 pathToAssets={this.testPathToAssets}/>
        <cnt-flexy-view-islam-visit-wrapper-1-0-0 payload={forWrapper}
                                                  pathToAssets={this.testPathToAssets}/>
        <cnt-flexy-view-islam-visit-create-1-0-0 payload={forCreate}
                                                 pathToAssets={this.testPathToAssets}/>
        <cnt-flexy-view-islam-visit-tell-1-0-0 payload={forTell}
                                               pathToAssets={this.testPathToAssets}/>
        <cnt-flexy-view-islam-visit-input-1-0-0 payload={forInput}/>
        <cnt-flexy-view-islam-visit-window-1-0-0 payload={forWindow}/>
        <cnt-flexy-view-islam-visit-footer-1-0-0 categories={forFooter}/>
      </div>
    )
  }
  /**
   * временный префикс ссылки для картинок
   */
  public testPathToAssets =
    "http://cdn.ramman.net/flexy-view/islam/visit/1.01/assets/";

  /**
   * Вызов модального окна формы
   */
  public openForm() {
    this.popupComplited = true;
  }

  /**
   * Закрытие модального окна формы
   */
  public closeForm() {
    this.popupComplited = false;
  }
}

