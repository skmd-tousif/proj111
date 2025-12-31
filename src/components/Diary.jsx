import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group'; // npm install react-transition-group
import '../App.css';

const Diary = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 13; // Dec 2025 + Jan-Dec 2026

  const pages = [
    // Page 0: Dec 2025
    {
      title: "December 2025",
      content: `December 2025
Day 1: Our first conversation. I remember being nervous, and you made me feel calm. Those "best of luck" wishes before interviews, the "tum lunch kar lena" reminders—small gestures that showed you care. Thank you for being you. 💝

Mid-December: Our late-night talks became my favorite part of the day. Sharing stories, laughing about silly things, feeling comfortable just being ourselves. These conversations have been truly special. ✨`,
    },
    // Pages 1-12: 2026 months (empty with message)
    ...Array.from({ length: 12 }, (_, i) => ({
      title: `January 2026`, // Change to Feb, etc., but we'll dynamic
      content: "A blank page waiting for us... Let's fill it with beautiful memories—trips, laughs, and quiet moments together. Your turn to write! 📖✨"
    }))
  ];

  // Dynamic titles for 2026
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  pages.slice(1).forEach((page, i) => { page.title = `${monthNames[i]} 2026`; });

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

  return (
    <div style={{ margin: '20px 0' }}>
      <h2 className="title">Our Diary Adventure</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        <button className="btn" onClick={prevPage} disabled={currentPage === 0}>← Prev</button>
        <span style={{ margin: '0 20px', fontSize: '1.5rem' }}>Page {currentPage + 1} / {totalPages}</span>
        <button className="btn" onClick={nextPage} disabled={currentPage === totalPages - 1}>Next →</button>
      </div>
      <CSSTransition
        in={true}
        timeout={500}
        classNames="flip"
        key={currentPage} // Forces re-render on page change
      >
        <div className="page">
          <h3 style={{ color: '#667eea', marginBottom: '10px' }}>{pages[currentPage].title}</h3>
          <p>{pages[currentPage].content}</p>
          {/* Playable: Simple input for "writing" on non-Dec page */}
          {currentPage > 0 && (
            <div style={{ marginTop: '20px' }}>
              <textarea placeholder="Add a memory here..." rows={3} style={{ width: '100%', padding: '10px' }} />
              <button className="btn" style={{ marginTop: '5px', fontSize: '0.9rem' }}>Save Memory</button>
            </div>
          )}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Diary;