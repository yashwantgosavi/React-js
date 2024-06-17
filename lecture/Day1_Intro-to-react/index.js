/*
- React was originally created by Jordan Walke
- initial version was launched in 2013
- maintained by META and a community of developers
- current version of react is v18

- React is Composable!  + code reusability
- React helps creating Single page Applications efficiently!!
- SPA. vs MPA.
- React is a declarative!! 

*/

// const reactHeading = React.createElement('h1',{className:'hello', children:'heelo'});

// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);


// const reactHeading = React.createElement('h1', { id: "h1", class: "red", children: 'Hello World' });

function App() {
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    return (
        <React.Fragment>
            <ul>
                {num.filter((even,a) => even % 2 === 0).map((even)=> <li>{even}</li>) }
            </ul>
        </React.Fragment>
    )
}

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);