import {Component, ComponentInterface, EventEmitter, h, Prop, Event} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-islam-window-1-0-0',
  styleUrl: 'cnt-flexy-view-islam-window-1-0-0.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamWindow100 implements ComponentInterface {

  @Prop() payload: any;

  /**
   * Закрытие модального окна формы
   */
  @Event() closeForm: EventEmitter;

  render() {
    const clicker = item => {
      console.log(item);
    }
    return (
      <div>
        <cnt-flexy-view-islam-window payload={this.payload}
                                     onClickWindowHeading={(item) => clicker(item)}
                                     onClickWindowExit={(item) => clicker(item)}
                                     onClickWindowTwitter={(item) => clicker(item)}
                                     onClickWindowTwitterText={(item) => clicker(item)}
                                     onClickWindowFacebook={(item) => clicker(item)}
                                     onClickWindowFacebookText={(item) => clicker(item)}
                                     onClickWindowReddit={(item) => clicker(item)}
                                     onClickWindowRedditText={(item) => clicker(item)}
                                     onClickWindowInstagram={(item) => clicker(item)}
                                     onClickWindowInstagramText={(item) => clicker(item)}
                                     onClickWindowWhatsapp={(item) => clicker(item)}
                                     onClickWindowWhatsappText={(item) => clicker(item)}
                                     onClickWindowMessenger={(item) => clicker(item)}
                                     onClickWindowMessengerText={(item) => clicker(item)}
                                     onClickWindowTelegram={(item) => clicker(item)}
                                     onClickWindowTelegramText={(item) => clicker(item)}
                                     onClickWindowWeChat={(item) => clicker(item)}
                                     onClickWindowWeChatText={(item) => clicker(item)}
                                     onClickWindowLink={(item) => clicker(item)}
                                     onClickWindowInput={(item) => clicker(item)}
                                     onClickWindowLinkIcon={(item) => clicker(item)}
        />
      </div>
    );
  }

}
