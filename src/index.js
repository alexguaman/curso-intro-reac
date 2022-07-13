import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index.js';
//import App from './App/index.js';
import './index.css';

// function App(props) {
//   return (
//     <h1>
//       ¡{props.saludo}, {props.nombre}!
//     </h1>
//   );
// }

// function withSaludo(saludo) {
//   return function WrappedComponentWithSaludo(WrappedComponent) {
//     return function ComponentDeVerdad(props) {
//       return (
//         <React.Fragment>
//           <WrappedComponent {...props} saludo={saludo} />
//           <p>Estamos acompañando al Wrapped Component</p>
//         </React.Fragment>
//       );
//     };
//   };
// }

// const ApiWithSaludo = withSaludo('Buenas')(App);

ReactDOM.render(
  <App />,
  // <ApiWithSaludo nombre="Juanita" />,
  document.getElementById('root')
);
