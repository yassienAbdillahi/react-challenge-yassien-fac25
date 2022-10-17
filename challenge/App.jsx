import Greeting from "./Greeting.jsx";
import Shouter from "./Shouter.jsx";
import MouseTracker from "./MouseTracker.jsx";

function App() {
  return <main>
    <Greeting name="yassien"/> {/*just importing greeting here to check my answer for challenge 1 since I can't get the test command (./test/run 1) to work for me for some reason. edit: it suddenly started working?*/}
    <Shouter />
    <MouseTracker />
  </main>; 
}

export default App;
