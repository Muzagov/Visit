import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {StorageIslamVisit} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-islam-visit-create-1-0-0',
  styleUrl: 'cnt-flexy-view-islam-visit-create-1-0-0.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamVisitCreate100 implements ComponentInterface {

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
       <cnt-flexy-view-islam-visit-create payload={this.payload}
                                          onClickCreateImage={(item) => clicker(item)}
                                          onClickCreatePositionImage={(item) => clicker(item)}
                                          onClickCreateTitle={(item) => clicker(item)}
                                          onClickCreateText={(item) => clicker(item)}
                                          onClickCreateSubText={(item) => clicker(item)}
                                          onClickCreateSecondText={(item) => clicker(item)}
                                          onClickCreateSecondSubText={(item) => clicker(item)}
                                          onClickCreateThirdText={(item) => clicker(item)}
                                          onClickCreateThirdSubText={(item) => clicker(item)}/>
     </div>
    );
  }

}
