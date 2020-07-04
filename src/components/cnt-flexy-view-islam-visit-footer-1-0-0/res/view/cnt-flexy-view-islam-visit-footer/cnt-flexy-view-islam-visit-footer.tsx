import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-islam-visit-footer',
  styleUrl: 'cnt-flexy-view-islam-visit-footer.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamVisitFooter implements ComponentInterface {
  @Prop() categories: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() intro: CntFlexyViewIslamVisitFooter[] = []

  /**
   * Клик по text
   */
  @Event() clickFooterText: EventEmitter

  /**
   * Клик по privacy
   */
  @Event() clickFooterPrivacy: EventEmitter

  /**
   * Клик по support
   */
  @Event() clickFooterSupport: EventEmitter

  /**
   * Клик по subtext
   */
  @Event() clickFooterSubText: EventEmitter


  render() {
    const getFooter= this.categories.map((item) => {
      return (
        <div class="row justify-content-start d-flex">
         <div class="col-md-auto">
           <div class="text" onClick={() => this.clickFooterText.emit('FooterText')}>{item.button}
            {item.text}
           </div>
         </div>
          <div class="col-md-auto">
            <div class="text" onClick={() => this.clickFooterPrivacy.emit('FooterPrivacy')}>
            {item.privacy}
            </div>
          </div>
          <div class="col-md-auto">
            <div class="text" onClick={() => this.clickFooterSupport.emit('FooterSupport')}>
            {item.support}
            </div>
          </div>
          <div class="col-12">
            <div class="foo" onClick={() => this.clickFooterSubText.emit('FooterSubText')}>
              {item.subtext}
          </div>
          </div>
        </div>
      )
    });
    return (
     <div class="footer">
       <div class="container">
         {getFooter}
       </div>
     </div>
    );
  }

}
