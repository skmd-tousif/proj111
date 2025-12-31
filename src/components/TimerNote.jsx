import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import '../App.css';

const TimerNote = () => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const targetTime = new Date('2026-01-01T00:00:00').getTime();
  
  const newYearMessage = `🎉 Happy New Year 2026! ✨

As we step into this new year, I wanted to say: thank you for making 2025 so special.

Those December conversations, your calming presence when I was nervous, the way you remember little things—they meant more than you know.

For 2026, my only hope is:
That we continue being important parts of each other's lives.
That our friendship grows naturally, without rush or pressure.
That we keep sharing laughs, supporting each other's dreams, and being there through busy days and quiet nights.

No grand promises, just simple hopes:
☕ That we'll have more of those conversations that make hours feel like minutes
✨ That we'll create memories worth looking back on
📱 That your "how was your day?" texts remain my favorite notifications
❤️ That whatever this becomes, it becomes something beautiful—in its own time

I'm not asking for the moon. Just hoping we keep what we have and let it grow naturally, like the best things do.

May your 12 grapes bring 12 beautiful months ahead. And if I can be even a small part of making 2026 special for you, that would mean the world.

Here's to taking things slow, enjoying the journey, and seeing where time takes us.

With warmth and hope for our friendship,
Always here 💫`;
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetTime - now;
      if (diff <= 0) {
        setIsUnlocked(true);
        setTimeLeft(0);
        clearInterval(interval);
      } else {
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (isUnlocked) {
    return (
      <>
        <Confetti width={window.innerWidth} height={window.innerHeight} />
        <button className="btn" onClick={() => document.getElementById('ny-modal').showModal()}>
          Unlock New Year Greeting! 🎉
        </button>
        <dialog id="ny-modal" className="modal-content">
          <h2 style={{ color: '#4ecdc4' }}>New Year's Wish</h2>
          <p>{newYearMessage}</p>
          <button className="btn" onClick={() => document.getElementById('ny-modal').close()}>Close</button>
        </dialog>
      </>
    );
  }

  return (
    <div>
      <button className="btn" disabled>Locked Until Midnight...</button>
      {timeLeft && (
        <div className="countdown">
          ⏰ {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </div>
      )}
    </div>
  );
};

export default TimerNote;