import React from 'react';


class App extends React.Component {
    render() {
      return (
      <div>
        <form action="" method="post">
          <label>NAME: </label>
          <input type="text" name="name" id="" required/>
          <br/>
          <label>PARK: </label>
          <input type="text" name="name" id="" required/>
          <br/>
          <label>CAMPSITE: </label>
          <input type="text" name="name" id="" required/>
          <br/>
          <input type="submit" value="SUBMIT"/>
        </form>
      </div>
      )
    }
}

export default App