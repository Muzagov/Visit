import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {StorageIslamVisit} from "../../../../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-islam-visit-tell',
  styleUrl: 'cnt-flexy-view-islam-visit-tell.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamVisitTell implements ComponentInterface {
  @Prop() payload: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() intro: CntFlexyViewIslamVisitTell[] = []

  /**
   * Клик по title
   */
  @Event() clickTellTitle: EventEmitter

  /**
   * Клик по тексту
   */
  @Event() clickTellText: EventEmitter

  /**
   * Клик по subtext
   */
  @Event() clickTellSubText: EventEmitter

  /**
   * Клик по AppImage
   */
  @Event() clickTellAppImage: EventEmitter

  /**
   * Клик по GoogleImage
   */
  @Event() clickTellGoogleImage: EventEmitter

  componentDidLoad() {
    setTimeout (
      () => {
        // @ts-ignore
        AOS.init();
      },
      150
    )
  }

  render() {
    const getTell = this.payload.map((item) => {
      return (
        <div class="row">
          <div data-aos="fade-up" class="col-12">
            <div class="text">
              <div class="text-1" onClick={() => this.clickTellTitle.emit('TellTitle')}>
               {item.titl}
              </div>
              <div class="text-2" onClick={() => this.clickTellText.emit('TellText')}>
                {item.text}
              </div>
              <div class="subtext" onClick={() => this.clickTellSubText.emit('TellSubText')}>
                {item.subtext}
              </div>
              <div class="images d-flex">
                <div class="AppImage"
                     style={{ backgroundImage: "url(" + StorageIslamVisit.prefix + item.AppImage + ")" }}
                     onClick={() => this.clickTellAppImage.emit('TellAppImage')}>
                </div>
              <div class="GoogleImage"
                   style={{ backgroundImage: "url(" + StorageIslamVisit.prefix + item.GoogleImage + ")" }}
                   onClick={() => this.clickTellGoogleImage.emit('TellGoogleImage')}>
              </div>
              </div>
            </div>
          </div>
        </div>
      )
    });
    return (
     <div class="tell">
       <div class="container">
         {getTell}
       </div>
     </div>
    );
  }

}
