import React, {useState} from 'react';

const MenuCard = (props) => {
    const [quantity, setQuantity] = useState(props.item.quantity)

    function updateQuantity(value) {
      setQuantity(value)
      props.item.quantity = value;
    }
    return (
        <div className="ui column">
          <div
            className="ui card"
            key={props.item.id}
          >
          <div className="image">
            <img alt="oh no!" src={props.item.image} />
          </div>
          <div className="content">
            <div className="header">
              {props.item.name}
            </div>
            <div className="meta text-wrap">
              Price: $<small>{props.item.price}</small>
            </div>
          </div>
          <div className="extra content">
            <span>
              <bold>Type: {props.item.category}</bold>
            </span>
            <span>
              <div className="ui center aligned segment basic">
                {props.disableAdd ? null :
                  <button onClick={() => {props.addMyItem(props.item.id)}}>Add Item</button>
                }
                {props.disableQuantity ? null : 
                    <div>
                      <label>
                        Quantity
                      </label>
                      <input
                          type="number"
                          min="1"
                          value={quantity}
                          onChange={(e) => updateQuantity(e.target.value)}
                      />
                    </div>
                }
                {props.disableRemove ? null :
                <>
                  <br></br>
                  <button onClick={() => {props.removeMyItem(props.item.id)}}>Remove Item</button>
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

