import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

class Menu extends React.Component {
  render() {
    const menu = this.props.data

    const menuBlock = (
      <ul className="menu__list">
        {menu.map(item => {
          let LinkComponent
          if (
            item.path.startsWith('http://') ||
            item.path.startsWith('https://')
          ) {
            LinkComponent = () => (
              <a
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="menu__list-item-link"
                activeClassName="menu__list-item-link menu__list-item-link--active"
              >
                {item.label}
              </a>
            )
          } else {
            LinkComponent = () => (
              <Link
                to={item.path}
                className="menu__list-item-link"
                activeClassName="menu__list-item-link menu__list-item-link--active"
              >
                {item.label}
              </Link>
            )
          }
          return (
            <li className="menu__list-item" key={item.path}>
              <LinkComponent />
            </li>
          )
        })}
      </ul>
    )

    return <nav className="menu">{menuBlock}</nav>
  }
}

export default Menu
