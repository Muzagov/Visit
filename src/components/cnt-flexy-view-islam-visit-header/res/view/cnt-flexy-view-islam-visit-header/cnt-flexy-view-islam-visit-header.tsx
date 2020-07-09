import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {StorageIslamVisit} from "../../../../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-islam-visit-header',
  styleUrl: 'cnt-flexy-view-islam-visit-header.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamVisitHeader implements ComponentInterface {

  @Prop() categories: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() intro: CntFlexyViewIslamVisitHeader[] = []

  /**
   * Клик по картинке
   */
  @Event() clickHeaderImage: EventEmitter;

  /**
   * Клик по sign up
   */
  @Event() clickHeaderSignUp: EventEmitter;

  /**
   * Клик по log in
   */
  @Event() clickHeaderLogIn: EventEmitter;

  render() {
    const getHeader = this.categories.map((item) => {
      return (
        <div class="row">
          <div class="col-6">
            <div class="image" style={{ backgroundImage: "url(" + StorageIslamVisit.prefix + item.image + ")" }} onClick={() => this.clickHeaderImage.emit('HeaderImage')}>
            </div>
          </div>
          <div class="col-6 text-right">
            <div class="text">
            <span class="sign" onClick={() => this.clickHeaderSignUp.emit('HeaderSignUp')}>
              Sign Up
            </span>
            <span class="log" onClick={() => this.clickHeaderLogIn.emit('HeaderLogIn')}>
              Log In
            </span>
          </div>
          </div>
        </div>
      )
    });
    return (
      <div class="header">
        <div class="container">
          {getHeader}
        </div>
      </div>
    );
  }
}
