import React from 'react';
//import logo from './logo.svg';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Todo from './todo/todo'
import About from './about/about'

export default props =>
<div className='container'>
  <Todo/>
  <About/> 
</div>


// function App() {
//   return (
//     <div className="conteiner">
//     </div>
//   );
// }

// export default App;
