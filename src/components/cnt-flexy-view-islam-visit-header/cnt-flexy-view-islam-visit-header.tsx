import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {StorageIslamVisit} from "../../utils/utils";


@Component({
  tag: 'cnt-flexy-view-islam-visit-header-1_01',
  styleUrl: 'cnt-flexy-view-islam-visit-header.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamVisitHeader implements ComponentInterface {

  @Prop() categories: any;

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
        <cnt-flexy-view-islam-visit-header categories={this.categories}
                                           onClickHeaderImage={(item) => clicker(item)}
                                           onClickHeaderSignUp={(item) => clicker(item)}
                                           onClickHeaderLogIn={(item) => clicker(item)}/>
      </div>
    );
  }

}
