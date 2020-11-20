import React, { Component } from 'react';
import MenuContainer from './MenuContainer';

class Order extends Component {
    render() {
        return (
            <div>
                
                <MenuContainer items={this.props.items}
                              removeMyItem={this.props.removeMyItem}
                              addMyItem={this.props.addMyItem}
                              disableAdd={this.props.disableAdd}
                              disableRemove={this.props.disableRemove}/>
            </div>
        );
    }
}

export default Order;
