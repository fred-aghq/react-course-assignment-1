import React from 'react';

// const userInput = (props) => {
//     return (
//         <div className="UserInput">
//             <input/>
//         </div>
//     );
// }

const UserInput = (props) => {
    const style = {
        margin: '0 auto',
        border: '2px solid red',
        padding: '20%'
    }
    return (
        <div className="UserInput" style={style}>
            <input onChange={props.changed} value={props.initialValue}/>
        </div>
    );
}

export default UserInput;