const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;

// This is a work around to adding a wrapping <div>
// element in the return of functions.
// Can also use <React.Fragment> </React.Fragment>
// if you import from React as a named component just use <Fragment>
// see AddUser.js for this example - Best option (Fragment)
