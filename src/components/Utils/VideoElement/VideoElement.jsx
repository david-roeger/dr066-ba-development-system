
import React, {useState, useRef, useEffect} from 'react';

export function VideoElement({ src, type }) {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const elementRef = useRef(null);
  
    useEffect(() => {
      setWidth(elementRef.current.getBoundingClientRect().width);
      setHeight(elementRef.current.getBoundingClientRect().width / 16 * 9);
    }, []); //empty dependency array so it only runs once at render
    
    return (
        <div className="h-full w-full">
            <video ref={elementRef} width="414" height="232" autoPlay muted controls playsInline loop className="rounded-sm border border-black object-fill w-full h-full max-w-[414px]">
                <source src={src}
                    type={`video/${type}`} />
            </video>
        </div>

        )
}

VideoElement.defaultProps = {
    src: "https://static.videezy.com/system/resources/previews/000/013/582/original/Water_108_-_15s_-_4k_res.mp4",
    type: 'mp4'
};