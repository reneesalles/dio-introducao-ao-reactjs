import React from 'react';

const List = ({ children }) => {
    return <ul style={{ background: "rgba(0, 0, 0, 0.1)" }}>
        {children}
    </ul>;
};

export default List;