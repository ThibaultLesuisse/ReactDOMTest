/**
*
* Lijst
*
*/

import React from 'react';
import data from 'data/data';
import ListObject from 'components/ListObject';

class Lijst extends React.Component {


  // eslint-disable-line react/prefer-stateless-function
  render() {
    for(var i = 0; i < data.length;i++){
      data.number = i;
    };
    return (

        <table class="table">
   <thead class="thead-inverse">
     <tr>
       <th>First Name</th>
       <th>Age</th>
       <th>Email</th>
       <th>Phone</th>
     </tr>
   </thead>
                <tbody>
                  {data.map(function(data) {
                    return (<ListObject data={data} key={data.number}/>
                    );
                  }, this)}
                </tbody>

              </table>

    );
  }
}

export default Lijst;
