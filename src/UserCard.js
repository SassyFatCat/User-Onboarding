import React from 'react';

export default function UserCard(props) {

return (
    <div className="UserCard">
        <p>{props.info.first_name}</p>
</div>
)
}