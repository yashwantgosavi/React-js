import React from 'react';
import Students from './Students';

class App extends React.Component {

  render() {
    return (
      <>
        <Students />
        <Students stdName="moyin" />
      </>
    )
  }
}

Students.defaultProps = {
  stdName: "User"
}

export default App;