import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-islam-window',
  styleUrl: 'cnt-flexy-view-islam-window.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamWindow implements ComponentInterface {

  @Prop() payload: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() intro: CntFlexyViewIslamWindow[] = []

  /**
   * Закрытие модального окна формы
   */
  @Event() closeForm: EventEmitter;

  /**
   * Клик по heading
   */
  @Event() clickWindowHeading: EventEmitter;

  /**
   * Клик по exit
   */
  @Event() clickWindowExit: EventEmitter;

  /**
   * Клик по Twitter
   */
  @Event() clickWindowTwitter: EventEmitter;

  /**
   * Клик по TwitterText
   */
  @Event() clickWindowTwitterText: EventEmitter;

  /**
   * Клик по Facebook
   */
  @Event() clickWindowFacebook: EventEmitter;

  /**
   * Клик по FacebookText
   */
  @Event() clickWindowFacebookText: EventEmitter;

  /**
   * Клик по Reddit
   */
  @Event() clickWindowReddit: EventEmitter;

  /**
   * Клик по RedditText
   */
  @Event() clickWindowRedditText: EventEmitter;

  /**
   * Клик по Instagram
   */
  @Event() clickWindowInstagram: EventEmitter;

  /**
   * Клик по InstagramText
   */
  @Event() clickWindowInstagramText: EventEmitter;

  /**
   * Клик по Whatsapp
   */
  @Event() clickWindowWhatsapp: EventEmitter;

  /**
   * Клик по WhatsappText
   */
  @Event() clickWindowWhatsappText: EventEmitter;

  /**
   * Клик по Messenger
   */
  @Event() clickWindowMessenger: EventEmitter;

  /**
   * Клик по MessengerText
   */
  @Event() clickWindowMessengerText: EventEmitter;

  /**
   * Клик по Telegram
   */
  @Event() clickWindowTelegram: EventEmitter;

  /**
   * Клик по TelegramText
   */
  @Event() clickWindowTelegramText: EventEmitter;

  /**
   * Клик по WeChat
   */
  @Event() clickWindowWeChat: EventEmitter;

  /**
   * Клик по WeChatText
   */
  @Event() clickWindowWeChatText: EventEmitter;

  /**
   * Клик по Link
   */
  @Event() clickWindowLink: EventEmitter;

  /**
   * Клик по Input
   */
  @Event() clickWindowInput: EventEmitter;


  /**
   * Клик по LinkIcon
   */
  @Event() clickWindowLinkIcon: EventEmitter;

  /**
   * ref для закрытия модального окна
   */
  ourModal: HTMLElement;


  public clickPopUp (event) {
    console.log(event.target)
    if (event.target === this.ourModal){
      this.closeForm.emit()
    }
  };



  render() {
    const getWindow = this.payload.map((item) => {
      return (
        <div class="modaleWindow">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-9">
                <div class="heading" onClick={() => this.clickWindowHeading.emit('WindowHeading')}>
                  {item.Heading}
                </div>
              </div>
                <div class="col-auto text-right" onClick={ () => this.closeForm.emit()}>
                  <div class="exit" onClick={() => this.clickWindowExit.emit('WindowExit')}>
                    {item.Exit}
                  </div>
                </div>
              <div class="col-auto">
                <div class="twitter"  onClick={() => this.clickWindowTwitter.emit('WindowTwitter')}>
                  <i class={item.TwitterIcon}/>
                </div>
                <div class="twitterText"  onClick={() => this.clickWindowTwitterText.emit('WindowTwitterText')}>
                  {item.TwitterText}
                </div>
              </div>

              <div class="col-auto">
                <div class="facebook">
                  <i class={item.FacebookIcon}  onClick={() => this.clickWindowFacebook.emit('WindowFacebook')}/>
                </div>
                <div class="facebookText" onClick={() => this.clickWindowFacebookText.emit('WindowFacebookText')}>
                  {item.FacebookText}
                </div>
              </div>

              <div class="col-auto">
                <div class="reddit" onClick={() => this.clickWindowReddit.emit('WindowReddit')}>
                  <i class={item.RedditIcon}/>
                </div>
                <div class="redditText" onClick={() => this.clickWindowRedditText.emit('WindowRedditText')}>
                  {item.RedditText}
                </div>
              </div>

              <div class="col-auto">
                <div class="instagram" onClick={() => this.clickWindowInstagram.emit('WindowInstagram')}>
                  <i class={item.InstagramIcon}/>
                </div>
                <div class="instagramText" onClick={() => this.clickWindowInstagramText.emit('WindowInstagramText')}>
                  {item.InstagramText}
                </div>
              </div>

              <div class="col-auto">
                <div class="whatsapp" onClick={() => this.clickWindowWhatsapp.emit('WindowWhatsapp')}>
                  <i class={item.WhatsappIcon}/>
                </div>
                <div class="whatsappText" onClick={() => this.clickWindowWhatsappText.emit('WindowWhatsappText')}>
                  {item.WhatsappText}
                </div>
              </div>

              <div class="col-auto">
                <div class="messenger" onClick={() => this.clickWindowMessenger.emit('WindowMessenger')}>
                  <i class={item.MessengerIcon}/>
                </div>
                <div class="messengerText" onClick={() => this.clickWindowMessengerText.emit('WindowMessengerText')}>
                  {item.MessengerText}
                </div>
              </div>

              <div class="col-auto">
                <div class="telegram" onClick={() => this.clickWindowTelegram.emit('WindowTelegram')}>
                  <i class={item.TelegramIcon}/>
                </div>
                <div class="telegramText" onClick={() => this.clickWindowTelegramText.emit('WindowTelegramText')}>
                  {item.TelegramText}
                </div>
              </div>

              <div class="col-auto">
                <div class="weChat" onClick={() => this.clickWindowWeChat.emit('WindowWeChat')}>
                  <i class={item.WeChatIcon}/>
                </div>
                <div class="weChatText" onClick={() => this.clickWindowWeChat.emit('WindowWeChatText')}>
                  {item.WeChatText}
                </div>
              </div>
              <div class="col-12">
                <div class="link" onClick={() => this.clickWindowLink.emit('WindowLink')}>
                  {item.link}
                </div>
              </div>
              <div class="col-10">
                <div class="inputWindow">
                  <input type="text" placeholder={item.input} class="input" onClick={() => this.clickWindowInput.emit('WindowInput')}/>
                </div>
              </div>
              <div class="col-2">
                <div class="linkIcon">
                  <i class={item.LinkIcon} aria-hidden="true" onClick={() => this.clickWindowLinkIcon.emit('WindowLinkIcon')}/>
                </div>
              </div>
            </div>
         </div>
     </div>

      )
    });
    return (
      <div class="window">
        {getWindow}
        <div class="black" onClick={ (event) => this.clickPopUp(event)} ref={(el) => this.ourModal = el}>
        </div>
      </div>
    );
  }

}
