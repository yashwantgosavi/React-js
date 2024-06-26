# Component Life Cycle
Different phases in component lifecycle
  - mounting : instance created and inserted into the DOM
  - Updating : when a Component is being re-rendered as a result of changes done to its props or state
  - un-Mounting : When a Component is being removed from the DOM
  - Error Handling: when there is an error during rendering

# what are Side-effects?
 side-effects are actions which are not predicatable beacause they are actions which are performed with the "Outside World"


## Mounting
  - Constructor()  // state, bind, state can modified direactly
  - Static getDerivedStateFromProps()
  - render()
  - componentDidMount()