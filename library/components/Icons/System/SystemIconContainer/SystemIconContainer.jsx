import React from 'react';

export function SystemIconContainer({children}) {
    return <div style={{ width : 'fit-content'}} className="m-xs">
        {children}
    </div>

};

SystemIconContainer.defaultProps = {};  