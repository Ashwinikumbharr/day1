import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Home from './Home';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

// const name="ashwini";
// const date  = new Date().toLocaleDateString();
//  const img1='https://picsum.photos/200/300';
//  const obj= {
//     backgroundColor : 'blue',
//     textShadow :'2px 2px red',
//     margin:'40px'
//  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
 {/* <Home /> */}
 {/* <h1 id='name'>   hii</h1>
 <p className='p1'> hello {name} date {date}</p>
 <img src= {img1} className='img1'/>
 <h2 style={{color:'pink',textAlign:'center'}}>WELCOME</h2>
 <div id='div1'>this is div</div>

 <p style={obj}>this is internal css</p> */}
 <App />
 </>
);


