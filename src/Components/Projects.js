import React, { useEffect, useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Project Title 1",
    content: "Description of the first project that showcases the main features and highlights of this amazing work. Click to learn more about this innovative solution.",
    bgImage: "/api/placeholder/1200/800"
  },
  {
    title: "Project Title 2",
    content: "Description of the second project that demonstrates the technical excellence and creative problem-solving involved in this undertaking.",
    bgImage: "/api/placeholder/1200/800"
  },
  {
    title: "Project Title 3",
    content: "Description of the third project highlighting the unique challenges overcome and the impactful results achieved through this implementation.",
    bgImage: "/api/placeholder/1200/800"
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  // Touch handlers for swipe functionality
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextProject();
    }
    if (isRightSwipe) {
      prevProject();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div 
      className="projects-wrapper" 
      id="projects"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Background */}
      <div 
        className="project-background"
        style={{
          backgroundImage: `url(${projects[currentIndex].bgImage})`
        }}
      >
        <div className="background-overlay" />
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-controls">
        <button 
          onClick={prevProject}
          className="nav-button prev"
          aria-label="Previous project"
        >
          ←
        </button>

        <button 
          onClick={nextProject}
          className="nav-button next"
          aria-label="Next project"
        >
          →
        </button>
      </div>

      {/* Mobile Swipe Indicator */}
      <div className="swipe-indicator">
        Swipe to navigate
      </div>

      {/* Content */}
      <div className="content-container">
        <div className="content-box">
          <div className="project-counter">
            {currentIndex + 1} / {projects.length}
          </div>
          
          <h2 className="project-title">
            {projects[currentIndex].title}
          </h2>
          
          <p className="project-description">
            {projects[currentIndex].content}
          </p>
          
          <div className="project-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;