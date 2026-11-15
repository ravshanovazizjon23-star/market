import React, { useState } from 'react';
import { 
  IconX, 
  IconTrash, 
  IconPlus, 
  IconMinus, 
  IconCart, 
  IconTag, 
  IconCheck, 
  IconSparkles 
} from './Icons';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  onProceedToCheckout
}) {
  if (!isOpen) return null;

  const [promoInput, setPromoInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoError, setPromoError] = useState('');

  // Calculations
  const rawSubtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const promoDiscountAmount = appliedPromo ? Math.round(rawSubtotal * appliedPromo.percent / 100) : 0;
  const finalTotal = Math.max(0, rawSubtotal - promoDiscountAmount);

  const handleApplyPromo = () => {
    setPromoError('');
    const code = promoInput.trim().toUpperCase();
    if (code === 'BLACK10' || code === 'BLACK' || code === 'UZUM') {
      setAppliedPromo({ code, percent: 10 });
      setPromoInput('');
    } else {
      setPromoError('Bunday promokod topilmadi. (Sinab ko\'ring: BLACK10)');
    }
  };

  return (
    <div className="cart-drawer-overlay" onClick={onClose}>
      <div className="cart-drawer animate-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-header">
          <div className="cart-title-row">
            <IconCart size={22} style={{ color: '#3b82f6' }} />
            <span>Savatcha ({cartItems.reduce((sum, i) => sum + i.quantity, 0)})</span>
          </div>
          <button className="modal-close-btn" style={{ position: 'static' }} onClick={onClose}>
            <IconX size={20} />
          </button>
        </div>

        {/* Items List */}
        {cartItems.length === 0 ? (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 30, textAlign: 'center' }}>
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(59,130,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa', marginBottom: 16 }}>
              <IconCart size={36} />
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: '#f8fafc' }}>
              Savatingiz hozircha bo'sh
            </h3>
            <p style={{ color: '#94a3b8', fontSize: 13, marginBottom: 24, maxWidth: 280 }}>
              Katalogimizdan kerakli mahsulotlarni tanlang va qulay xarid qiling!
            </p>
            <button 
              className="slide-action-btn"
              onClick={onClose}
              style={{ fontSize: 14, padding: '10px 24px' }}
            >
              Xarid qilishni boshlash
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items-body">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 6 }}>
                <span style={{ fontSize: 12, color: '#94a3b8' }}>Buyurtmadagi mahsulotlar</span>
                <button 
                  onClick={onClearCart}
                  style={{ fontSize: 12, color: '#ef4444', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}
                >
                  <IconTrash size={13} />
                  <span>Tozalash</span>
                </button>
              </div>

              {cartItems.map(({ product, quantity }) => (
                <div key={product.id} className="cart-item-card">
                  <img src={product.images[0]} alt={product.name} className="cart-item-img" />
                  
                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{product.name}</h4>
                    <div className="cart-item-price">
                      {(product.price * quantity).toLocaleString('uz-UZ')} so'm
                    </div>

                    <div className="cart-item-actions">
                      <div className="cart-qty-control">
                        <button 
                          className="cart-qty-btn"
                          onClick={() => onUpdateQty(product.id, quantity - 1)}
                        >
                          <IconMinus size={13} />
                        </button>
                        <span className="cart-qty-number">{quantity}</span>
                        <button 
                          className="cart-qty-btn"
                          onClick={() => onUpdateQty(product.id, quantity + 1)}
                        >
                          <IconPlus size={13} />
                        </button>
                      </div>

                      <button 
                        className="cart-delete-btn"
                        onClick={() => onRemoveItem(product.id)}
                        title="O'chirish"
                      >
                        <IconTrash size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Promo Code section */}
            <div className="promo-box">
              <IconTag size={18} style={{ color: '#60a5fa', alignSelf: 'center' }} />
              <input 
                type="text" 
                className="promo-input" 
                placeholder="Promokod (masalan: BLACK10)"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleApplyPromo()}
              />
              <button className="promo-btn" onClick={handleApplyPromo}>
                Qo'llash
              </button>
            </div>
            {promoError && (
              <div style={{ color: '#ef4444', fontSize: 12, padding: '0 24px 8px 24px' }}>
                {promoError}
              </div>
            )}
            {appliedPromo && (
              <div style={{ color: '#10b981', fontSize: 12, fontWeight: 600, padding: '0 24px 8px 24px', display: 'flex', alignItems: 'center', gap: 6 }}>
                <IconCheck size={14} /> Promokod qo'llanildi: {appliedPromo.code} (-{appliedPromo.percent}%)
              </div>
            )}

            {/* Cart Footer */}
            <div className="cart-footer">
              <div className="cart-summary-row">
                <span>Tovarlar summasi:</span>
                <span>{rawSubtotal.toLocaleString('uz-UZ')} so'm</span>
              </div>
              {appliedPromo && (
                <div className="cart-summary-row" style={{ color: '#10b981' }}>
                  <span>Chegirma ({appliedPromo.code}):</span>
                  <span>-{promoDiscountAmount.toLocaleString('uz-UZ')} so'm</span>
                </div>
              )}
              <div className="cart-summary-row">
                <span>Yetkazib berish (1 kun):</span>
                <span style={{ color: '#10b981', fontWeight: 700 }}>BEPUL</span>
              </div>

              <div className="cart-total-row">
                <span>Jami to'lov:</span>
                <span className="cart-total-val">{finalTotal.toLocaleString('uz-UZ')} so'm</span>
              </div>

              <button 
                className="checkout-btn"
                onClick={() => {
                  onClose();
                  onProceedToCheckout({
                    subtotal: rawSubtotal,
                    discount: promoDiscountAmount,
                    total: finalTotal,
                    appliedPromo: appliedPromo ? appliedPromo.code : null
                  });
                }}
              >
                <span>Buyurtmani rasmiylashtirish</span>
                <IconSparkles size={18} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
