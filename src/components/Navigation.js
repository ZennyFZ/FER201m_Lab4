import React, { Component } from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Navbar,NavItem, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
export default function Navigation(){
    const { theme, toggle, dark } = useContext(ThemeContext)
        return (
            <Navbar style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
            alignLinks="right"
            brand={<a href="/"><img style={{width: '50px', height: '50px', margin: '6px 25px'}} src='assets\images\icon.png'></img></a>}
            id="mobile-nav"
            menuIcon={<Icon >menu</Icon>}
          >
            <NavItem>
            <Link to="/" className='noTransition' style={{ color: theme.color }}><Icon left>home</Icon>Home</Link>
            </NavItem>
            <NavItem href="/about">
            <Link to="/about" className='noTransition' style={{ color: theme.color }}><Icon left>info</Icon>About</Link>
            </NavItem>
            <NavItem href="/news">
            <Link to="/news" className='noTransition' style={{ color: theme.color }}><Icon left>newspaper</Icon>News</Link>
            </NavItem>
            <NavItem href="/contact">
            <Link to="/contact" className='noTransition' style={{ color: theme.color }}><Icon left>contact_page</Icon>Contact</Link>
            </NavItem>
            <NavItem>
                <Icon style={{ color: theme.color }} onClick={toggle} left>{!dark? <Icon>dark_mode</Icon> : <Icon>light_mode</Icon>}</Icon>
            </NavItem>
          </Navbar>
        )
}