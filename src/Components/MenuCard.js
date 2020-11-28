import React, {useState} from 'react';
import { Card, Icon, Image} from 'semantic-ui-react'

const MenuCard = (props) => {
    const [quantity, setQuantity] = useState(props.item.quantity)

    function updateQuantity(value) {
      setQuantity(value)
      props.item.quantity = value;
    }
    return (
      <Card centered={true}>
        <img  src={props.item.image} height={250} />
        <Card.Content>
          <Card.Header textAlign={"center"}>{props.item.name}</Card.Header>
            <Card.Meta textAlign={"center"}>
              <span className='date'>{props.item.category}</span>
            </Card.Meta>
            <Card.Description textAlign={"center"}>
              ${props.item.price}
            </Card.Description>
          </Card.Content>
        <Card.Content extra textAlign={"center"}> 
          <a>
            <Icon name='cart arrow down' />
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
          </a>
        </Card.Content> 
      </Card>

    );
}

export default MenuCard;
      