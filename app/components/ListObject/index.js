/**
*
* ListObject
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class ListObject extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <tr>
                      <th scope="row">{this.props.data.Name}</th>
                       <td>{this.props.data.Age}</td>
                       <td>{this.props.data.Phone}</td>
                       <td>{this.props.data.Email}</td>
                     </tr>
    );
  }
}

export default ListObject;
