import React from 'react';

const ComponenteA = (props) => {
    const { children } = props;

    return (
        <div>
            <h2>Componente A :)</h2>
            {children}
        </div>
    );
}
export default ComponenteA;