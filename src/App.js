// import Get from "./Axiosconcept/Get";
// import Covidapp from "./covidTracker/Covidapp";

// import GalleryReact from "./restaurantComponent/GalleryReact";

// function App() {
//   return (
//     <>
//       <div>
//         {/* <GalleryReact /> */}
//         {/* <Covidapp /> */}
//         {/* <Get /> */}

//       </div>
//     </>
//   );
// }

// export default App;
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./website/About";
import Contact from "./website/Contact";
import Home from "./website/Home";
import Service from "./website/Service";
import Navbar from "./website/Navbar";
import "./website.css";
import Footer from "./website/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/service" component={Service} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </>
  );
};

export default App;
