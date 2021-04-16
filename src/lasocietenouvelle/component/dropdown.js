import React, { Component } from 'react';

class DropDown extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };
  }

  toggleMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    const {title, href, children} = this.props;
    const {showMenu} = this.state;
    return (
      <div className="dropdown">
        <div
          onClick={e => this.toggleMenu(e)}
          className={"dropdown-title "
                     + (showMenu ? "active" : "")}>
          {title}
        </div>
        {showMenu
         ? (<div className="dropdown-items">
             {children}
            </div>)
         : null
        }
      </div>
    );
  }
}

export {DropDown};
