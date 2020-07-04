import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {StorageIslamVisit} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-islam-visit-tell-1-0-0',
  styleUrl: 'cnt-flexy-view-islam-visit-tell-1-0-0.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamVisitTell100 implements ComponentInterface {

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
        <cnt-flexy-view-islam-visit-tell payload={this.payload}
                                         onClickTellTitle={(item) => clicker(item)}
                                         onClickTellText={(item) => clicker(item)}
                                         onClickTellSubText={(item) => clicker(item)}
                                         onClickTellAppImage={(item) => clicker(item)}
                                         onClickTellGoogleImage={(item) => clicker(item)}/>
      </div>
    );
  }

}
