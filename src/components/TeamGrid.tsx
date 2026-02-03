'use client';

import { useState } from 'react';
import './TeamGrid.css';
import { team as teamMembers } from '@/config/content';

export default function TeamGrid() {
  const [selectedMember, setSelectedMember] = useState<(typeof teamMembers)[number] | null>(null);

  const handleMemberClick = (member: (typeof teamMembers)[number]) => {
    // Only open modal on mobile (below 768px matches CSS)
    if (window.innerWidth <= 768) {
      setSelectedMember(member);
    }
  };

  return (
    <>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member" onClick={() => handleMemberClick(member)}>
            <div className="team-image-wrap">
              <img src={member.imageUrl} alt={member.name} className="team-image" />
            </div>
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              {/* Desktop hover bio (Popout via CSS) */}
              <div className="team-bio">{member.description}</div>
            </div>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div
          className={`bio-modal ${selectedMember ? 'active' : ''}`}
          onClick={() => setSelectedMember(null)}
        >
          <div className="bio-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="bio-modal-close" onClick={() => setSelectedMember(null)}>
              &times;
            </span>
            <h2 className="bio-modal-name">{selectedMember.name}</h2>
            <p className="bio-modal-role">{selectedMember.role}</p>
            <p className="bio-modal-bio">{selectedMember.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
