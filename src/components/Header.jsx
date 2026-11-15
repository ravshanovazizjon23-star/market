import React, { useState, useRef, useEffect } from 'react';
import { 
  IconSearch, 
  IconCart, 
  IconHeart, 
  IconUser, 
  IconMenu, 
  IconX, 
  IconMapPin, 
  IconPhone, 
  IconSparkles,
  IconChevronRight
} from './Icons';
import { CATEGORIES, CITIES } from '../data/products';

export default function Header({ 
  cartCount, 
  favoritesCount, 
  selectedCategory, 
  onSelectCategory, 
  searchTerm, 
  onSearchChange,
  onOpenCart,
  onOpenFavorites,
  onProductClick,
  allProducts,
  onOpenAuth
}) {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Toshkent shahri");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef(null);

  // Close catalog and search dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchResults = searchTerm.trim().length > 1
    ? allProducts.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 5)
    : [];

  return (
    <header>
      {/* 1. TOP BAR */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-bar-left">
            <div className="top-link">
              <IconMapPin size={15} />
              <span>Shahar:</span>
              <select 
                className="city-select"
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                {CITIES.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
            <div className="highlight-badge">
              ⚡ Yetkazib berish: 1 kun ichida bepul!
            </div>
          </div>

          <div className="top-bar-right">
            <a href="tel:+998712000020" className="top-link">
              <IconPhone size={14} />
              <span>+998 (71) 200-00-20</span>
            </a>
            <span className="top-link" onClick={() => onOpenAuth('orders')}>
              Buyurtmalarim
            </span>
            <span className="top-link">
              O'zbekcha / UZ
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <div className="main-header">
        <div className="header-inner">
          {/* Logo */}
          <div className="logo-container" onClick={() => onSelectCategory('all')}>
            <div className="logo-icon-box">
              BM
            </div>
            <div className="logo-text-group">
              <span className="logo-title">BLACK MARKET</span>
              <span className="logo-tagline">Premium E-Commerce</span>
            </div>
          </div>

          {/* Catalog Button */}
          <button 
            className={`catalog-btn ${isCatalogOpen ? 'active' : ''}`}
            onClick={() => setIsCatalogOpen(!isCatalogOpen)}
          >
            {isCatalogOpen ? <IconX size={18} /> : <IconMenu size={18} />}
            <span>Katalog</span>
          </button>

          {/* Search Box */}
          <div className="search-wrapper" ref={searchRef}>
            <div className="search-box">
              <span className="search-icon-left">
                <IconSearch size={18} />
              </span>
              <input 
                type="text"
                className="search-input"
                placeholder="Mahsulotlar, telefonlar, kiyimlar, noutbuklar bo'yicha qidiring..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
              />
              <button className="search-submit-btn">
                Topish
              </button>
            </div>

            {/* Live Search Suggestions Dropdown */}
            {isSearchFocused && searchResults.length > 0 && (
              <div className="search-dropdown animate-fade">
                <div className="search-results-list">
                  {searchResults.map(prod => (
                    <div 
                      key={prod.id} 
                      className="search-result-item"
                      onClick={() => {
                        onProductClick(prod);
                        setIsSearchFocused(false);
                      }}
                    >
                      <img src={prod.images[0]} alt={prod.name} className="search-thumb" />
                      <div className="search-res-info">
                        <div className="search-res-title">{prod.name}</div>
                        <div className="search-res-price">{prod.price.toLocaleString('uz-UZ')} so'm</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Header Action Buttons */}
          <div className="header-actions">
            {/* Kirish / Profil */}
            <button className="header-action-btn" onClick={() => onOpenAuth('login')}>
              <div className="action-icon-wrap">
                <IconUser size={22} />
              </div>
              <span className="action-label">Kirish</span>
            </button>

            {/* Sevimlilar */}
            <button className="header-action-btn" onClick={onOpenFavorites}>
              <div className="action-icon-wrap">
                <IconHeart size={22} fill={favoritesCount > 0 ? "#ef4444" : "none"} />
                {favoritesCount > 0 && (
                  <span className="action-badge">{favoritesCount}</span>
                )}
              </div>
              <span className="action-label">Sevimlilar</span>
            </button>

            {/* Savat */}
            <button className="header-action-btn" onClick={onOpenCart}>
              <div className="action-icon-wrap">
                <IconCart size={22} />
                {cartCount > 0 && (
                  <span className="action-badge">{cartCount}</span>
                )}
              </div>
              <span className="action-label">Savat</span>
            </button>
          </div>
        </div>
      </div>

      {/* Catalog Dropdown Menu Modal */}
      {isCatalogOpen && (
        <div className="catalog-overlay" onClick={() => setIsCatalogOpen(false)}>
          <div className="catalog-dropdown-panel animate-modal" onClick={e => e.stopPropagation()}>
            <div style={{ padding: '8px 12px', borderBottom: '1px solid rgba(59,130,246,0.15)', marginBottom: 8, fontSize: 13, fontWeight: 700, color: '#60a5fa' }}>
              Barcha kategoriyalar
            </div>
            {CATEGORIES.map(cat => (
              <div 
                key={cat.id} 
                className="catalog-item-row"
                onClick={() => {
                  onSelectCategory(cat.id);
                  setIsCatalogOpen(false);
                }}
              >
                <div className="catalog-item-left">
                  <IconSparkles size={16} />
                  <span>{cat.name}</span>
                </div>
                <IconChevronRight size={16} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. SUB NAVIGATION (QUICK CATEGORY CHIPS) */}
      <nav className="sub-nav">
        <div className="sub-nav-inner">
          <button 
            className={`nav-chip nav-chip-special ${selectedCategory === 'sale' ? 'active' : ''}`}
            onClick={() => onSelectCategory('sale')}
          >
            🔥 Katta Aksiya -50% gacha
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`nav-chip ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
          <button 
            className="nav-chip"
            onClick={() => onSelectCategory('installment')}
          >
            💳 0% Muddatli to'lov
          </button>
        </div>
      </nav>
    </header>
  );
}
