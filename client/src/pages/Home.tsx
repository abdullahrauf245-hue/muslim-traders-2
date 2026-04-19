import { useState, useMemo } from 'react';
import { Filter, MapPin, Menu, Moon, Phone, Search, Sun, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTheme } from '@/contexts/ThemeContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

/* Design Philosophy: Modern Minimalist with Warm Accents
   - Warm earthy palette (terracotta #c85a3a, sage #7a9b8e, cream #faf8f3)
   - Deep navy (#1a3a52) for authority
   - Asymmetric layouts with generous whitespace
   - Smooth animations and micro-interactions
   - Serif headings (Georgia) with clean sans-serif body (Poppins) */

interface PriceItem {
  brand: string;
  category: 'Cigarettes' | 'Velo';
  unitRate: string;
  rate: number;
  wsFiler: string;
  wsNonFiler: string;
}

const priceData: PriceItem[] = [
  { brand: 'Dunhill Light', category: 'Cigarettes', unitRate: 'n/a', rate: 28930, wsFiler: '28,302', wsNonFiler: '28,865' },
  { brand: 'Dunhill Switch', category: 'Cigarettes', unitRate: 'n/a', rate: 31060, wsFiler: '30,396', wsNonFiler: '31,000' },
  { brand: 'Benson & Hedges', category: 'Cigarettes', unitRate: 'n/a', rate: 13750, wsFiler: '13,432', wsNonFiler: '13,700' },
  { brand: 'Gold Leaf Classic', category: 'Cigarettes', unitRate: 'n/a', rate: 24490, wsFiler: '23,957', wsNonFiler: '24,435' },
  { brand: 'Dunhill Special', category: 'Cigarettes', unitRate: 'n/a', rate: 28990, wsFiler: '28,321', wsNonFiler: '28,865' },
  { brand: 'Capstan by Pall Mall Official', category: 'Cigarettes', unitRate: 'n/a', rate: 12049, wsFiler: '11,295', wsNonFiler: '11,520' },
  { brand: 'Capstan Filter', category: 'Cigarettes', unitRate: 'n/a', rate: 12040, wsFiler: '11,752', wsNonFiler: '11,986' },
  { brand: 'John Player', category: 'Cigarettes', unitRate: 'n/a', rate: 12024.85, wsFiler: '11,742', wsNonFiler: '11,976' },
  { brand: 'Gold Flake Rothmans', category: 'Cigarettes', unitRate: 'n/a', rate: 12049, wsFiler: '11,295', wsNonFiler: '11,520' },
  { brand: 'Embassy Filter', category: 'Cigarettes', unitRate: 'n/a', rate: 12049, wsFiler: '11,295', wsNonFiler: '11,520' },
  { brand: 'Capstan International', category: 'Cigarettes', unitRate: 'n/a', rate: 9250.10, wsFiler: '9,045', wsNonFiler: '9,225' },
  { brand: 'Capstan by Pall Mall Official Elite', category: 'Cigarettes', unitRate: 'n/a', rate: 12598, wsFiler: '11,765', wsNonFiler: '11,999' },
  { brand: 'Capstan Select', category: 'Cigarettes', unitRate: 'n/a', rate: 8000, wsFiler: 'n/a', wsNonFiler: 'n/a' },
  { brand: 'Lucky Strike Berry', category: 'Cigarettes', unitRate: 'n/a', rate: 11200.20, wsFiler: 'n/a', wsNonFiler: 'n/a' },
  { brand: 'Lucky Strike Mint', category: 'Cigarettes', unitRate: 'n/a', rate: 11200.20, wsFiler: 'n/a', wsNonFiler: 'n/a' },
  { brand: 'Velo Strawberry Ice 10 MG', category: 'Velo', unitRate: '231.34', rate: 12049, wsFiler: '11,295', wsNonFiler: '11,520' },
  { brand: 'Velo Tropical Ice 10 MG', category: 'Velo', unitRate: '231.34', rate: 12049, wsFiler: '11,295', wsNonFiler: '11,520' },
  { brand: 'Purple Grape 10 MG', category: 'Velo', unitRate: '231.34', rate: 9250.10, wsFiler: '9,045', wsNonFiler: '9,225' },
  { brand: 'Purple Grape 6 MG Nano', category: 'Velo', unitRate: '183.52', rate: 12598, wsFiler: '11,765', wsNonFiler: '11,999' },
  { brand: 'Frosty Lemon 10 MG', category: 'Velo', unitRate: '231.34', rate: 8000, wsFiler: 'n/a', wsNonFiler: 'n/a' },
  { brand: 'Mango Flame 14 MG', category: 'Velo', unitRate: '260.13', rate: 11200.20, wsFiler: 'n/a', wsNonFiler: 'n/a' },
  { brand: 'Polar Mint 17 MG', category: 'Velo', unitRate: '279', rate: 11200.20, wsFiler: 'n/a', wsNonFiler: 'n/a' },
  { brand: 'Purple Grape 17 MG', category: 'Velo', unitRate: '279', rate: 0, wsFiler: 'n/a', wsNonFiler: 'n/a' },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, switchable } = useTheme();

  const businessTimeline = [
    {
      business: 'Haleeb Foods',
      started: '1988',
      ended: '2008',
      detail: 'Started distribution operations in 1988 and completed this partnership in 2008.',
    },
    {
      business: 'Procter & Gamble',
      started: '1990',
      ended: '2007',
      detail: 'Handled distribution from 1990 and remained active until 2007.',
    },
    {
      business: 'Super Crisp Industries',
      started: '1991',
      ended: '2011',
      detail: 'Brought into the portfolio in 1991 and served this channel through 2011.',
    },
    {
      business: 'PTC',
      started: '2007',
      ended: 'Present',
      detail: 'Joined in 2007 and continuing distribution work since then.',
    },
  ];

  const navLinks = [
    { href: '#journey', label: 'Journey' },
    { href: '#operations', label: 'Operations' },
    { href: '#price-board', label: 'Price Board' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  const formatWholeNumber = (value: number) => Math.trunc(value).toLocaleString();

  const filteredData = useMemo(() => {
    return priceData.filter((item) => {
      const matchesSearch = item.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || item.category.toLowerCase() === categoryFilter.toLowerCase();
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, categoryFilter]);

  const stats = useMemo(() => {
    const validRates = filteredData.filter((item) => item.rate > 0).map((item) => item.rate);
    const avgRate = validRates.length > 0 ? formatWholeNumber(validRates.reduce((a, b) => a + b, 0) / validRates.length) : '0';
    const maxRate = validRates.length > 0 ? Math.max(...validRates) : 0;
    const minRate = validRates.length > 0 ? Math.min(...validRates) : 0;

    const maxItem = filteredData.find((item) => item.rate === maxRate);
    const minItem = filteredData.find((item) => item.rate === minRate);

    return {
      visibleSkus: filteredData.length,
      averageRate: avgRate,
      highestRate: maxItem ? `${maxItem.brand} (${formatWholeNumber(maxRate)})` : 'N/A',
      lowestRate: minItem ? `${minItem.brand} (${formatWholeNumber(minRate)})` : 'N/A',
    };
  }, [filteredData]);

  const getOuterRate = (item: PriceItem) => {
    const outerRate = item.category === 'Cigarettes' ? item.rate / 5 : Number(item.unitRate);
    if (Number.isNaN(outerRate)) {
      return item.unitRate;
    }

    return formatWholeNumber(outerRate);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-card/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/85">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-base sm:text-lg">MT</span>
            </div>
            <h1 className="text-base sm:text-xl font-bold text-primary">Muslim Traders</h1>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
            {switchable && toggleTheme && (
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border-border bg-background/80 hover:bg-muted"
              >
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>
            )}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8 md:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        <div
          className={`md:hidden overflow-hidden border-t border-border bg-card/95 transition-[max-height,opacity] duration-300 ease-out ${
            isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container flex flex-col py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative container py-10 sm:py-14 md:py-20 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="fade-in">
            <div className="text-sm font-semibold text-accent mb-4 tracking-wide">OFFICIAL PTC DISTRIBUTOR</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-5 leading-tight">
              Muslim Traders
            </h1>
            <p className="text-sm sm:text-base text-foreground/80 mb-6 leading-relaxed max-w-lg">
              The place where you can place your trust. Started in 1988, Muslim Traders has built a reliable distribution network through long-term partnerships and disciplined market service.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="btn-primary w-full sm:w-auto">Get Started</Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 w-full sm:w-auto">Learn More</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-card rounded-xl p-5 sm:p-6 shadow-sm border border-border hover-lift">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">375</div>
              <p className="text-sm sm:text-base text-foreground/80">Exclusive distributors in the PTC network nationwide</p>
            </div>
            <div className="bg-card rounded-xl p-5 sm:p-6 shadow-sm border border-border hover-lift">
              <div className="text-2xl sm:text-3xl font-bold text-secondary mb-2">400,000+</div>
              <p className="text-sm sm:text-base text-foreground/80">Retail stores supported across Pakistan by the network</p>
            </div>
            <div className="bg-card rounded-xl p-5 sm:p-6 shadow-sm border border-border hover-lift">
              <div className="text-base sm:text-lg font-bold text-primary mb-2">Strict Compliance</div>
              <p className="text-sm sm:text-base text-foreground/80">Track-and-trace linked distribution with tax-documented supply</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Journey Section */}
      <section id="journey" className="py-10 sm:py-14 md:py-20 bg-card">
        <div className="container">
          <div className="mb-6 sm:mb-8">
            <div className="text-sm font-semibold text-accent mb-4 tracking-wide">TRUSTED JOURNEY SINCE 1988</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">The Place Where Businesses Place Their Trust</h2>
            <p className="text-sm sm:text-base text-foreground/70 max-w-3xl leading-relaxed">
              Muslim Traders started in 1988 and has consistently delivered distribution support across leading brands. Our history reflects long-term relationships, clear performance, and continuity in market coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {businessTimeline.map((item) => (
              <div key={item.business} className="rounded-xl border border-border bg-background p-4 sm:p-5 hover-lift">
                <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-primary">{item.business}</h3>
                  <span className="rounded-full bg-accent/10 text-accent px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold">
                    {item.started} - {item.ended}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section id="operations" className="relative overflow-hidden py-10 sm:py-14 md:py-20 bg-card">
        <div className="relative container">
          <div className="mb-8 sm:mb-10">
            <div className="text-sm font-semibold text-accent mb-4 tracking-wide">CORE BUSINESS OPERATIONS</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">How Muslim Traders Runs Local Distribution</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Retail Supply Chain',
                description: 'Field representatives visit shops, capture orders, monitor inventory, and support consistent shelf availability.',
              },
              {
                title: 'Wholesale Fulfillment',
                description: 'Bulk inventory is supplied to smaller wholesalers and general stores in Chakwal at company-regulated rates.',
              },
              {
                title: 'Inventory And Security',
                description: 'Warehouse stock is received from PTC-linked production sources and stored under controlled handling conditions.',
              },
              {
                title: 'Trade Program Support',
                description: 'Retail engagement programs are implemented with performance-linked incentives and display standards.',
              },
            ].map((operation, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-5 sm:p-6 border-l-4 border-accent hover-lift"
              >
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-3">{operation.title}</h3>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">{operation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Board Section */}
      <section id="price-board" className="py-10 sm:py-14 md:py-20 bg-background">
        <div className="container">
          <div className="mb-8">
            <div className="text-sm font-semibold text-accent mb-4 tracking-wide">PRICE CATALOG</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">PTC Cigarettes + Velo Price Board</h2>
            <p className="text-sm sm:text-base text-foreground/70">
              All figures are in PKR based on your provided sheet. Rate is fixed. WS means wholesale, filer means FBR-registered, and non-filer means not registered.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search brand (e.g., Dunhill, Capstan, Velo)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All categories</SelectItem>
                <SelectItem value="cigarettes">Cigarettes</SelectItem>
                <SelectItem value="velo">Velo</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Price Table */}
          <div className="overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full min-w-[760px] text-sm sm:text-base">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-3 sm:px-4 py-3 text-left font-semibold">Brand</th>
                  <th className="px-3 sm:px-4 py-3 text-left font-semibold">Category</th>
                  <th className="px-3 sm:px-4 py-3 text-right font-semibold">Outer Rate</th>
                  <th className="px-3 sm:px-4 py-3 text-right font-semibold">Rate</th>
                  <th className="px-3 sm:px-4 py-3 text-right font-semibold">WS Filer</th>
                  <th className="px-3 sm:px-4 py-3 text-right font-semibold">WS Non Filer</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-3 sm:px-4 py-3 font-medium text-foreground whitespace-nowrap">{item.brand}</td>
                    <td className="px-3 sm:px-4 py-3 text-foreground/70">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                        item.category === 'Cigarettes'
                          ? 'bg-accent/10 text-accent'
                          : 'bg-secondary/10 text-secondary'
                      }`}>
                        {item.category}
                      </span>
                    </td>
                    <td className="px-3 sm:px-4 py-3 text-right text-foreground/70">{getOuterRate(item)}</td>
                    <td className="px-3 sm:px-4 py-3 text-right font-semibold text-primary">{formatWholeNumber(item.rate)}</td>
                    <td className="px-3 sm:px-4 py-3 text-right text-foreground/70">{item.wsFiler}</td>
                    <td className="px-3 sm:px-4 py-3 text-right text-foreground/70">{item.wsNonFiler}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="bg-card rounded-lg p-4 border border-border text-center">
              <div className="text-2xl font-bold text-accent mb-1">{stats.visibleSkus}</div>
              <p className="text-sm text-foreground/70">Visible SKUs</p>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border text-center">
              <div className="text-2xl font-bold text-secondary mb-1">{stats.averageRate}</div>
              <p className="text-sm text-foreground/70">Average Outer Rate</p>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border text-center">
              <div className="text-base sm:text-lg font-bold text-primary mb-2 break-words">{stats.highestRate}</div>
              <p className="text-sm text-foreground/70">Highest Rate</p>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border text-center">
              <div className="text-base sm:text-lg font-bold text-primary mb-2 break-words">{stats.lowestRate}</div>
              <p className="text-sm text-foreground/70">Lowest Rate</p>
            </div>
          </div>
          <p className="text-xs text-foreground/50 mt-4">Sheet updated: 16 Apr 2026. Unlabeled sheet value captured: 170.</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-10 sm:py-14 md:py-20 bg-card">
        <div className="container">
          <div className="mb-8">
            <div className="text-sm font-semibold text-accent mb-4 tracking-wide">BRAND PORTFOLIO</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">Major PTC-Owned Lines Supported</h2>
            <p className="text-sm sm:text-base text-foreground/70">
              Alongside listed SKUs in the price board, Muslim Traders handles local channel support for premium and mass market labels.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Dunhill', 'Benson & Hedges', 'John Player', 'Gold Leaf', 'Capstan', 'Embassy', 'Velo'].map((brand) => (
              <div
                key={brand}
                className="px-3 sm:px-4 py-2 bg-background border border-accent rounded-full text-xs sm:text-sm font-semibold text-primary hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-pointer"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 sm:py-14 md:py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-sm font-semibold mb-4 tracking-wide opacity-90">CONTACT AND ACCESS</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Muslim Traders, Mohallah Eid Gah</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="opacity-90">Chakwal, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a href="tel:+92543669062" className="opacity-90 hover:opacity-100 transition-opacity">
                      +92 543 669062
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold mb-6 tracking-wide opacity-90">BUSINESS HOURS</div>
              <div className="space-y-4">
                {[
                  { day: 'Mon - Thu', hours: '7:30 AM - 7:30 PM' },
                  { day: 'Friday', hours: '7:00 AM - 5:00 PM' },
                  { day: 'Saturday', hours: '7:30 AM - 7:30 PM' },
                  { day: 'Sunday', hours: 'Closed' },
                ].map((schedule, index) => (
                  <div key={index} className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-center pb-4 border-b border-primary-foreground/20">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="opacity-90">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-6 sm:py-8">
        <div className="container text-center text-foreground/60 text-xs sm:text-sm">
          <p>Muslim Traders | Official distributor operations page for trade information and price visibility.</p>
        </div>
      </footer>
    </div>
  );
}
