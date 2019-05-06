import React from 'react';

// const userInput = (props) => {
//     return (
//         <div className="UserInput">
//             <input/>
//         </div>
//     );
// }

const UserInput = (props) => {
    return (
        <div className="UserInput">
            <input onChange={props.changed}/>
        </div>
    );
}

export default UserInput;