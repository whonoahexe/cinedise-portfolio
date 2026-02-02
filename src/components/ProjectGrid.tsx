import Link from 'next/link';
import { CATEGORY_GRID_ITEMS } from '@/constants/categories';

export default function ProjectGrid() {
  return (
    <div id="portfolio-grid">
      <div className="tt-grid ttgr-layout-3 ttgr-gap-3 ttgr-not-cropped">
        <div className="tt-grid-items-wrap isotope-items-wrap">
          {CATEGORY_GRID_ITEMS.map((project, index) => (
            <div key={index} className={`tt-grid-item isotope-item ${project.category}`}>
              <div className="ttgr-item-inner">
                <div className="portfolio-grid-item">
                  <Link
                    href={project.link}
                    className="pgi-image-wrap"
                    rel="noopener"
                    data-cursor="View<br>Work"
                    target={project.external ? '_blank' : '_self'}
                  >
                    <div className="pgi-image-holder">
                      <div className="pgi-image-inner anim-zoomin">
                        <figure className="pgi-image ttgr-height">
                          <img className="tt-lazy" src={project.image} alt={project.title} />
                        </figure>
                      </div>
                    </div>
                  </Link>
                  <div className="pgi-caption">
                    <div className="pgi-caption-inner">
                      <h2 className="pgi-title">
                        <Link
                          href={project.link}
                          rel="noopener"
                          target={project.external ? '_blank' : '_self'}
                        >
                          {project.title}
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
