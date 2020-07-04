import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {StorageIslamVisit} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-islam-visit-wrapper-1-0-0',
  styleUrl: 'cnt-flexy-view-islam-visit-wrapper-1-0-0.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamVisitWrapper100 implements ComponentInterface {

  @Prop() payload: any;

  @Prop() forCarousel: any;

  @Prop() pathToAssets: string;

  componentWillLoad() {
    StorageIslamVisit.prefix = this.pathToAssets;
  }

  render() {
    const clicker = item => {
      console.log(item);
    }
    return (
      <div>
        <cnt-flexy-view-islam-visit-wrapper payload={this.payload}
                                            onClickWrapperTitle={(item) => clicker(item)}
                                            onClickWrapperSubTitle={(item) => clicker(item)}
                                            onClickWrapperText={(item) => clicker(item)}
                                            onClickWrapperGoogleImage={(item) => clicker(item)}
                                            onClickWrapperAppImage={(item) => clicker(item)}
                                            onClickWrapperSubText={(item) => clicker(item)}
                                            onClickWrapperProductImage={(item) => clicker(item)}
                                            onClickWrapperPhoneImage={(item) => clicker(item)}
                                            forCarousel={this.forCarousel}/>
      </div>
    );
  }

}
