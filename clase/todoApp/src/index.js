import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Clock from './Clock';
import Todo from './Todo';

ReactDOM.render(<Todo />,
    document.getElementById('root')
);
// function Clock(props) {
//     return (
//         <div>
//             La hora es: { props.hora }
//         </div>
//     );
// }

// setInterval(() => {
//     const date = new Date();
//     ReactDOM.render(
//         <Clock hora={date.toLocaleTimeString()} />,
//         document.getElementById('root')
//     );
// }, 1000);

