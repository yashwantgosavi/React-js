import React from "react";

class C extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'yash',
            data: []
        }
    }

    static getDerivedStateFromProps() {
        console.log('static getDerivedStateFromProps is printed');
        return null;
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({ data }))
    }



    render() {

        return (
            <>

                <ul>
                    {this.state.data.map((userdatas, index) => {
                       return (
                        <li key={index}>{userdatas.username}</li>
                        )
                    })}
                </ul>
            </>
        )
    }
}
export default C;