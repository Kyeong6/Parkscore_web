import { CityDescription } from "./CityDescription";
import { DetailScores } from "./DetailScores";

export const CityStatus = () => {
  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <CityDescription />
      <DetailScores />
      <div
        style={{
          position: 'absolute',
          right: '2rem',
          bottom: '0.5rem',
          color: '#444',
          fontSize: '0.9rem',
          textAlign: 'right',
          zIndex: 10,
          background: '#f7f7fa',
          borderRadius: '8px',
          padding: '1rem 1.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          fontWeight: 400,
          display: 'flex',
          alignItems: 'center',
          gap: '0.7rem',
          flexWrap: 'wrap',
          maxWidth: '100%',
          minWidth: 0
        }}
      >
        <span>
          <span style={{ fontWeight: 600 }}>Organization:</span> Chonnam National University
        </span>
        <span>|</span>
        <span>
          <span style={{ fontWeight: 600 }}>Address:</span> 77, Yongbong-ro, Buk-gu, Gwangju, Republic of Korea
        </span>
        <span>|</span>
        <span>
          <span style={{ fontWeight: 600 }}>Director:</span> KWON YOONKU
        </span>
        <span>|</span>
        <span>
          <span style={{ fontWeight: 600 }}>Email:</span> <a href="mailto:ykkwon@jnu.ac.kr" style={{ color: '#444' }}>ykkwon@jnu.ac.kr</a>
        </span>
        <span>|</span>
        <span>
          <span style={{ fontWeight: 600 }}>Contact:</span> <a href="tel:01085930814" style={{ color: '#444' }}>010-8593-0814</a>
        </span>
      </div>
    </div>
  );
};
