import { useRef } from "react";

const Alert = () => {
  let ref = useRef(0);
  console.log("Useref is rendered"); //this will be printed only once.  i.e. component is not re-rendered
  function handleClick() {
    // console.log("clicked");  //this will be printed for every click.
    ref.current = ref.current + 1; //updating ref will also not trigger render
    alert("You clicked " + ref.current + " times!");
  }
  return <button onClick={handleClick}>Click me!</button>;
};

export default Alert;
