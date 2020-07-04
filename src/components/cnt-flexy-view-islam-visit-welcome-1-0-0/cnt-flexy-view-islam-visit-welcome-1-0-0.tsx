import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {StorageIslamVisit} from "../../utils/utils";


@Component({
  tag: 'cnt-flexy-view-islam-visit-welcome-1-0-0',
  styleUrl: 'cnt-flexy-view-islam-visit-welcome-1-0-0.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamVisitWelcome100 implements ComponentInterface {

  @Prop() payload: any;

  @Prop() pathToAssets: string;

  componentWillLoad() {
    StorageIslamVisit.prefix = this.pathToAssets;
  }

  render() {
    /**
     * Клик по элементам компонента
     */
    const clicker = item => {
      console.log(item);
    }
    return (
      <div>
        <cnt-flexy-view-islam-visit-welcome payload={this.payload}
                                            onClickWelcomeImage={(item) => clicker(item)}
                                            onClickWelcomeTitle={(item) => clicker(item)}
                                            onClickWelcomeText={(item) => clicker(item)}/>
      </div>
    );
  }

}
