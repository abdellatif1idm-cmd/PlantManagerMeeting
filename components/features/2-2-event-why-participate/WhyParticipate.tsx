import React from 'react';
import WhyContent from './elements/WhyContent';

const WhyParticipate: React.FC = () => {
  return (
    // position relative + z-index ici pour être AU-DESSUS des autres sections
    <section
      className="w-full py-16 lg:py-28"
      style={{ position: 'relative', zIndex: 10 }}
    >
      <WhyContent />
    </section>
  );
};

export default WhyParticipate;