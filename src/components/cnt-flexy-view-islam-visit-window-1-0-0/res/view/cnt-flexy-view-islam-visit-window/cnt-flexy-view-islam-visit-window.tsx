import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-islam-visit-window',
  styleUrl: 'cnt-flexy-view-islam-visit-window.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamVisitWindow implements ComponentInterface {

  @Prop() payload: any;

  /**
   * Закрытие модального окна формы
   */
  @Event() closeForm: EventEmitter;

  /**
   * ref для закрытия модального окна
   */
  ourModal: HTMLElement;


  public clickPopUp (event) {
    console.log(event)
    if (event.target === this.ourModal){
      this.closeForm.emit()
    }
  };



  render() {
    const getWindow = this.payload.map((item) => {
      return (
        <div class="container">
          <div class="row">
            <div class="col-10">
              <div class="heading">
                {item.Heading}
              </div>
            </div>
              <div class="col-2 text-right">
                <div class="exit">
                  {item.Exit}
                </div>
              </div>
            <div class="col-3">
              <div class="twitter">
                <i class={item.TwitterIcon}/>
              </div>
              <div class="twitterText">
                {item.TwitterText}
              </div>
            </div>

            <div class="col-3">
              <div class="facebook">
                <i class={item.FacebookIcon}/>
              </div>
              <div class="facebookText">
                {item.FacebookText}
              </div>
            </div>

            <div class="col-3">
              <div class="reddit">
                <i class={item.RedditIcon}/>
              </div>
              <div class="redditText">
                {item.RedditText}
              </div>
            </div>

            <div class="col-3">
              <div class="instagram">
                <i class={item.InstagramIcon}/>
              </div>
              <div class="instagramText">
                {item.InstagramText}
              </div>
            </div>

            <div class="col-3">
              <div class="whatsapp">
                <i class={item.WhatsappIcon}/>
              </div>
              <div class="whatsappText">
                {item.WhatsappText}
              </div>
            </div>

            <div class="col-3">
              <div class="messenger">
                <i class={item.MessengerIcon}/>
              </div>
              <div class="messengerText">
                {item.MessengerText}
              </div>
            </div>

            <div class="col-3">
              <div class="telegram">
                <i class={item.TelegramIcon}/>
              </div>
              <div class="telegramText">
                {item.TelegramText}
              </div>
            </div>

            <div class="col-3">
              <div class="weChat">
                <i class={item.WeChatIcon}/>
              </div>
              <div class="weChatText">
                {item.WeChatText}
              </div>
            </div>
            <div class="col-3">
              <div class="link">
                {item.link}
              </div>
            </div>
            <div class="col-12">
              <div class="inputWindow">
                <input type="text" placeholder={item.input} class="input"/>
              </div>
            </div>
          </div>
       </div>

      )
    });
    return (
      <div class="window">
        <div class="black" onClick={ (event) => this.clickPopUp(event)} ref={(el) => this.ourModal = el}>
        </div>
        {getWindow}
      </div>
    );
  }

}
