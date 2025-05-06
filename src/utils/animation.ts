
export const setupRevealAnimations = (): (() => void) => {
  const elements = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(el => {
    observer.observe(el);
  });
  
  // Cleanup function
  return () => {
    elements.forEach(el => {
      observer.unobserve(el);
    });
  };
};
