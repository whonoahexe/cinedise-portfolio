'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldScrollToWork, setShouldScrollToWork] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const handlePortfolioClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isAnimating) {
      return;
    }

    // Close the menu first
    handleMenuClick(e);

    // Handle navigation/scroll
    if (pathname === '/') {
      // Already on home page, just scroll after menu closes
      setTimeout(() => {
        const workSection = document.getElementById('work');
        if (workSection) {
          workSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    } else {
      // Navigate to home page and set flag to scroll
      setShouldScrollToWork(true);
      router.push('/');
    }
  };

  // Effect to scroll to #work after navigation completes
  useEffect(() => {
    if (shouldScrollToWork && pathname === '/') {
      // Wait for the page to render, try multiple times if needed
      let attempts = 0;
      const maxAttempts = 5;
      
      const tryScroll = () => {
        const workSection = document.getElementById('work');
        if (workSection) {
          workSection.scrollIntoView({ behavior: 'smooth' });
          setShouldScrollToWork(false);
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(tryScroll, 200);
        } else {
          setShouldScrollToWork(false);
        }
      };
      
      // Initial delay before first attempt
      const timer = setTimeout(tryScroll, 500);
      
      return () => clearTimeout(timer);
    }
  }, [shouldScrollToWork, pathname]);

  const toggleMenu = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }

    if (isAnimating) return;

    const willOpen = !isMenuOpen;
    setIsAnimating(true);

    if (willOpen) {
      // Opening menu
      document.documentElement.classList.add('tt-no-scroll');
      document.body.classList.add('tt-ol-menu-open', 'olm-toggle-no-click');
      setIsMenuOpen(true);

      if (typeof window !== 'undefined' && (window as any).gsap) {
        const gsap = (window as any).gsap;
        const Power2 = (window as any).Power2;

        const tl = gsap.timeline({
          onComplete: () => {
            document.body.classList.remove('olm-toggle-no-click');
            setIsAnimating(false);
            // Focus first menu link after opening
            firstMenuLinkRef.current?.focus();
          },
        });

        tl.to('.tt-overlay-menu', { duration: 0.4, autoAlpha: 1 });
        tl.from('.tt-ol-menu-list > li', {
          duration: 0.4,
          y: 80,
          autoAlpha: 0,
          stagger: 0.05,
          ease: Power2?.easeOut || 'power2.out',
          clearProps: 'all',
        });
      } else {
        setTimeout(() => {
          document.body.classList.remove('olm-toggle-no-click');
          setIsAnimating(false);
          // Focus first menu link after opening
          firstMenuLinkRef.current?.focus();
        }, 500);
      }
    } else {
      // Closing menu
      document.body.classList.add('olm-toggle-no-click');

      if (typeof window !== 'undefined' && (window as any).gsap) {
        const gsap = (window as any).gsap;
        const Power2 = (window as any).Power2;

        const tl = gsap.timeline({
          onComplete: () => {
            document.documentElement.classList.remove('tt-no-scroll');
            document.body.classList.remove('tt-ol-menu-open', 'olm-toggle-no-click');
            setIsMenuOpen(false);
            setIsAnimating(false);
            // Restore focus to toggle button after closing
            toggleButtonRef.current?.focus();
          },
        });

        tl.to('.tt-ol-menu-list > li', {
          duration: 0.4,
          y: -80,
          autoAlpha: 0,
          stagger: 0.05,
          ease: Power2?.easeIn || 'power2.in',
        });
        tl.to(
          '.tt-overlay-menu',
          {
            duration: 0.4,
            autoAlpha: 0,
            clearProps: 'all',
          },
          '+=0.2'
        );
        tl.set('.tt-ol-menu-list > li', { clearProps: 'all' });
      } else {
        setTimeout(() => {
          document.documentElement.classList.remove('tt-no-scroll');
          document.body.classList.remove('tt-ol-menu-open', 'olm-toggle-no-click');
          setIsMenuOpen(false);
          setIsAnimating(false);
          // Restore focus to toggle button after closing
          toggleButtonRef.current?.focus();
        }, 500);
      }
    }
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    if (isAnimating) {
      e.preventDefault();
      return;
    }

    // Close menu with animation when clicking a link
    document.body.classList.add('olm-toggle-no-click');

    if (typeof window !== 'undefined' && (window as any).gsap) {
      const gsap = (window as any).gsap;
      const Power2 = (window as any).Power2;

      gsap.set('#content-wrap', { autoAlpha: 0 });
      const tl = gsap.timeline({
        onComplete: () => {
          document.documentElement.classList.remove('tt-no-scroll');
          document.body.classList.remove('tt-ol-menu-open', 'olm-toggle-no-click');
          setIsMenuOpen(false);
          setIsAnimating(false);
        },
      });

      tl.to('.tt-ol-menu-list > li', {
        duration: 0.4,
        y: -80,
        autoAlpha: 0,
        stagger: 0.05,
        ease: Power2?.easeIn || 'power2.in',
      });
      tl.to('#content-wrap', {
        duration: 0.4,
        autoAlpha: 1,
        clearProps: 'all',
      });
      tl.to('.tt-overlay-menu', {
        duration: 0.4,
        autoAlpha: 0,
        clearProps: 'all',
      });
      tl.set('.tt-ol-menu-list > li', { clearProps: 'all' });
    } else {
      setTimeout(() => {
        document.documentElement.classList.remove('tt-no-scroll');
        document.body.classList.remove('tt-ol-menu-open', 'olm-toggle-no-click');
        setIsMenuOpen(false);
        setIsAnimating(false);
      }, 500);
    }
  };

  // Close menu on pathname change
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.documentElement.classList.remove('tt-no-scroll');
      document.body.classList.remove('tt-ol-menu-open');
    }
  }, [pathname]);

  // Cleanup on unmount and initialize fixed header
  useEffect(() => {
    // Add fixed header class
    document.body.classList.add('tt-header-fixed-on');

    return () => {
      document.documentElement.classList.remove('tt-no-scroll');
      document.body.classList.remove('tt-ol-menu-open', 'olm-toggle-no-click');
    };
  }, []);

  // Handle Escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen && !isAnimating) {
        toggleMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen, isAnimating]);

  return (
    <header id="tt-header" className="tt-header-fixed">
      <div className="tt-header-inner">
        <div className="tt-header-col">
          <div className="tt-logo">
            <Link href="/">
              <img
                src="https://cinedise-video.s3.eu-north-1.amazonaws.com/public/logo-cinedise-light.png"
                className="tt-logo-light magnetic-item"
                alt="Logo"
              />
              <img
                src="https://cinedise-video.s3.eu-north-1.amazonaws.com/public/logo-cinedise-dark.png"
                className="tt-logo-dark magnetic-item"
                alt="Logo"
              />
            </Link>
          </div>
        </div>

        <div className="tt-header-col">
          <div id="tt-ol-menu-toggle-btn-wrap" onClick={toggleMenu}>
            <div className="tt-ol-menu-toggle-btn-text">
              <span className="text-menu" data-hover="Open">
                Menu
              </span>
              <span className="text-close">Close</span>
            </div>
            <div className="tt-ol-menu-toggle-btn-holder">
              <button
                ref={toggleButtonRef}
                type="button"
                className={`tt-ol-menu-toggle-btn magnetic-item ${isMenuOpen ? 'is-open' : ''}`}
                aria-expanded={isMenuOpen}
                aria-controls="overlay-menu"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <span></span>
              </button>
            </div>
          </div>

          <nav
            id="overlay-menu"
            ref={menuRef}
            className={`tt-overlay-menu tt-ol-menu-center tt-ol-menu-count ${isMenuOpen ? 'is-open' : ''}`}
            style={{
              visibility: isMenuOpen ? 'visible' : 'hidden',
              opacity: isMenuOpen ? 1 : 0,
            }}
          >
            <div className="tt-ol-menu-holder !bg-[#0a0a0a]">
              <div className="tt-ol-menu-inner tt-wrap">
                <div className="tt-ol-menu-content">
                  <ul className="tt-ol-menu-list">
                    <li className="tt-ol-submenu-wrap">
                      <div className="tt-ol-submenu-trigger">
                        <Link href="/" onClick={handleMenuClick} ref={firstMenuLinkRef}>
                          Home
                        </Link>
                      </div>
                    </li>
                    <li className="tt-ol-submenu-wrap">
                      <div className="tt-ol-submenu-trigger">
                        <a href="#" onClick={handlePortfolioClick}>
                          Portfolio
                        </a>
                      </div>
                    </li>
                    <li className="tt-ol-submenu-wrap">
                      <div className="tt-ol-submenu-trigger">
                        <Link href="/about-us" onClick={handleMenuClick}>
                          About
                        </Link>
                      </div>
                    </li>
                    <li>
                      <Link href="/contact" onClick={handleMenuClick}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-noise"></div>
          </nav>
        </div>
      </div>
    </header>
  );
}
