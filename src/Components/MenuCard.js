import React from 'react';

const MenuCard = (props) => {
    return (
        <div className="ui column">
        <div
          className="ui card"
          key={props.item.id}
        //   onClick={() => {props.handleMyBots(props.bot.id)}}
        >
          <div className="image">
            <img alt="oh no!" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf--VsVjUM5_fCeMAbKlMWuicLoOOJldHK7A&usqp=CAU' />
          </div>
          <div className="content">
            <div className="header">
              {props.item.itemName}
              {/* <i className={botTypeClasses[props.bot.bot_class]} /> */}
            </div>
            <div className="meta text-wrap">
              Price: $<small>{props.item.price}</small>
            </div>
          </div>
          <div className="extra content">
            <span>
              {/* <i className="icon heartbeat" /> */}
              Quantity: {props.item.qunanty}
            </span>
  
            <span>
              {/* <i className="icon lightning"  /> */}
              <bold>Type: {props.item.foodType}</bold>
            </span>
            {/* <span>
              <i className="icon shield" />
              {props.bot.armor}
            </span>*/}
            <span>
              <div className="ui center aligned segment basic">
            
                  <button onClick={() => {props.addMyItem(props.item.id)}}>
                  Add Item
                  </button>
                  <button onClick={() => {props.removeMyItem(props.item.id)}}>
                  Remove Item
                  </button>
                
              </div>
            </span>
          </div>
        </div>
        <br></br>
      </div>
    );
}

export default MenuCard;
