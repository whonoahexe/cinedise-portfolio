'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer id="tt-footer" className="!bg-[#0a0a0a]">
      <div className="tt-footer-inner">
        <div className="footer-col tt-align-center-left">
          <div className="footer-col-inner">
            <div className="tt-btn tt-btn-link">
              <button
                type="button"
                className="scroll-to-top"
                data-hover="Back to top"
                aria-label="Scroll back to top"
                onClick={handleScrollToTop}
              >
                Back to top
              </button>
            </div>
          </div>
        </div>

        <div className="footer-col tt-align-center order-m-last">
          <div className="footer-col-inner">
            <div className="tt-copyright">
              © Copyright -{' '}
              <a
                href={siteConfig.company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tt-link"
              >
                {siteConfig.company.url.replace('https://', '')}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-col tt-align-center-right">
          <div className="footer-col-inner">
            <div className="footer-social">
              <div className="footer-social-text">
                <span>Follow</span>
                <i className="fas fa-share-alt"></i>
              </div>
              <div className="social-buttons">
                <ul>
                  <li>
                    <a
                      href={siteConfig.social.instagram.url}
                      className="magnetic-item"
                      target="_blank"
                      rel="noopener"
                    >
                      {siteConfig.social.instagram.label}
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.social.youtube.url}
                      className="magnetic-item"
                      target="_blank"
                      rel="noopener"
                    >
                      {siteConfig.social.youtube.label}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
