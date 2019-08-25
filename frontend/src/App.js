import React from 'react';
//import logo from './logo.svg';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
// import Todo from './todo/todo'
// import About from './about/about'
import Menu from './template/menu'
import Routes from './routes'

export default props =>
<div className='container'>
  <Menu/>
  <Routes/>
</div>


// function App() {
//   return (
//     <div className="conteiner">
//     </div>
//   );
// }

// export default App;
