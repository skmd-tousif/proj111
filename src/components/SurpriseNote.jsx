import React, { useState } from 'react';
import '../App.css'; // For styles

const SurpriseNote = () => {
  const [isOpen, setIsOpen] = useState(false);
  const summary2025 = "2025 was magical because of you. From our first chat on Dec 1, every moment sparkled. Remember our late-night talks, shared laughs, and the way you said - Awww? The first Night? I was really trembling while speaking, aur tumne mujhe shant kiya you made me calm and comfortable. Har ek interviews mein -Best of luck aur busy days me -Tum lunch kar lena. This one month is not a huge time ofcourse, But i lived my life knowing someone values me except my mother and im thankful to you. At the same time if i end this note without saying sorry, it'll be wrong, Sorry! for bringing you the slightest uncomfort, Sorry! for anything which i could have done but i did not, Sorry! for everything wrong. And let's enter 2026 together with a lots of love. Hope each of those 12 Grapes you'll have, fulfils one of your dream and hope we stay and never part away. Just hope is something i have, and efforts are the only things i make, Rest as you say let time speak. Let's wait till 12 tonight for the new year note. ❤️";

  return (
    <>
      <button className="btn" onClick={() => setIsOpen(true)}>
        Open 2025 Surprise Note
      </button>
      {isOpen && (
        <div className="modal" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="title" style={{ color: '#ff6b6b', marginBottom: '1rem' }}>2025 Highlights</h2>
            <p>{summary2025}</p>
            <button className="btn" onClick={() => setIsOpen(false)} style={{ marginTop: '1rem' }}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SurpriseNote;