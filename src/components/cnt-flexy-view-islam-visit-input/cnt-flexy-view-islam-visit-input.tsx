import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-islam-visit-input-1_01',
  styleUrl: 'cnt-flexy-view-islam-visit-input.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamVisitInput implements ComponentInterface {

  @Prop() payload: any;

  render() {
    const clicker = item => {
      console.log(item);
    }
    return (
      <div>
        <cnt-flexy-view-islam-visit-input payload={this.payload}
                                         onClickInputButton={(item) => clicker(item)}
                                         onClickInput={(item) => clicker(item)}
                                         onClickInputText={(item) => clicker(item)}/>
      </div>
    );
  }

}
