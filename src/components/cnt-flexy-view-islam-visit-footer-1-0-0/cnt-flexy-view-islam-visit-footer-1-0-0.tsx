import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-islam-visit-footer-1-0-0',
  styleUrl: 'cnt-flexy-view-islam-visit-footer-1-0-0.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamVisitFooter100 implements ComponentInterface {

  @Prop() categories: any;


  render() {
    const clicker = item => {
      console.log(item);
    }
    return (
     <div>
       <cnt-flexy-view-islam-visit-footer categories={this.categories}
                                          onClickFooterText={(item) => clicker(item)}
                                          onClickFooterSupport={(item) => clicker(item)}
                                          onClickFooterPrivacy={(item) => clicker(item)}
                                          onClickFooterSubText={(item) => clicker(item)}/>
     </div>
    );
  }

}
