import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import SetData from './component/setdata';
import Game from './component/game';
import Clockapp from './component/lifecyclemethod/lifecycle';
import Calculator from './component/temperatureconvertor/tempcalculator';
import Car from './component/hooks/usestate';
import Counter from './component/hooks/useeffect';
import Component1 from './component/context/contextdemo';
import Appuseref from './component/hooks/useref';
import Todos from './component/hooks/usereducer';

ReactDOM.render(
    <React.StrictMode>
      <Todos />
    </React.StrictMode>,
    document.getElementById('root')
  );


// ReactDOM.render(
//     <React.StrictMode>
//       <Appuseref />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );


// ReactDOM.render(
//   <React.StrictMode>
//     <Component1 />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Car />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// ReactDOM.render(
//   <React.StrictMode>
//     <Counter />
//   </React.StrictMode>,
//   document.getElementById('root1')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Calculator />
//   </React.StrictMode>,
//   document.getElementById('root1')
// );


// ReactDOM.render(
//   <React.StrictMode>
//     <Clockapp />
//   </React.StrictMode>,
//   document.getElementById('root1')
// );



// ReactDOM.render(
//   <React.StrictMode>
//     <Game />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// ReactDOM.render(
//   <React.StrictMode>
//     <SetData />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
