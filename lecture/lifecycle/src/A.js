import React from "react";
class A extends React.Component {
    constructor() {
        super();

        this.state = {
            name: 'a reander',
            data: []
        }
        console.log(this.state.name);
    }

    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps is render');
        return null;
    }
    componentDidMount() {
        console.log('componentDidMount is render');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({ data }))
    }
    render() {
        return (
            <>
                <ul>{this.state.data.map((d) => {
                    return(<li>{d.username}</li>)
                })}</ul>
            </>
        )
    }
}
export default A;


// https://jsonplaceholder.typicode.com/