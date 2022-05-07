import React from 'react';

const ComponenteB = (props) => {
    const { children } = props;
    
    return (
        <div>
            <h3>Componente B (:</h3>
            {children}
        </div>
    );
};

export default ComponenteB;