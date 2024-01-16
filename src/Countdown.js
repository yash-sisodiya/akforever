import React, { useState, useEffect } from 'react';

export const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className=''>
            <div className='text-[#b7636f] text-xl text-center py-2 font-bold tracking-wider'>Countdown
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <div>{timeLeft.days} </div>
                    <div>Days</div>
                </div>
                <div>
                    <div>{timeLeft.hours} </div>
                    <div>Hours</div>
                </div>
                <div>
                    <div>{timeLeft.minutes} </div>
                    <div>Minutes</div>
                </div>
                <div>
                    <div>{timeLeft.seconds} </div>
                    <div>Seconds</div>
                </div>
            </div>
        </div>
    );
};