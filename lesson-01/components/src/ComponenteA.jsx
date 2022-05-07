import React from 'react';

const ComponenteA = (props) => {
    const { children, title } = props;

    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    );
}
export default ComponenteA;