import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {StorageIslamVisit} from "../../../../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-islam-visit-welcome',
  styleUrl: 'cnt-flexy-view-islam-visit-welcome.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamVisitWelcome implements ComponentInterface {

  @Prop() payload: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() intro: CntFlexyViewIslamVisitWelcome[] = []

  /**
   * Клик по картинке
   */
  @Event() clickWelcomeImage: EventEmitter;

  /**
   * Клик по тексту
   */
  @Event() clickWelcomeTitle: EventEmitter;

  /**
   * Клик по под тексту
   */
  @Event() clickWelcomeText: EventEmitter;

  render() {
    const getWelcome = this.payload.map((item) => {
      return (
        <div class="row justify-content-center">
          <div class="col-auto">
           <div class="img" style={{ backgroundImage: "url(" + StorageIslamVisit.prefix + item.image + ")" }} onClick={() => this.clickWelcomeImage.emit('WelcomeImage')}>
            </div>
          </div>
          <div class="col-12">
            <div class="text">
              <div class="text-1" onClick={() => this.clickWelcomeTitle.emit('WelcomeTitle')}>
                <h4>{item.titl}</h4>
              </div>
              <div class="text-2" onClick={() => this.clickWelcomeText.emit('WelcomeText')}>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div class="welcome">
        <div class="container">
          {getWelcome}
        </div>
      </div>
    );
  }

}
