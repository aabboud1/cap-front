import React, { useState } from 'react';

const MenuCard = (props) => {
  
  const [quantity, setQuantity] = useState('')
// fixing quantity to render in cart
  
    return (
        <div className="ui column">
        <div
          className="ui card"
          key={props.item.id}
        //   onClick={() => {props.handleMyBots(props.bot.id)}}
        >
          <div className="image">
            <img alt="oh no!" src={props.item.image} />
          </div>
          <div className="content">
            <div className="header">
              {props.item.name}
              {/* <i className={botTypeClasses[props.bot.bot_class]} /> */}
            </div>
            <div className="meta text-wrap">
              Price: $<small>{props.item.price}</small>
            </div>
          </div>
          <div className="extra content">
            
  
            <span>
              {/* <i className="icon lightning"  /> */}
              <bold>Type: {props.item.category}</bold>
            </span>
            
            <span>
              <div className="ui center aligned segment basic">
                {props.disableAdd ? null :
                <>
                  <button onClick={() => {props.addMyItem(props.item.id)}}>Add Item</button>
                  <label>
                Quantity
                <input
                      type="number"
                      min="1"
                      onChange={(e) => setQuantity(e.target.value)}
                />
              </label>
              </>
                  
                }
                {props.disableRemove ? null :
                <>
                  <button onClick={() => {props.removeMyItem(props.item.id)}}>Remove Item</button>
                  <p>Quantity: {quantity}</p>
                  {/* <label> */}
                  {/* <input
                        type="number"
                        min="1"
                        placeholder={quantity}
                  />
                </label> */}
                </>
                  
               }
                
              </div>
            </span>
          </div>
        </div>
        <br></br>
      </div>
    );
              }

export default MenuCard;

