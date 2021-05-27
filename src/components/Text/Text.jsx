import React from 'react';

export function Text({size, children}) {
    let textStyle ='';
    if(size === "sm") { 
        textStyle = "text-sm leading-sm"
    } else if(size === "xl") {
        textStyle = "text-base leading-base"
    } else if(size === "base") {
        textStyle = "text-xl leading-xl"
    }
    return <div><p className={textStyle}>{children}</p>
    <p className={textStyle}>{children}</p>
    <p className={textStyle}>{children}</p>
    <p className={textStyle}>{children}</p>
    </div>
};


Text.defaultProps = {
    size: "base",
    children: 'Beispiel Text'
  };

