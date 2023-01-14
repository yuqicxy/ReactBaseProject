// import React from "react";
// import Test from './components/TestComponent';

// export default function App(){
//     return <Test>
        
//     </Test>
// }

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

const Home = () => <div>Home</div>;

const About = () => <div>About</div>;

const App = () => (
  <Router>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>

    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </Router>
);

export default App;