import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Filter,
  MapPin,
  Menu,
  Moon,
  Phone,
  Search,
  Sun,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/contexts/ThemeContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/* Premium Glassmorphism Design
   - Beige abstract bg, frosted glass panels, glowing orange 3D
   - All merged into a single page
*/

interface PriceItem {
  brand: string;
  category: "Cigarettes" | "Velo";
  unitRate: string;
  rate: number;
  wsFiler: string;
  wsNonFiler: string;
}

const priceData: PriceItem[] = [
  {
    brand: "Dunhill Light",
    category: "Cigarettes",
    unitRate: "n/a",
    rate: 28930,
    wsFiler: "28,302",
    wsNonFiler: "28,865",
  },
  {
    brand: "Dunhill Switch",
    category: "Cigarettes",
    unitRate: "n/a",
    rate: 31060,
    wsFiler: "30,396",
    wsNonFiler: "31,000",
  },
  {
    brand: "Benson & Hedges",
    category: "Cigarettes",
    unitRate: "n/a",
    rate: 13750,
    wsFiler: "13,432",
    wsNonFiler: "13,700",
  },
  {
    brand: "Gold Leaf Classic",
    category: "Cigarettes",
    unitRate: "n/a",
    rate: 24490,
    wsFiler: "23,957",
    wsNonFiler: "24,435",
  },
  {
    brand: "Dunhill Special",
    category: "Cigarettes",
    unitRate: "n/a",
    rate: 28990,
    wsFiler: "28,321",
    wsNonFiler: "28,865",
  },
  {
    brand: "Capstan by Pall Mall Official",
    category: "Cigarettes",
    unitRate: "n/a",
    rate: 12049,
    wsFiler: "11,295",
    wsNonFiler: "11,520",
  },
  {
    brand: "Capstan Filter",
    category: "Cigarettes",
    unitRate: "n/a",
    rate: 12040,
    wsFiler: "11,752",
    wsNonFiler: "11,986",
  },
  {
    brand: "John Player",
    category: "Cigarettes",
    unitRate: "n/a",
    rate: 12024.85,
    wsFiler: "11,742",
    wsNonFiler: "11,976",
  },
  {
    brand: "Gold Flake Rothmans",
    category: "Cigarettes",
    unitRate: "n/a",
    rate: 12049,
    wsFiler: "11,295",
    wsNonFiler: "11,520",
  },
  {
    brand: "Embassy Filter",
    category: "Cigarettes",
    unitRate: "n/a",
    rate: 12049,
    wsFiler: "11,295",
    wsNonFiler: "11,520",
  },
  {
    brand: "Capstan International",
    category: "Cigarettes",
    unitRate: "n/a",
    rate: 9250.1,
    wsFiler: "9,045",
    wsNonFiler: "9,225",
  },
  {
    brand: "Capstan by Pall Mall Official Elite",
    category: "Cigarettes",
    unitRate: "n/a",
    rate: 12598,
    wsFiler: "11,765",
    wsNonFiler: "11,999",
  },
  {
    brand: "Capstan Select",
    category: "Cigarettes",
    unitRate: "n/a",
    rate: 8000,
    wsFiler: "n/a",
    wsNonFiler: "n/a",
  },
  {
    brand: "Lucky Strike Berry",
    category: "Cigarettes",
    unitRate: "n/a",
    rate: 11200.2,
    wsFiler: "n/a",
    wsNonFiler: "n/a",
  },
  {
    brand: "Lucky Strike Mint",
    category: "Cigarettes",
    unitRate: "n/a",
    rate: 11200.2,
    wsFiler: "n/a",
    wsNonFiler: "n/a",
  },
  {
    brand: "Berry Frost 6 MG",
    category: "Velo",
    unitRate: "183.52",
    rate: 917.6,
    wsFiler: "n/a",
    wsNonFiler: "n/a",
  },
  {
    brand: "Berry Frost Nano",
    category: "Velo",
    unitRate: "183.52",
    rate: 917.6,
    wsFiler: "n/a",
    wsNonFiler: "n/a",
  },
  {
    brand: "Berry Frost 10 MG",
    category: "Velo",
    unitRate: "231.34",
    rate: 1156.7,
    wsFiler: "n/a",
    wsNonFiler: "n/a",
  },
  {
    brand: "Berry Frost 14 MG",
    category: "Velo",
    unitRate: "260.13",
    rate: 1300.65,
    wsFiler: "n/a",
    wsNonFiler: "n/a",
  },
  {
    brand: "Polar Mint 6 MG - Nano",
    category: "Velo",
    unitRate: "183.52",
    rate: 917.6,
    wsFiler: "n/a",
    wsNonFiler: "n/a",
  },
  {
    brand: "Polar Mint 10 MG",
    category: "Velo",
    unitRate: "231.34",
    rate: 1156.7,
    wsFiler: "n/a",
    wsNonFiler: "n/a",
  },
  {
    brand: "Polar Mint 14 MG",
    category: "Velo",
    unitRate: "260.13",
    rate: 1300.65,
    wsFiler: "n/a",
    wsNonFiler: "n/a",
  },
  {
    brand: "Water Melon 10 MG",
    category: "Velo",
    unitRate: "231.34",
    rate: 1156.7,
    wsFiler: "n/a",
    wsNonFiler: "n/a",
  },
  {
    brand: "Rich Elaichi 10 MG",
    category: "Velo",
    unitRate: "231.34",
    rate: 1156.7,
    wsFiler: "n/a",
    wsNonFiler: "n/a",
  },
  {
    brand: "Velo Strawberry Ice 10 MG",
    category: "Velo",
    unitRate: "231.34",
    rate: 1156.7,
    wsFiler: "11,295",
    wsNonFiler: "11,520",
  },
  {
    brand: "Velo Tropical Ice 10 MG",
    category: "Velo",
    unitRate: "231.34",
    rate: 1156.7,
    wsFiler: "11,295",
    wsNonFiler: "11,520",
  },
  {
    brand: "Purple Grape 10 MG",
    category: "Velo",
    unitRate: "231.34",
    rate: 1156.7,
    wsFiler: "9,045",
    wsNonFiler: "9,225",
  },
  {
    brand: "Purple Grape 6 MG Nano",
    category: "Velo",
    unitRate: "183.52",
    rate: 917.6,
    wsFiler: "11,765",
    wsNonFiler: "11,999",
  },
  {
    brand: "Frosty Lemon 10 MG",
    category: "Velo",
    unitRate: "231.34",
    rate: 1156.7,
    wsFiler: "n/a",
    wsNonFiler: "n/a",
  },
  {
    brand: "Mango Flame 14 MG",
    category: "Velo",
    unitRate: "260.13",
    rate: 1300.65,
    wsFiler: "n/a",
    wsNonFiler: "n/a",
  },
  {
    brand: "Polar Mint 17 MG",
    category: "Velo",
    unitRate: "279",
    rate: 1395,
    wsFiler: "n/a",
    wsNonFiler: "n/a",
  },
  {
    brand: "Purple Grape 17 MG",
    category: "Velo",
    unitRate: "279",
    rate: 1395,
    wsFiler: "n/a",
    wsNonFiler: "n/a",
  },
];

