import React, { useEffect, useState } from 'react';
import './Tooltip.css'; // Import the CSS for styling

interface TooltipProps {
    message: string;
    duration?: number; // Duration in milliseconds
}

const Tooltip: React.FC<TooltipProps> = ({ message, duration = 5000 }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    if (!visible) return null;

    return (
        <div className="tooltip-container">
            <span>{message}</span>
            <button onClick={() => setVisible(false)} className="close-button">x</button>
        </div>
    );
};

export default Tooltip;
