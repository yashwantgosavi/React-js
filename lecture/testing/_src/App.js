import React from 'react';
import Students from './Students';

class App extends React.Component {

  render() {
    return (
      <>
        <Students studentname={"yash"} marks={30} age={32}/>
        <Students studentname={"hummair"}/>
        <Students/>
      </>
    )
  }
}

Students.defaultProps = {
  studentname: "User",
  marks:"NaN",
  age:'yes'
}


export default App;