"use client"
import { Card } from '@/components/ui/card';
import React, { useEffect, useState } from 'react'
import "../Styles/component/_countdown.module.scss"
function CountDownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    
      useEffect(() => {
        const countdown = setInterval(() => {
          const saleEnd = new Date("February 15, 2025 00:00:00").getTime();
          const now = new Date().getTime();
          const gap = saleEnd - now;
    
          const second = 1000;
          const minute = second * 60;
          const hour = minute * 60;
          const day = hour * 24;
    
          setTimeLeft({
            days: Math.floor(gap / day),
            hours: Math.floor((gap % day) / hour),
            minutes: Math.floor((gap % hour) / minute),
            seconds: Math.floor((gap % minute) / second),
          });
        }, 1000);
    
        return () => clearInterval(countdown);
      }, []);
  return (
    <div className="countdown-container">
    <Card className="countdown-card">
      <h2>Time Left for Sale</h2>
      <div className="time-values">
        <div className="time-box">
          <span>{timeLeft.days}</span>
          <span className="label">Days</span>
        </div>
        <div className="time-box">
          <span>{timeLeft.hours}</span>
          <span className="label">Hours</span>
        </div>
        <div className="time-box">
          <span>{timeLeft.minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="time-box">
          <span>{timeLeft.seconds}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
    </Card>
  </div>
  )
}

export default CountDownTimer