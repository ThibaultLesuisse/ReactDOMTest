/**
*
* NavBar
*
*/

import React from 'react';

import {FormattedMessage} from 'react-intl';
import messages from './messages';

class NavBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-faded">
          <div className="nav navbar-nav">
            <a className="nav-item nav-link active" href="/"><FormattedMessage {...messages.home}/>
              <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="/lijst">Lijst</a>
            <a className="nav-item nav-link" href="#">Pricing</a>
            <a className="nav-item nav-link" href="#">About</a>
          </div>
        </nav>
      </div>
    );
  }
}
export default NavBar;
