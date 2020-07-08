import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-islam-visit-window-1-0-0',
  styleUrl: 'cnt-flexy-view-islam-visit-window-1-0-0.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamVisitWindow100 implements ComponentInterface {

  @Prop() payload: any;

  render() {
    return (
      <div>
        <cnt-flexy-view-islam-visit-window payload={this.payload}/>
      </div>
    );
  }

}
