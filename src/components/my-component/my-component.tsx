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

  componentDidLoad() {
    this.popupComplited = false;

  }

  render() {

    return (
      <div >
        {
          this.popupComplited ? <cnt-flexy-view-islam-window-1_01 payload={forWindow} onCloseForm={() => {
              this.closeForm();
            }}/> :
            ''
        }

        <div onClick={ () => this.openForm()}>
        <cnt-flexy-view-islam-visit-welcome-1_01  payload={forWelcome}
                                                  pathToAssets={this.testPathToAssets}/>
        <cnt-flexy-view-islam-visit-header-1_01  categories={forHeader}
                                                 pathToAssets={this.testPathToAssets}/>
        <cnt-flexy-view-islam-visit-wrapper-1_01  payload={forWrapper}
                                                  pathToAssets={this.testPathToAssets}/>
        <cnt-flexy-view-islam-visit-create-1_01  payload={forCreate}
                                                 pathToAssets={this.testPathToAssets}/>
        <cnt-flexy-view-islam-visit-tell-1_01  payload={forTell}
                                               pathToAssets={this.testPathToAssets}/>
        <cnt-flexy-view-islam-visit-input-1_01  payload={forInput}/>

        <cnt-flexy-view-islam-visit-footer-1_01  categories={forFooter}/>
        </div>
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
    if (this.popupComplited === false){
      this.popupComplited = true;
    }

  }

  /**
   * Закрытие модального окна формы
   */
  public closeForm() {
    this.popupComplited = false;
  }
}

