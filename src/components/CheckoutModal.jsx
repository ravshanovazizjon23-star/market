import React, { useState } from 'react';
import { 
  IconX, 
  IconCheck, 
  IconTruck, 
  IconCreditCard, 
  IconMapPin, 
  IconPhone, 
  IconSparkles 
} from './Icons';
import { CITIES } from '../data/products';

export default function CheckoutModal({
  isOpen,
  onClose,
  checkoutData,
  cartItems,
  onOrderSuccess
}) {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [city, setCity] = useState('Toshkent shahri');
  const [address, setAddress] = useState('');
  const [deliveryType, setDeliveryType] = useState('courier'); // courier or pickup
  const [paymentMethod, setPaymentMethod] = useState('cash'); // cash, payme, click, installment
  const [comment, setComment] = useState('');
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');

  const totalAmount = checkoutData?.total || cartItems.reduce((acc, i) => acc + i.product.price * i.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim() || phone.trim().length < 9) {
      alert("Iltimos, ismingiz va to'liq telefon raqamingizni kiriting!");
      return;
    }

    const generatedId = `BM-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setIsSubmitted(true);
    onOrderSuccess();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-card checkout-modal-card animate-modal" 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Yopish">
          <IconX size={20} />
        </button>

        {!isSubmitted ? (
          <div style={{ padding: '28px 32px' }}>
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: 'inline-block', background: 'rgba(59,130,246,0.18)', color: '#60a5fa', padding: '3px 10px', borderRadius: 20, fontSize: 11, fontWeight: 700, marginBottom: 8 }}>
                TEZKOR RASMIYLASHTIRISH
              </div>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: '#ffffff' }}>
                Buyurtmani rasmiylashtirish
              </h2>
              <p style={{ fontSize: 13, color: '#94a3b8' }}>
                Buyurtmangiz 1 kun ichida belgilangan manzilga bepul yetkaziladi.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="checkout-grid">
                {/* Ism familiya */}
                <div className="form-group">
                  <label className="form-label">Ism va Familiya *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Masalan: Sardor Aliyev" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>

                {/* Telefon */}
                <div className="form-group">
                  <label className="form-label">Telefon raqam *</label>
                  <input 
                    type="tel" 
                    className="form-input" 
                    placeholder="+998 90 123 45 67" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                {/* Shahar */}
                <div className="form-group">
                  <label className="form-label">Yetkazish hududi</label>
                  <select 
                    className="form-select"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    {CITIES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Yetkazish usuli */}
                <div className="form-group">
                  <label className="form-label">Yetkazib berish turi</label>
                  <select 
                    className="form-select"
                    value={deliveryType}
                    onChange={(e) => setDeliveryType(e.target.value)}
                  >
                    <option value="courier">🚗 Kuryer orqali eshikkacha (Bepul)</option>
                    <option value="pickup">🏪 Tarqatish punktidan olib ketish (PVZ)</option>
                  </select>
                </div>

                {/* Aniq manzil */}
                <div className="form-group full-width">
                  <label className="form-label">Aniq manzil (Tuman, ko'cha, uy, xonadon) *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Masalan: Chilonzor tumani, Bunyodkor ko'chasi 42-uy, 15-xonadon" 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>

                {/* To'lov turi */}
                <div className="form-group full-width">
                  <label className="form-label">To'lov usulini tanlang</label>
                  <div className="payment-methods-grid">
                    <div 
                      className={`payment-option-card ${paymentMethod === 'cash' ? 'selected' : ''}`}
                      onClick={() => setPaymentMethod('cash')}
                    >
                      <div style={{ fontSize: 18, marginBottom: 4 }}>💵</div>
                      <div>Qabul qilganda naqd yoki karta</div>
                    </div>

                    <div 
                      className={`payment-option-card ${paymentMethod === 'payme' ? 'selected' : ''}`}
                      onClick={() => setPaymentMethod('payme')}
                    >
                      <div style={{ fontSize: 18, marginBottom: 4 }}>💳</div>
                      <div>Payme / Click Up</div>
                    </div>

                    <div 
                      className={`payment-option-card ${paymentMethod === 'installment' ? 'selected' : ''}`}
                      onClick={() => setPaymentMethod('installment')}
                    >
                      <div style={{ fontSize: 18, marginBottom: 4 }}>⚡</div>
                      <div>Muddatli to'lov (12 oy)</div>
                    </div>
                  </div>
                </div>

                {/* Buyurtmaga izoh */}
                <div className="form-group full-width">
                  <label className="form-label">Kuryer uchun qo'shimcha izoh (ixtiyoriy)</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Masalan: Domofon kodi 45, eshik oldida qo'ng'iroq qiling" 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
              </div>

              {/* Order mini summary */}
              <div style={{ background: 'rgba(13,22,52,0.6)', border: '1px solid rgba(59,130,246,0.18)', borderRadius: 12, padding: 16, marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#94a3b8', marginBottom: 6 }}>
                  <span>Buyurtmadagi tovarlar:</span>
                  <span>{cartItems.length} xil</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#94a3b8', marginBottom: 6 }}>
                  <span>Yetkazib berish xizmati:</span>
                  <span style={{ color: '#10b981', fontWeight: 700 }}>0 so'm (Bepul)</span>
                </div>
                {checkoutData?.discount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#10b981', marginBottom: 6 }}>
                    <span>Chegirma:</span>
                    <span>-{checkoutData.discount.toLocaleString('uz-UZ')} so'm</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: '#ffffff', paddingTop: 8, borderTop: '1px dashed rgba(59,130,246,0.2)' }}>
                  <span>Jami to'lov:</span>
                  <span style={{ color: '#60a5fa' }}>{totalAmount.toLocaleString('uz-UZ')} so'm</span>
                </div>
              </div>

              <button type="submit" className="checkout-btn">
                <span>Buyurtmani tasdiqlash</span>
                <IconCheck size={18} />
              </button>
            </form>
          </div>
        ) : (
          /* Muvaffaqiyatli buyurtma oynasi */
          <div className="order-success-box animate-fade">
            <div className="success-check-icon">
              <IconCheck size={40} />
            </div>
            <h2 className="success-title">Buyurtmangiz muvaffaqiyatli qabul qilindi!</h2>
            <p className="success-sub">
              Rahmat, <strong style={{ color: '#f8fafc' }}>{fullName}</strong>! Operatorimiz tez orada siz bilan bog'lanadi va buyurtmangiz tayyorlanadi.
            </p>

            <div className="receipt-box">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: 14 }}>
                <span style={{ color: '#94a3b8' }}>Buyurtma raqami:</span>
                <span style={{ color: '#60a5fa', fontWeight: 800 }}>{orderId}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: 13 }}>
                <span style={{ color: '#94a3b8' }}>Yetkazish manzili:</span>
                <span style={{ color: '#f8fafc', fontWeight: 600 }}>{city}, {address}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: 13 }}>
                <span style={{ color: '#94a3b8' }}>Telefon:</span>
                <span style={{ color: '#f8fafc', fontWeight: 600 }}>{phone}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: 13 }}>
                <span style={{ color: '#94a3b8' }}>To'lov usuli:</span>
                <span style={{ color: '#f8fafc', fontWeight: 600 }}>
                  {paymentMethod === 'cash' ? 'Qabul qilganda to\'lov' : paymentMethod === 'payme' ? 'Payme / Click' : 'Muddatli to\'lov (12 oy)'}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: 13 }}>
                <span style={{ color: '#94a3b8' }}>Kutilayotgan yetkazish:</span>
                <span style={{ color: '#10b981', fontWeight: 700 }}>Ertaga (1 kun ichida)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, borderTop: '1px dashed rgba(59,130,246,0.25)', fontSize: 16, fontWeight: 800 }}>
                <span style={{ color: '#ffffff' }}>Umumiy qiymat:</span>
                <span style={{ color: '#60a5fa' }}>{totalAmount.toLocaleString('uz-UZ')} so'm</span>
              </div>
            </div>

            <button 
              className="slide-action-btn"
              onClick={onClose}
              style={{ padding: '12px 36px' }}
            >
              Do'konga qaytish
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
