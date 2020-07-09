import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {StorageIslamVisit} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-islam-visit-wrapper-1_01',
  styleUrl: 'cnt-flexy-view-islam-visit-wrapper.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamVisitWrapper implements ComponentInterface {

  @Prop() payload: any;


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
                                            />
      </div>
    );
  }

}
