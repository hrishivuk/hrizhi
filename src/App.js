import AnimatedCursor from "react-animated-cursor";
import "./App.css";
import Body from "./components/body";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='29,185,85'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
      <Navbar />
      <Body/>
    </div>
  );
}

export default App;
