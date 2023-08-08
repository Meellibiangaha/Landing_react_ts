export const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
export const isMobile = window.matchMedia('(max-width: 556px)').matches;
export const isTablet = window.matchMedia('(max-width: 768px)').matches;

export const handleScrollIntoView = (block: string) => {
    document.querySelector(block)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };