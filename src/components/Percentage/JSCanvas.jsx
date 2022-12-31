import React, { useEffect, useRef, useState} from 'react';

const PureCanvas = React.forwardRef((props, ref) => <canvas {...props} ref={ref} />);

export const JSCanvas = (props) => {
    const canvasEl = useRef(null);
    const [compatibility,setCompatibility]= useState(true);

    const Draw = (ctx)=>{
        if(props.draw)
            props.draw(ctx);
        requestAnimationFrame(() => Draw(ctx));
    }

    useEffect(() => {
        if(canvasEl.current.getContext){
            const ctx = canvasEl.current.getContext('2d');
            requestAnimationFrame(()=>Draw(ctx))
        }
        else{
            setCompatibility(false);
        }
        return () => {
        }
    }, []);

    return (compatibility?
    <PureCanvas width={props.width} height={props.height}  ref={canvasEl}></PureCanvas>:
    <p>Canvas is not compatible with current browser</p>)
};