const timelineData = [
  {
    year: "1988",
    endYear: "2008",
    business: "Haleeb Foods",
    detail:
      "Muslim Traders began its journey in 1988 as a distribution partner for Haleeb Foods, building the foundation of a trusted supply chain across Chakwal. This 20-year partnership shaped our core logistics expertise.",
    brands: ["Haleeb", "Good Milk", "Desi Ghee"],
  },
  {
    year: "1990",
    endYear: "2007",
    business: "Procter & Gamble",
    detail:
      "From 1990, we handled P&G distribution, expanding our reach to FMCG retail and wholesale channels. Our disciplined market coverage earned the trust of a global brand for 17 years.",
    brands: ["Ariel", "Safeguard", "Pantene", "Head & Shoulders"],
  },
  {
    year: "1991",
    endYear: "2011",
    business: "Super Crisp Industries",
    detail:
      "Super Crisp Industries joined our portfolio in 1991. Over two decades, we managed inventory, retail placement, and trade programs for their snacks across the region.",
    brands: ["Super Crisp", "Twister", "Catty Chins", "Nimkomix"],
  },
  {
    year: "2007",
    endYear: "Present",
    business: "Pakistan Tobacco Company (PTC)",
    detail:
      "Our flagship partnership since 2007. Pakistan Tobacco Company (PTC), a subsidiary of British American Tobacco, holds the historic legacy of being the first multinational corporation established in Pakistan in 1947. As an exclusive distributor for this industry titan, we manage local distribution for their premium and mass-market tobacco and nicotine pouch brands, operating across 375+ exclusive distributors and 400,000+ retail stores.",
    brands: [
      "Dunhill",
      "Benson & Hedges",
      "Gold Leaf",
      "Capstan",
      "John Player",
      "Embassy",
      "Lucky Strike",
      "Velo",
    ],
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, switchable } = useTheme();



  const navLinks = [
    { href: "#journey", label: "Journey" },
    { href: "#operations", label: "Operations" },
    { href: "#price-board", label: "Price Board" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  const formatWholeNumber = (value: number) =>
    Math.trunc(value).toLocaleString();

  const filteredData = useMemo(() => {
    return priceData.filter(item => {
      const matchesSearch = item.brand
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        categoryFilter === "all" ||
        item.category.toLowerCase() === categoryFilter.toLowerCase();
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, categoryFilter]);

  const stats = useMemo(() => {
    const validRates = filteredData
      .filter(item => item.rate > 0)
      .map(item => item.rate);
    const avgRate =
      validRates.length > 0
        ? formatWholeNumber(
            validRates.reduce((a, b) => a + b, 0) / validRates.length
          )
        : "0";
    const maxRate = validRates.length > 0 ? Math.max(...validRates) : 0;
    const minRate = validRates.length > 0 ? Math.min(...validRates) : 0;

    const maxItem = filteredData.find(item => item.rate === maxRate);
    const minItem = filteredData.find(item => item.rate === minRate);

    return {
      visibleSkus: filteredData.length,
      averageRate: avgRate,
      highestRate: maxItem
        ? `${maxItem.brand} (${formatWholeNumber(maxRate)})`
        : "N/A",
      lowestRate: minItem
        ? `${minItem.brand} (${formatWholeNumber(minRate)})`
        : "N/A",
    };
  }, [filteredData]);

  const getOuterRate = (item: PriceItem) => {
    const outerRate =
      item.category === "Cigarettes" ? item.rate / 5 : Number(item.unitRate);
    if (Number.isNaN(outerRate)) {
      return item.unitRate;
    }
    return formatWholeNumber(outerRate);
  };

  return (
    <div className="min-h-screen bg-transparent overflow-x-hidden relative">
      <div className="bg-shapes">
        <div className="bg-shape bg-shape-1" />
        <div className="bg-shape bg-shape-2" />
        <div className="bg-shape bg-shape-3" />
        <div className="bg-shape bg-shape-4" />
      </div>

      <div className="relative z-10">
        <nav className="sticky top-0 z-50 glass rounded-b-2xl mx-2 sm:mx-4 mt-2">
          <div className="container flex items-center justify-between py-3 px-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-lg">
                  MT
                </span>
              </div>
              <h1 className="text-xl font-bold text-primary">Muslim Traders</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-6 md:flex">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
                  >
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
                  aria-label="Toggle Theme"
                  className="h-10 w-10 rounded-full glass-light border-border/50 text-foreground hover:bg-white/20"
                >
                  {theme === "light" ? (
                    <Moon className="h-5 w-5" />
                  ) : (
                    <Sun className="h-5 w-5" />
                  )}
                </Button>
              )}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-10 w-10 md:hidden glass-light rounded-full"
                onClick={() => setIsMobileMenuOpen(prev => !prev)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
          <div
            className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${isMobileMenuOpen ? "max-h-80 opacity-100 border-t border-white/20" : "max-h-0 opacity-0"}`}
          >
            <div className="container flex flex-col py-3 px-4">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/20 hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <section className="relative container py-12 md:py-16 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full glass-light text-accent text-xs font-bold tracking-widest mb-6">
              EST. 1988 · CHAKWAL, PAKISTAN
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              A Legacy of <span className="glow-orange">Trust</span>
            </h1>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed max-w-lg font-medium">
              Muslim Traders has built a reliable distribution network through
              long-term partnerships and disciplined market service for over
              three decades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary">View Portfolio</motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-outline">Contact Us</motion.button>
            </div>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div whileHover={{ scale: 1.02, translateY: -6 }} className="glass rounded-2xl p-6 relative overflow-hidden">
              <div className="text-4xl font-bold glow-orange mb-2">375</div>
              <p className="text-foreground/80 font-medium">
                Exclusive distributors in the PTC network
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02, translateY: -6 }} className="glass rounded-2xl p-6 relative overflow-hidden">
              <div className="text-4xl font-bold glow-orange mb-2">
                400,000+
              </div>
              <p className="text-foreground/80 font-medium">
                Retail stores supported across Pakistan
              </p>
            </motion.div>
          </motion.div>
        </section>

        <section id="journey" className="py-12 relative">
          <div className="container">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full glass-light text-accent text-xs font-bold tracking-widest mb-4">
                OUR JOURNEY
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Through the Decades
              </h2>
              <p className="text-foreground/80 max-w-2xl mx-auto font-medium">
                Every partnership tells a story of trust, growth, and market
                excellence.
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto py-10">
              <div className="tl-line" />
              {timelineData.map((entry, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={entry.year}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={`relative flex items-start mb-12 md:mb-0 ${index !== 0 ? 'md:-mt-32' : ''} ${isLeft ? "flex-col md:flex-row md:pr-[50%] md:justify-end" : "flex-col md:flex-row-reverse md:pl-[50%] md:justify-end"}`}
                  >
                    <div className="absolute left-[23px] md:left-1/2 top-8 transform -translate-x-1/2 z-10">
                      <div className="tl-dot" />
                      <div className="tl-dot-pulse" />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02, translateY: -4 }}
                      className={`glass-strong rounded-3xl p-6 md:p-8 max-w-md w-[calc(100%-4rem)] ml-16 md:ml-0 ${isLeft ? "md:mr-10" : "md:ml-10"}`}
                    >
                      <div className="flex items-baseline gap-3 mb-4">
                        <span className="text-4xl font-bold glow-orange">
                          {entry.year}
                        </span>
                        <span className="text-2xl text-accent/50">—</span>
                        <span className="text-2xl font-bold glow-orange opacity-80">
                          {entry.endYear}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-3">
                        {entry.business}
                      </h3>
                      <p className="text-foreground/80 mb-6 leading-relaxed text-sm">
                        {entry.detail}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {entry.brands.map(brand => (
                          <span key={brand} className="pill-3d">
                            {brand}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="py-12 relative z-20">
          <div className="container">
            <motion.div 
              whileHover={{ scale: 1.02, translateY: -4 }} 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.6 }} 
              className="glass-strong rounded-[2.5rem] p-10 md:p-16 max-w-4xl mx-auto text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
              <div className="inline-block px-4 py-1.5 rounded-full glass-light text-accent text-xs font-bold tracking-widest mb-6 relative z-10">
                LEADERSHIP
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 relative z-10">
                Abdul Rauf Athar
              </h2>
              <p className="text-foreground/80 leading-relaxed text-lg font-medium relative z-10 max-w-2xl mx-auto italic">
                "Our foundation was built in 1988 on a simple promise:
                unwavering reliability. For over three decades, we have remained
                dedicated to empowering our partners and ensuring seamless
                distribution across the Chakwal region."
              </p>
              <div className="mt-8 text-sm font-bold text-foreground/50 uppercase tracking-widest relative z-10">
                Founder & Managing Director
              </div>
            </motion.div>
          </div>
        </section>

        <section id="operations" className="py-12 relative">
          <div className="container">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full glass-light text-accent text-xs font-bold tracking-widest mb-4">
                OPERATIONS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                Core Business Operations
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Retail Supply Chain",
                  desc: "Field representatives visit shops, capture orders, monitor inventory, and support consistent shelf availability.",
                },
                {
                  title: "Wholesale Fulfillment",
                  desc: "Bulk inventory is supplied to smaller wholesalers and general stores in Chakwal at company-regulated rates.",
                },
                {
                  title: "Inventory And Security",
                  desc: "Warehouse stock is received from PTC-linked production sources and stored under controlled handling conditions.",
                },
                {
                  title: "Trade Program Support",
                  desc: "Retail engagement programs are implemented with performance-linked incentives and display standards.",
                },
              ].map((op, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.03, translateY: -4 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                  className="glass rounded-3xl p-8"
                >
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm">
                      {i + 1}
                    </span>
                    {op.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed font-medium">
                    {op.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="price-board" className="py-12 relative">
          <div className="container">
            <div className="glass-strong rounded-[2.5rem] p-6 sm:p-10">
              <div className="mb-10 text-center">
                <div className="inline-block px-4 py-1.5 rounded-full glass-light text-accent text-xs font-bold tracking-widest mb-4">
                  PRICE CATALOG
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
                  Official Price Board
                </h2>
                <p className="text-foreground/80 max-w-2xl mx-auto font-medium">
                  Cigarettes and Velo rates in PKR. All figures are regulated
                  wholesale & retail prices.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50 w-5 h-5" />
                  <Input
                    placeholder="Search brand (e.g., Dunhill, Velo)"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="pl-12 h-14 bg-white/40 border-white/50 rounded-2xl text-base font-medium shadow-inner"
                  />
                </div>
                <Select
                  value={categoryFilter}
                  onValueChange={setCategoryFilter}
                >
                  <SelectTrigger className="w-full md:w-56 h-14 bg-white/40 border-white/50 rounded-2xl font-medium shadow-inner">
                    <Filter className="w-4 h-4 mr-2 text-foreground/50" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-white/50 bg-white/90 backdrop-blur-xl">
                    <SelectItem value="all">All categories</SelectItem>
                    <SelectItem value="cigarettes">Cigarettes</SelectItem>
                    <SelectItem value="velo">Velo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Visible SKUs", value: stats.visibleSkus },
                  { label: "Avg Rate", value: stats.averageRate },
                  { label: "Highest", value: stats.highestRate },
                  { label: "Lowest", value: stats.lowestRate },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, translateY: -4 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="glass-light rounded-2xl p-5 text-center"
                  >
                    <div className="text-xl font-bold glow-orange mb-1 truncate px-2">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-foreground/60 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/40 glass-light overflow-hidden">
                {/* Desktop Table */}
                <div className="overflow-x-auto hidden md:block">
                  <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="p-4 font-semibold text-sm">Brand</th>
                        <th className="p-4 font-semibold text-sm">Category</th>
                        <th className="p-4 font-semibold text-sm text-right">
                          Outer Rate
                        </th>
                        <th className="p-4 font-semibold text-sm text-right">
                          Rate
                        </th>
                        <th className="p-4 font-semibold text-sm text-right">
                          WS Filer
                        </th>
                        <th className="p-4 font-semibold text-sm text-right">
                          WS Non Filer
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/20">
                      {filteredData.map((item, i) => (
                        <motion.tr
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-20px" }}
                          transition={{ duration: 0.3, delay: Math.min(i * 0.05, 0.5) }}
                          className="hover:bg-white/20 transition-colors"
                        >
                          <td className="p-4 font-bold text-primary">
                            {item.brand}
                          </td>
                          <td className="p-4">
                            <span className="pill-3d !py-1 !text-xs">
                              {item.category}
                            </span>
                          </td>
                          <td className="p-4 text-right font-medium text-foreground/80">
                            {getOuterRate(item)}
                          </td>
                          <td className="p-4 text-right font-bold glow-orange">
                            {formatWholeNumber(item.rate)}
                          </td>
                          <td className="p-4 text-right font-medium text-foreground/80">
                            {item.wsFiler}
                          </td>
                          <td className="p-4 text-right font-medium text-foreground/80">
                            {item.wsNonFiler}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden flex flex-col divide-y divide-white/20">
                  {filteredData.map((item, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{ duration: 0.3, delay: Math.min(i * 0.05, 0.5) }}
                      className="p-4 flex flex-col gap-3 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-primary text-base">{item.brand}</h4>
                          <span className="pill-3d !py-0.5 !px-2 !text-[10px] mt-2 inline-block">{item.category}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-foreground/50 uppercase tracking-wider">Rate</div>
                          <div className="font-bold glow-orange text-lg">{formatWholeNumber(item.rate)}</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 mt-1 pt-3 border-t border-white/10">
                        <div>
                          <div className="text-[10px] uppercase font-bold text-foreground/50 mb-1">Outer</div>
                          <div className="text-sm font-semibold text-foreground/80">{getOuterRate(item)}</div>
                        </div>
                        <div>
                          <div className="text-[10px] uppercase font-bold text-foreground/50 mb-1">WS Filer</div>
                          <div className="text-sm font-semibold text-foreground/80">{item.wsFiler}</div>
                        </div>
                        <div>
                          <div className="text-[10px] uppercase font-bold text-foreground/50 mb-1">WS Non-Filer</div>
                          <div className="text-sm font-semibold text-foreground/80">{item.wsNonFiler}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-12 relative">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="glass rounded-[2.5rem] p-10 text-center max-w-4xl mx-auto"
            >
              <div className="inline-block px-4 py-1.5 rounded-full glass-light text-accent text-xs font-bold tracking-widest mb-6">
                BRAND PORTFOLIO
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                Major PTC-Owned Lines Supported
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Dunhill",
                  "Benson & Hedges",
                  "John Player",
                  "Gold Leaf",
                  "Capstan",
                  "Embassy",
                  "Lucky Strike",
                  "Velo",
                ].map((brand, i) => (
                  <motion.span
                    key={brand}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1.1 }}
                    whileHover={{ scale: 1.2, rotate: -2 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="pill-3d !text-sm !px-6 !py-2 !font-bold m-2"
                  >
                    {brand}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-16 relative">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="glass-strong rounded-[3rem] p-10 sm:p-16 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="grid md:grid-cols-2 gap-16 relative z-10">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
                    Get in Touch
                  </h2>
                  <div className="space-y-8">
                    <div className="flex gap-5 items-start">
                      <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center shrink-0 shadow-sm">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground/60 uppercase tracking-widest mb-1">
                          Location
                        </p>
                        <p className="text-lg font-semibold text-primary">
                          Mohallah Eid Gah, Chakwal, Pakistan
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5 items-start">
                      <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center shrink-0 shadow-sm">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground/60 uppercase tracking-widest mb-1">
                          Phone
                        </p>
                        <a
                          href="tel:+92543669062"
                          className="text-xl font-bold glow-orange hover:opacity-80 transition-opacity"
                        >
                          +92 543 669062
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Business Hours
                  </h3>
                  <div className="space-y-4">
                    {[
                      { day: "Mon - Thu", hours: "7:30 AM - 7:30 PM" },
                      { day: "Friday", hours: "7:00 AM - 5:00 PM" },
                      { day: "Saturday", hours: "7:30 AM - 7:30 PM" },
                      { day: "Sunday", hours: "Closed" },
                    ].map((s, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center p-4 rounded-2xl glass-light"
                      >
                        <span className="font-bold text-primary">{s.day}</span>
                        <span className="font-medium text-foreground/80">
                          {s.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="py-8 text-center text-foreground/60 font-medium">
          <p>Muslim Traders | Official PTC Distributor Operations</p>
        </footer>
      </div>
    </div>
  );
}
