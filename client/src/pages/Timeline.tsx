import { useEffect, useRef, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import './Timeline.css';

/* ─────────────────────────────────────────────────────────────────
   Muslim Traders — Premium History Timeline Visualization
   
   Design: Frosted-glass panels floating over a warm beige abstract
   background, with glowing orange 3D dates & polished pill brand tags.
   ───────────────────────────────────────────────────────────────── */

interface TimelineEntry {
  year: string;
  endYear: string;
  business: string;
  detail: string;
  brands: string[];
}

const timelineData: TimelineEntry[] = [
  {
    year: '1988',
    endYear: '2008',
    business: 'Haleeb Foods',
    detail:
      'Muslim Traders began its journey in 1988 as a distribution partner for Haleeb Foods, building the foundation of a trusted supply chain across Chakwal. This 20-year partnership shaped our core logistics expertise.',
    brands: ['Haleeb', 'Good Milk', 'Candia'],
  },
  {
    year: '1990',
    endYear: '2007',
    business: 'Procter & Gamble',
    detail:
      'From 1990, we handled P&G distribution, expanding our reach to FMCG retail and wholesale channels. Our disciplined market coverage earned the trust of a global brand for 17 years.',
    brands: ['Ariel', 'Safeguard', 'Pantene', 'Head & Shoulders'],
  },
  {
    year: '1991',
    endYear: '2011',
    business: 'Super Crisp Industries',
    detail:
      'Super Crisp Industries joined our portfolio in 1991. Over two decades, we managed inventory, retail placement, and trade programs for their snacks across the region.',
    brands: ['Super Crisp', 'Kurleez', 'Lays'],
  },
  {
    year: '2007',
    endYear: 'Present',
    business: 'Pakistan Tobacco Company (PTC)',
    detail:
      'Our flagship partnership since 2007. As an exclusive PTC distributor, we manage local distribution for premium and mass-market tobacco and nicotine pouch brands, operating across 375+ exclusive distributors and 400,000+ retail stores.',
    brands: [
      'Dunhill',
      'Benson & Hedges',
      'Gold Leaf',
      'Capstan',
      'John Player',
      'Embassy',
      'Lucky Strike',
      'Velo',
    ],
  },
];

/* Velo product catalog from spreadsheet — all unit rates (PKR) */
const veloProducts = [
  { name: 'Berry Frost 6 MG', rate: 183.52 },
  { name: 'Berry Frost Nano', rate: 231.34 },
  { name: 'Berry Frost 10 MG', rate: 260.13 },
  { name: 'Berry Frost 14 MG', rate: 183.52 },
  { name: 'Polar Mint 6 MG - Nano', rate: 231.34 },
  { name: 'Polar Mint 10 MG', rate: 260.13 },
  { name: 'Polar Mint 14 MG', rate: 231.34 },
  { name: 'Water Melon 10 MG', rate: 231.34 },
  { name: 'Rich Elaichi 10 MG', rate: 231.34 },
  { name: 'Velo Strawberry Ice 10 MG', rate: 231.34 },
  { name: 'Velo Tropical Ice 10 MG', rate: 231.34 },
  { name: 'Purple Grape 10 MG', rate: 231.34 },
  { name: 'Purple Grape 6 MG Nano', rate: 183.52 },
  { name: 'Frosty Lemon 10 MG', rate: 231.34 },
  { name: 'Mango Flame 14 MG', rate: 260.13 },
  { name: 'Polar Mint 17 MG', rate: 279 },
  { name: 'Purple Grape 17 MG', rate: 279 },
];

export default function Timeline() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          setVisibleSections((prev) => {
            const next = new Set(prev);
            if (entry.isIntersecting) next.add(index);
            return next;
          });
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    );
    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="timeline-page">
      {/* Abstract beige background with decorative shapes */}
      <div className="timeline-bg">
        <div className="bg-circle bg-circle-1" />
        <div className="bg-circle bg-circle-2" />
        <div className="bg-circle bg-circle-3" />
        <div className="bg-circle bg-circle-4" />
        <div className="bg-circle bg-circle-5" />
        <div className="bg-wave" />
      </div>

      {/* Back button */}
      <a href="/" className="timeline-back-btn">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </a>

      {/* Header */}
      <header className="timeline-header">
        <div className="timeline-header-badge">EST. 1988 · CHAKWAL, PAKISTAN</div>
        <h1 className="timeline-title">
          <span className="timeline-title-main">Our Journey</span>
          <span className="timeline-title-sub">Through the Decades</span>
        </h1>
        <p className="timeline-subtitle">
          From humble beginnings in 1988 to becoming an exclusive PTC distributor — every partnership tells a story of trust, growth, and market excellence.
        </p>
      </header>

      {/* Timeline */}
      <div className="timeline-container">
        {/* Central vertical line */}
        <div className="timeline-line" />

        {timelineData.map((entry, index) => {
          const isLeft = index % 2 === 0;
          const isVisible = visibleSections.has(index);

          return (
            <div
              key={entry.year}
              ref={(el) => { sectionRefs.current[index] = el; }}
              data-index={index}
              className={`timeline-item ${isLeft ? 'timeline-item-left' : 'timeline-item-right'} ${isVisible ? 'timeline-item-visible' : ''}`}
            >
              {/* Connector dot on the central line */}
              <div className="timeline-dot">
                <div className="timeline-dot-inner" />
                <div className="timeline-dot-pulse" />
              </div>

              {/* Glass card */}
              <div className="glass-card">
                {/* Year in glowing 3D orange */}
                <div className="glass-card-year-row">
                  <span className="year-3d">{entry.year}</span>
                  <span className="year-separator">—</span>
                  <span className="year-3d year-3d-end">{entry.endYear}</span>
                </div>

                {/* Business name */}
                <h2 className="glass-card-title">{entry.business}</h2>

                {/* Detail text */}
                <p className="glass-card-detail">{entry.detail}</p>

                {/* Brand pills */}
                <div className="brand-pills">
                  {entry.brands.map((brand) => (
                    <span key={brand} className="brand-pill">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Velo Product Showcase — frosted glass */}
      <section className="velo-showcase">
        <div className="velo-header">
          <div className="timeline-header-badge">COMPLETE VELO CATALOG</div>
          <h2 className="velo-title">Velo Nicotine Pouches</h2>
          <p className="velo-subtitle">All 17 SKUs with unit rates (PKR) — the full portfolio.</p>
        </div>

        <div className="velo-grid">
          {veloProducts.map((product) => (
            <div key={product.name} className="velo-card">
              <span className="velo-card-name">{product.name}</span>
              <span className="velo-card-rate">
                <span className="velo-card-currency">PKR</span>
                {product.rate.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="timeline-footer">
        <p>Muslim Traders · Mohallah Eid Gah, Chakwal · Since 1988</p>
      </footer>
    </div>
  );
}
