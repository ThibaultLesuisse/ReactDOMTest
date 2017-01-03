/*
 *
 * ListHomePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Lijst from 'components/lijst'

export class ListHomePage extends React.Component {
  static propTypes = {
  loading: PropTypes.bool,
  posts: PropTypes.array,
}; // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.loading) {
     return <span style={{ fontSize: '3rem' }}>Loading...</span>;
   }
    return (
      <div>
        <Helmet
          title="List Test"
          meta={[
            { name: 'description', content: 'Lijst' },
          ]}
        />
      <Lijst />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ListHomePage);
