import { useState, useMemo } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
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
import Tilt3D from "@/components/Tilt3D";
import { useTheme } from "@/contexts/ThemeContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/* The Merchant's Ledger — Skeuomorphic Design
   - Aged parchment desk, stitched leather, polished brass
   - Embossed lettering, tactile 3D buttons, ledger price board
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

/* Brass rule lines meeting a diamond stud — heritage section divider */
function OrnamentDivider() {
  return (
    <div className="ornament-divider" aria-hidden="true">
      <span className="ornament-diamond" />
    </div>
  );
}

/* Brass corner rivets for raised panels */
function Rivets() {
  return (
    <>
      <span className="rivet top-3 left-3" aria-hidden="true" />
      <span className="rivet top-3 right-3" aria-hidden="true" />
      <span className="rivet bottom-3 left-3" aria-hidden="true" />
      <span className="rivet bottom-3 right-3" aria-hidden="true" />
    </>
  );
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, switchable } = useTheme();

  // Brass scroll-progress rail along the bottom of the leather nav
  const { scrollYProgress } = useScroll();
  const railProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
  });

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
      {/* Paper grain over the whole desk */}
      <div className="grain-overlay" aria-hidden="true" />

      <div className="relative z-10">
        {/* ── Leather nav rail ─────────────────────────── */}
        <nav className="sticky top-0 z-50 leather stitched rounded-b-2xl mx-2 sm:mx-4">
          <div className="container flex items-center justify-between py-3 px-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="coin relative w-11 h-11 shrink-0">
                <span className="font-black text-base tracking-tight">MT</span>
              </div>
              <h1 className="text-xl font-bold engraved-light tracking-wide">
                Muslim Traders
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-6 md:flex">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-bold engraved-light hover:text-amber-300 transition-colors"
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
                  className="coin relative h-11 w-11 rounded-full border-0 hover:brightness-110 text-[#4a3005] hover:text-[#4a3005]"
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
                aria-label="Toggle Menu"
                className="coin relative h-11 w-11 md:hidden rounded-full text-[#4a3005] hover:text-[#4a3005] hover:brightness-110 hover:bg-transparent"
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
            className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out relative z-10 ${isMobileMenuOpen ? "max-h-[70vh] opacity-100 border-t border-amber-200/20" : "max-h-0 opacity-0"}`}
          >
            <div className="container flex max-h-[70vh] flex-col overflow-y-auto py-3 px-4">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-bold engraved-light transition-colors hover:bg-black/20 hover:text-amber-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="scroll-rail" aria-hidden="true">
            <motion.div
              className="scroll-rail-fill"
              style={{ scaleX: railProgress }}
            />
          </div>
        </nav>

        {/* ── Hero ─────────────────────────────────────── */}
        <section className="relative container py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="plaque sheen mb-6">
              EST. 1988 · CHAKWAL, PAKISTAN
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black embossed mb-6 leading-tight">
              A Legacy of <span className="brass-text italic">Trust</span>
            </h1>
            <p className="text-lg text-foreground/85 mb-8 leading-relaxed max-w-lg font-medium">
              Muslim Traders has built a reliable distribution network through
              long-term partnerships and disciplined market service for over
              three decades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#portfolio"
                whileTap={{ scale: 0.97 }}
                className="btn-3d inline-flex items-center justify-center"
              >
                View Portfolio
              </motion.a>
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.97 }}
                className="btn-3d-outline inline-flex items-center justify-center"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-10 persp"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {/* Floating 3D brass medallion */}
            <motion.div
              className="coin-stage relative w-56 sm:w-64 md:w-72"
              initial={{ opacity: 0, scale: 0.7, rotateY: -60 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: "easeOut" }}
            >
              <div className="coin-3d">
                <div className="coin-face">
                  <span className="coin-monogram">MT</span>
                  <span className="coin-caption">EST · 1988</span>
                </div>
              </div>
              <div className="coin-shadow" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <Tilt3D
                max={10}
                className="panel-raised rounded-2xl p-6 relative overflow-hidden"
              >
                <Rivets />
                <div className="text-4xl sm:text-5xl font-black brass-text mb-2 font-serif">
                  375
                </div>
                <p className="text-foreground/85 font-semibold">
                  Exclusive distributors in the PTC network
                </p>
              </Tilt3D>
              <Tilt3D
                max={10}
                className="panel-raised rounded-2xl p-6 relative overflow-hidden"
              >
                <Rivets />
                <div className="text-4xl sm:text-5xl font-black brass-text mb-2 font-serif">
                  400,000+
                </div>
                <p className="text-foreground/85 font-semibold">
                  Retail stores supported across Pakistan
                </p>
              </Tilt3D>
            </div>
          </motion.div>
        </section>

        {/* ── Journey timeline ─────────────────────────── */}
        <section id="journey" className="py-20 relative">
          <div className="container">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="plaque mb-4">OUR JOURNEY</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black embossed">
                Through the Decades
              </h2>
              <OrnamentDivider />
              <p className="text-foreground/85 max-w-2xl mx-auto font-medium mt-4">
                Every partnership tells a story of trust, growth, and market
                excellence.
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto py-10 persp">
              <div className="tl-line" />
              {timelineData.map((entry, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={entry.year}
                    initial={{ opacity: 0, y: 60, rotateY: isLeft ? -20 : 20 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                    className={`relative flex items-start mb-20 ${isLeft ? "flex-col md:flex-row md:pr-[50%] md:justify-end" : "flex-col md:flex-row-reverse md:pl-[50%] md:justify-end"}`}
                  >
                    <div className="absolute left-[23px] md:left-1/2 top-8 transform -translate-x-1/2 z-10">
                      <div className="seal-dot" />
                      <div className="seal-dot-pulse" />
                    </div>

                    <Tilt3D
                      max={6}
                      className={`panel-raised rounded-3xl p-6 md:p-8 max-w-md w-[calc(100%-4rem)] ml-16 md:ml-0 relative ${isLeft ? "md:mr-10" : "md:ml-10"}`}
                    >
                      <div className="flex items-baseline gap-3 mb-4">
                        <span className="text-4xl font-black brass-text font-serif">
                          {entry.year}
                        </span>
                        <span className="text-2xl text-accent/60">—</span>
                        <span className="text-2xl font-black brass-text font-serif opacity-90">
                          {entry.endYear}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold embossed mb-3">
                        {entry.business}
                      </h3>
                      <p className="text-foreground/85 mb-6 leading-relaxed text-sm">
                        {entry.detail}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {entry.brands.map(brand => (
                          <span key={brand} className="pill-3d">
                            {brand}
                          </span>
                        ))}
                      </div>
                    </Tilt3D>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Leadership plaque ────────────────────────── */}
        <section id="leadership" className="py-12 relative z-20">
          <div className="container persp">
            <motion.div
              initial={{ opacity: 0, rotateX: 18, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ transformStyle: "preserve-3d" }}
              className="max-w-4xl mx-auto"
            >
              <Tilt3D
                max={5}
                className="panel-raised panel-framed rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden"
              >
                <Rivets />
              <div className="plaque mb-6 relative z-10">LEADERSHIP</div>
              <h2 className="text-3xl md:text-4xl font-black embossed mb-6 relative z-10">
                Abdul Rauf Athar
              </h2>
              <p className="text-foreground/85 leading-relaxed text-lg font-medium relative z-10 max-w-2xl mx-auto italic font-serif">
                "Our foundation was built in 1988 on a simple promise:
                unwavering reliability. For over three decades, we have remained
                dedicated to empowering our partners and ensuring seamless
                distribution across the Chakwal region."
              </p>
                <div className="mt-8 text-sm font-bold text-foreground/60 uppercase tracking-widest relative z-10">
                  Founder & Managing Director
                </div>
                <div className="mt-8 flex justify-center relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 1.6, rotate: -12 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" }}
                    className="wax-seal"
                    aria-label="Muslim Traders seal of trust, established 1988"
                    role="img"
                  >
                    MT
                  </motion.div>
                </div>
              </Tilt3D>
            </motion.div>
          </div>
        </section>

        {/* ── Operations ───────────────────────────────── */}
        <section id="operations" className="py-20 relative">
          <div className="container">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="plaque mb-4">OPERATIONS</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black embossed">
                Core Business Operations
              </h2>
              <OrnamentDivider />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 persp">
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
                  initial={{ opacity: 0, y: 40, rotateX: 16 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Tilt3D
                    max={8}
                    className="panel-raised rounded-3xl p-8 relative h-full"
                  >
                    <Rivets />
                    <h3 className="text-xl font-bold embossed mb-4 flex items-center gap-3">
                      <span className="coin relative w-9 h-9 shrink-0 text-sm font-black">
                        {i + 1}
                      </span>
                      {op.title}
                    </h3>
                    <p className="text-foreground/85 leading-relaxed font-medium">
                      {op.desc}
                    </p>
                  </Tilt3D>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Ledger price board ───────────────────────── */}
        <section id="price-board" className="py-20 relative">
          <div className="container">
            <div className="leather stitched rounded-[2.5rem] p-3 sm:p-5">
              <div className="panel-raised rounded-[2rem] p-6 sm:p-10 relative z-10">
                <div className="mb-10 text-center">
                  <div className="plaque mb-4">PRICE CATALOG</div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black embossed">
                    Official Price Board
                  </h2>
                  <OrnamentDivider />
                  <p className="text-foreground/85 max-w-2xl mx-auto font-medium mt-4">
                    Cigarettes and Velo rates in PKR. All figures are regulated
                    wholesale & retail prices.
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mb-8">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50 w-5 h-5 z-10" />
                    <Input
                      placeholder="Search brand (e.g., Dunhill, Velo)"
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                      className="inset-well pl-12 h-14 rounded-2xl text-base font-medium border-0"
                    />
                  </div>
                  <Select
                    value={categoryFilter}
                    onValueChange={setCategoryFilter}
                  >
                    <SelectTrigger className="inset-well w-full md:w-56 !h-14 rounded-2xl font-medium border-0">
                      <Filter className="w-4 h-4 mr-2 text-foreground/50" />
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-border bg-popover shadow-xl">
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
                      whileHover={{ translateY: -3 }}
                      initial={{ opacity: 0, scale: 0.94 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="inset-well rounded-2xl p-5 text-center"
                    >
                      <div className="text-xl font-black brass-text font-serif mb-1 truncate px-2">
                        {stat.value}
                      </div>
                      <div className="text-xs font-bold text-foreground/65 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="rounded-2xl border border-border/80 inset-well overflow-hidden">
                  {/* Empty ledger page */}
                  {filteredData.length === 0 && (
                    <div className="p-12 sm:p-16 text-center flex flex-col items-center gap-4">
                      <div className="coin relative w-14 h-14">
                        <Search className="w-6 h-6" />
                      </div>
                      <p className="text-lg font-bold embossed">
                        No entries found in the ledger
                      </p>
                      <p className="text-sm text-foreground/70 font-medium max-w-sm">
                        No brands match "{searchTerm}"
                        {categoryFilter !== "all"
                          ? ` in ${categoryFilter}`
                          : ""}
                        . Try a different spelling or clear the filters.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSearchTerm("");
                          setCategoryFilter("all");
                        }}
                        className="btn-3d-outline mt-2 !px-6 !py-2.5"
                      >
                        Clear Filters
                      </button>
                    </div>
                  )}

                  {/* Desktop Table */}
                  <div
                    className={`overflow-x-auto ${filteredData.length === 0 ? "hidden" : "hidden md:block"}`}
                  >
                    <table className="w-full text-left border-collapse min-w-[800px]">
                      <thead>
                        <tr className="ledger-head">
                          <th className="p-4 font-bold text-sm tracking-wide">
                            Brand
                          </th>
                          <th className="p-4 font-bold text-sm tracking-wide">
                            Category
                          </th>
                          <th className="p-4 font-bold text-sm tracking-wide text-right">
                            Outer Rate
                          </th>
                          <th className="p-4 font-bold text-sm tracking-wide text-right">
                            Rate
                          </th>
                          <th className="p-4 font-bold text-sm tracking-wide text-right">
                            WS Filer
                          </th>
                          <th className="p-4 font-bold text-sm tracking-wide text-right">
                            WS Non Filer
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData.map((item, i) => (
                          <tr
                            key={i}
                            className="ledger-row"
                          >
                            <td className="p-4 font-bold embossed">
                              {item.brand}
                            </td>
                            <td className="p-4">
                              <span
                                className={`pill-3d !py-1 !text-xs ${item.category === "Velo" ? "pill-verdigris" : ""}`}
                              >
                                {item.category}
                              </span>
                            </td>
                            <td className="p-4 text-right font-medium text-foreground/85 tabular-nums">
                              {getOuterRate(item)}
                            </td>
                            <td className="p-4 text-right font-black brass-text font-serif tabular-nums">
                              {formatWholeNumber(item.rate)}
                            </td>
                            <td className="p-4 text-right font-medium text-foreground/85 tabular-nums">
                              {item.wsFiler}
                            </td>
                            <td className="p-4 text-right font-medium text-foreground/85 tabular-nums">
                              {item.wsNonFiler}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Cards */}
                  <div
                    className={`flex-col divide-y divide-border/60 ${filteredData.length === 0 ? "hidden" : "flex md:hidden"}`}
                  >
                    {filteredData.map((item, i) => (
                      <div
                        key={i}
                        className="p-4 flex flex-col gap-3"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold embossed text-base">
                              {item.brand}
                            </h4>
                            <span
                              className={`pill-3d !py-0.5 !px-2 !text-[10px] mt-2 inline-block ${item.category === "Velo" ? "pill-verdigris" : ""}`}
                            >
                              {item.category}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-bold text-foreground/55 uppercase tracking-wider">
                              Rate
                            </div>
                            <div className="font-black brass-text font-serif text-lg tabular-nums">
                              {formatWholeNumber(item.rate)}
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mt-1 pt-3 border-t border-border/50">
                          <div>
                            <div className="text-[10px] uppercase font-bold text-foreground/55 mb-1">
                              Outer
                            </div>
                            <div className="text-sm font-semibold text-foreground/85 tabular-nums">
                              {getOuterRate(item)}
                            </div>
                          </div>
                          <div>
                            <div className="text-[10px] uppercase font-bold text-foreground/55 mb-1">
                              WS Filer
                            </div>
                            <div className="text-sm font-semibold text-foreground/85 tabular-nums">
                              {item.wsFiler}
                            </div>
                          </div>
                          <div>
                            <div className="text-[10px] uppercase font-bold text-foreground/55 mb-1">
                              WS Non-Filer
                            </div>
                            <div className="text-sm font-semibold text-foreground/85 tabular-nums">
                              {item.wsNonFiler}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Brand portfolio ──────────────────────────── */}
        <section id="portfolio" className="py-20 relative">
          <div className="container persp">
            <motion.div
              initial={{ opacity: 0, rotateX: 14, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{ transformStyle: "preserve-3d" }}
              className="panel-raised panel-framed rounded-[2rem] p-10 text-center max-w-4xl mx-auto relative"
            >
              <Rivets />
              <div className="plaque mb-6">BRAND PORTFOLIO</div>
              <h2 className="text-3xl md:text-4xl font-black embossed">
                Major PTC-Owned Lines Supported
              </h2>
              <div className="mb-8">
                <OrnamentDivider />
              </div>
              <div className="flex flex-wrap justify-center gap-4 persp">
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
                    initial={{ opacity: 0, rotateY: 92, scale: 0.7 }}
                    whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                    whileHover={{ scale: 1.08, rotateZ: -1.5, y: -3 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="pill-3d !text-sm !px-6 !py-2.5 !font-bold m-1"
                  >
                    {brand}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────── */}
        <section id="contact" className="py-24 relative">
          <div className="container persp">
            <motion.div
              initial={{ opacity: 0, rotateX: 12, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{ transformStyle: "preserve-3d" }}
              className="panel-raised rounded-[2.5rem] p-10 sm:p-16 relative overflow-hidden"
            >
              <Rivets />
              <div className="grid md:grid-cols-2 gap-16 relative z-10">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black embossed mb-8">
                    Get in Touch
                  </h2>
                  <div className="space-y-8">
                    <div className="flex gap-5 items-start">
                      <div className="coin relative w-12 h-12 rounded-full shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground/60 uppercase tracking-widest mb-1">
                          Location
                        </p>
                        <p className="text-lg font-semibold embossed">
                          Mohallah Eid Gah, Chakwal, Pakistan
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5 items-start">
                      <div className="coin relative w-12 h-12 rounded-full shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground/60 uppercase tracking-widest mb-1">
                          Phone
                        </p>
                        <a
                          href="tel:+92543669062"
                          className="text-xl font-black brass-text font-serif hover:opacity-80 transition-opacity"
                        >
                          +92 543 669062
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold embossed mb-6">
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
                        className="flex justify-between items-center p-4 rounded-2xl inset-well"
                      >
                        <span className="font-bold embossed">{s.day}</span>
                        <span className="font-medium text-foreground/85">
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

        <footer className="leather stitched rounded-t-3xl mx-2 sm:mx-4 mt-8">
          <div className="container relative z-10 py-10 px-6 flex flex-col items-center gap-4 text-center">
            <div className="coin relative w-12 h-12">
              <span className="font-black text-sm">MT</span>
            </div>
            <p className="engraved-light font-bold text-lg font-serif">
              Muslim Traders
            </p>
            <p className="engraved-light text-sm font-medium opacity-80">
              Official PTC Distributor Operations · Mohallah Eid Gah, Chakwal
            </p>
            <div className="flex items-center gap-6 mt-1">
              <a
                href="tel:+92543669062"
                className="engraved-light text-sm font-bold hover:text-amber-300 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                +92 543 669062
              </a>
              <a
                href="#journey"
                className="engraved-light text-sm font-bold hover:text-amber-300 transition-colors inline-flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Since 1988
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
