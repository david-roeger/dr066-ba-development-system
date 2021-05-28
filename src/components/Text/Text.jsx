import React from 'react';

export function Text({size, children}) {
    let textStyle ='';
    if(size === "sm") { 
        textStyle = "text-sm leading-sm"
    } else if(size === "xl") {
        textStyle = "text-xl leading-xl"
    } else if(size === "base") {
        textStyle = "text-base leading-base"
    }
    return <span className={textStyle}>{children}</span>
};


Text.defaultProps = {
    size: "base",
    children: "Text"
  };

