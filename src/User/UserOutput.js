import React from 'react';

// const userInput = (props) => {
//     return (
//         <div className="UserInput">
//             <input/>
//         </div>
//     );
// }

const UserOutput = (props) => {
    const username = (props.username) ? props.username : "";
    return (
        <div className="UserOutput">
            <p>
                Lorem ipsum dolor sit amet. <strong>{username}</strong>
            </p>
            <p>
                Sed vestibulum sed lorem quis placerat.
            </p>
        </div>
    );
};

export default UserOutput;