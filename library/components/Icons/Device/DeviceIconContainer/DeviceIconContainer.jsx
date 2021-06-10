import React from 'react';

export function DeviceIconContainer({children}) {
    return <div style={{ width : 'fit-content'}} className="p-xs">
        <div style={{ width : 'fit-content', margin: '3px' }}>
            {children}
        </div>
    </div>

};

DeviceIconContainer.defaultProps = {};  