import React from "react";

class Students extends React.Component {
    render() {
        const {stdName, marks} = this.props
        return (
            <>
                <h1>Hello, {stdName}</h1>
            </>
        )
    }
}

export default Students;