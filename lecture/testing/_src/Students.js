import React from "react";

class Students extends React.Component {
    render() {
        const { studentname, marks, age } = this.props
        return (
            <>
                <h1>Hello {studentname}</h1>
                <div>you got a {marks}</div>
                <h6>Age {age}</h6>
                <hr/>
            </>
        )
    }
}

// function Students(props){
//     const {stdname, marks} = props;
//     return(
//         <></>
//     )
// }


export default Students;