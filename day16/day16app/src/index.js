import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Table from './components/table';
import Goal from './components/goal';
import Runs from './components/run';
import Clock from './components/clock';
import Football from './components/football';
import Samp from './components/mytable';
import StateData from './components/apptablestate';

ReactDOM.render(
    <React.StrictMode>
          <StateData/>
        </React.StrictMode>,
        document.getElementById('root')
   );

// ReactDOM.render(
//   <React.StrictMode>
//        <Samp/>
//      </React.StrictMode>,
//      document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//        <Football/>
//      </React.StrictMode>,
//      document.getElementById('root')
// )

// ReactDOM.render(
//   <React.StrictMode>
//        <Runs i={5}/>
//      </React.StrictMode>,
//      document.getElementById('root')
// )

// ReactDOM.render(
//   <React.StrictMode>
//        <Clock />
//      </React.StrictMode>,
//      document.getElementById('root')
// )


// ReactDOM.render(
//   <React.StrictMode>
//     <Table />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// ReactDOM.render(
//   <React.StrictMode>
//     <Goal isGoal={true} />
//   </React.StrictMode>,
//   document.getElementById('root1')
// );




reportWebVitals();
