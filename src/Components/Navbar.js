import React, { Fragment, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";
import MenuCard from "./MenuCard";

const Nav = ({logged_in, getCurrentUser, location: { pathname } }) => {
    const [activeItem, setActiveItem] = useState('home')
    let handleItemClick = (e, { name }) => setActiveItem(name)

    let logout = () => {
        localStorage.clear()
        getCurrentUser(null)
    };

  return (
      <div>
        {logged_in ? (
            <Segment>
                <Menu>
                   <Menu.Item
                        as={NavLink}
                        to="/owner/orders"
                        name="orders"
                        active={pathname === "/owner/orders"}
                    /> 
                    <Menu.Menu position="right">
                        <Menu.Item  as={NavLink}
                                    to="/home" 
                                    name="Logout" 
                                    onClick={logout} />
                    </Menu.Menu>
                </Menu>
            </Segment>
        ) : (
            <Segment>
                <Menu secondary>
                    <Menu.Item
                        as={NavLink}
                        name='home'
                        active={activeItem === 'home'}
                        to="/home"
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        as={NavLink}
                        name='about'
                        to="/about"
                        active={activeItem === 'about'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        as={NavLink}
                        name='menu'
                        to="/menu"
                        active={activeItem === 'menu'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        as={NavLink}
                        name="contact us"
                        to="/contact"
                        active={activeItem === 'contact us'}
                        onClick={handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item
                            as={NavLink}
                            name="login"
                            to="/login"
                            active={activeItem === 'login'}
                            onClick={handleItemClick}
                        />
                    </Menu.Menu>
                </Menu>
            </Segment>
        )}
      </div>
  );
};

export default withRouter(Nav);