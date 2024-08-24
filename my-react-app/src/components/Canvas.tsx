import React from 'react';
import { useDelayedValue } from './UseDelayedValue.tsx';
import { usePointerPosition } from './UsePointerPosition.tsx';

export function Canvas() {
    const pos1 = usePointerPosition();
    const pos2 = useDelayedValue(pos1, 100);
    const pos3 = useDelayedValue(pos2, 200);
    const pos4 = useDelayedValue(pos3, 100);
    const pos5 = useDelayedValue(pos4, 50);

    return (
        <>
            <Dot position={pos1} opacity={1}></Dot>
            <Dot position={pos2} opacity={0.8}></Dot>
            <Dot position={pos3} opacity={0.6}></Dot>
            <Dot position={pos4} opacity={0.4}></Dot>
            <Dot position={pos5} opacity={0.2}></Dot>
        </>
    );
}

function Dot({ position, opacity }) {
    return (
        <div
            style={{
                position: 'absolute',
                backgroundColor: 'pink',
                borderRadius: '50%',
                opacity,
                transform: `translate(${position.x}px,${position.y}px)`,
                pointerEvents: 'none',
                left: -20,
                top: -20,
                width: 40,
                height: 40,
            }}
        ></div>
    );
}
