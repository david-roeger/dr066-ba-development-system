import React from 'react';

export function SystemIconContainer({children}) {
    return <div style={{ width : 'fit-content'}} className="m-sm">
        {children}
    </div>

};

SystemIconContainer.defaultProps = {};  