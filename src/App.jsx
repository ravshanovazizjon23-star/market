import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import { PRODUCTS, CATEGORIES } from './data/products';
import Header from './components/Header';
import BannerSlider from './components/BannerSlider';
import Advantages from './components/Advantages';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import FavoritesModal from './components/FavoritesModal';
import CheckoutModal from './components/CheckoutModal';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { IconSparkles, IconFilter } from './components/Icons';

export default function App() {
  // 1. Persistent States from LocalStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('bm_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('bm_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [userOrders, setUserOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('bm_orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save changes to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('bm_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('bm_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem('bm_orders', JSON.stringify(userOrders));
    } catch (e) {
      console.error(e);
    }
  }, [userOrders]);

  // 2. Navigation & UI States
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutData, setCheckoutData] = useState(null);
  const [detailProduct, setDetailProduct] = useState(null);
  const [authModalState, setAuthModalState] = useState({ isOpen: false, mode: 'login' });
  const [toasts, setToasts] = useState([]);

  // Toast notification helper
  const addToast = (message) => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 2800);
  };

  // Cart operations
  const handleAddToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    addToast(`"${product.name.slice(0, 24)}..." savatchaga qo'shildi!`);
  };

  const handleUpdateCartQty = (productId, newQty) => {
    if (newQty <= 0) {
      setCart(prev => prev.filter(item => item.product.id !== productId));
    } else {
      setCart(prev =>
        prev.map(item =>
          item.product.id === productId ? { ...item, quantity: newQty } : item
        )
      );
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Favorites operations
  const handleToggleFavorite = (product) => {
    setFavorites(prev => {
      const exists = prev.some(p => p.id === product.id);
      if (exists) {
        addToast(`"${product.name.slice(0, 24)}..." sevimlilardan olib tashlandi`);
        return prev.filter(p => p.id !== product.id);
      } else {
        addToast(`"${product.name.slice(0, 24)}..." sevimlilarga saqlandi!`);
        return [...prev, product];
      }
    });
  };

  const handleRemoveFavorite = (productId) => {
    setFavorites(prev => prev.filter(p => p.id !== productId));
  };

  const handleClearFavorites = () => {
    setFavorites([]);
  };

  // Fast Checkout
  const handleBuyNow = (product) => {
    handleAddToCart(product);
    setCheckoutData({
      subtotal: product.price,
      discount: 0,
      total: product.price,
      appliedPromo: null
    });
    setIsCheckoutOpen(true);
  };

  const handleProceedToCheckout = (data) => {
    setCheckoutData(data);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = () => {
    const newOrder = {
      id: Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString('uz-UZ'),
      itemsCount: cart.length,
      total: checkoutData ? checkoutData.total : 0
    };
    setUserOrders(prev => [newOrder, ...prev]);
    setCart([]);
    addToast("Buyurtmangiz muvaffaqiyatli qabul qilindi!");
  };

  // Filter & Search Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(prod => {
      // 1. Category Filter
      if (selectedCategory === 'sale') {
        if (!prod.discount || prod.discount <= 0) return false;
      } else if (selectedCategory === 'installment') {
        if (!prod.installmentPrice) return false;
      } else if (selectedCategory !== 'all') {
        if (prod.category !== selectedCategory) return false;
      }

      // 2. Search Term Filter
      if (searchTerm.trim().length > 0) {
        const query = searchTerm.toLowerCase();
        const matchesName = prod.name.toLowerCase().includes(query);
        const matchesCat = prod.categoryName.toLowerCase().includes(query);
        const matchesDesc = prod.description.toLowerCase().includes(query);
        if (!matchesName && !matchesCat && !matchesDesc) return false;
      }

      return true;
    }).sort((a, b) => {
      // 3. Sorting
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'discount') return (b.discount || 0) - (a.discount || 0);
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.reviewsCount || 0) - (a.reviewsCount || 0); // popular
    });
  }, [selectedCategory, searchTerm, sortBy]);

  const currentCategoryName = useMemo(() => {
    if (selectedCategory === 'sale') return 'Katta chegirmalar va aksiyalar';
    if (selectedCategory === 'installment') return "0% Muddatli to'lov mahsulotlari";
    const found = CATEGORIES.find(c => c.id === selectedCategory);
    return found ? found.name : 'Barcha mahsulotlar';
  }, [selectedCategory]);

  const totalCartCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="app-container">
      {/* 1. Header with TopBar, Search and Quick Nav */}
      <Header 
        cartCount={totalCartCount}
        favoritesCount={favorites.length}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setSearchTerm('');
        }}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onProductClick={(prod) => setDetailProduct(prod)}
        allProducts={PRODUCTS}
        onOpenAuth={(mode) => setAuthModalState({ isOpen: true, mode })}
      />

      <main className="main-content">
        {/* 2. Hero Banner Slider (shows when on all or sale) */}
        {(selectedCategory === 'all' || selectedCategory === 'sale') && !searchTerm && (
          <BannerSlider 
            onSelectCategory={(cat) => setSelectedCategory(cat)} 
          />
        )}

        {/* 3. Advantages Strip */}
        <Advantages />

        {/* 4. Products Catalog Section Header */}
        <div className="catalog-header">
          <div className="section-title-wrap">
            <h2 className="section-title">
              <IconSparkles size={24} style={{ color: '#3b82f6' }} />
              <span>{currentCategoryName}</span>
            </h2>
            <span className="products-count">
              ({filteredProducts.length} ta mahsulot)
            </span>
          </div>

          {/* Sorting and Filters Bar */}
          <div className="filters-bar">
            <label style={{ fontSize: 13, color: '#94a3b8', display: 'flex', alignItems: 'center', gap: 6 }}>
              <IconFilter size={15} />
              <span>Saralash:</span>
            </label>
            <select 
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="popular">Ommabopligi bo'yicha</option>
              <option value="price-asc">Avval arzonlari</option>
              <option value="price-desc">Avval qimmatlari</option>
              <option value="discount">Katta chegirmalar</option>
              <option value="rating">Yuqori reytinglilar</option>
            </select>
          </div>
        </div>

        {/* 5. Products Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: 'rgba(13,22,52,0.4)', borderRadius: 16, border: '1px solid rgba(59,130,246,0.15)' }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>
              Kechirasiz, mahsulot topilmadi
            </h3>
            <p style={{ color: '#94a3b8', fontSize: 14, marginBottom: 20 }}>
              Qidiruv so'zini o'zgartirib ko'ring yoki boshqa toifani tanlang.
            </p>
            <button 
              className="slide-action-btn"
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
              }}
            >
              Barcha mahsulotlarni ko'rish
            </button>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map(product => {
              const inCartItem = cart.find(i => i.product.id === product.id);
              const isFav = favorites.some(p => p.id === product.id);
              return (
                <ProductCard 
                  key={product.id}
                  product={product}
                  isFavorite={isFav}
                  onToggleFavorite={handleToggleFavorite}
                  cartQuantity={inCartItem ? inCartItem.quantity : 0}
                  onAddToCart={handleAddToCart}
                  onUpdateCartQty={handleUpdateCartQty}
                  onOpenDetail={setDetailProduct}
                />
              );
            })}
          </div>
        )}
      </main>

      {/* 6. Footer */}
      <Footer onSelectCategory={(cat) => setSelectedCategory(cat)} />

      {/* 7. Modals & Drawers */}
      {/* Product Detail Modal */}
      {detailProduct && (
        <ProductDetailModal 
          product={detailProduct}
          onClose={() => setDetailProduct(null)}
          isFavorite={favorites.some(p => p.id === detailProduct.id)}
          onToggleFavorite={handleToggleFavorite}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQty={handleUpdateCartQty}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Favorites Modal */}
      <FavoritesModal 
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        onRemoveFavorite={handleRemoveFavorite}
        onClearFavorites={handleClearFavorites}
        onAddToCart={handleAddToCart}
        onOpenDetail={setDetailProduct}
      />

      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        checkoutData={checkoutData}
        cartItems={cart}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Auth / Orders Modal */}
      <AuthModal 
        isOpen={authModalState.isOpen}
        onClose={() => setAuthModalState({ isOpen: false, mode: 'login' })}
        initialMode={authModalState.mode}
        userOrders={userOrders}
      />

      {/* Toast Notifications */}
      <Toast toasts={toasts} />
    </div>
  );
}
