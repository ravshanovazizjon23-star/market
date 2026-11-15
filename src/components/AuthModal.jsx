import React, { useState } from 'react';
import { IconX, IconPhone, IconCheck, IconUser } from './Icons';

export default function AuthModal({ isOpen, onClose, initialMode = 'login', userOrders = [] }) {
  if (!isOpen) return null;

  const [step, setStep] = useState('phone'); // phone or sms
  const [phoneNumber, setPhoneNumber] = useState('+998 ');
  const [smsCode, setSmsCode] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSendCode = (e) => {
    e.preventDefault();
    if (phoneNumber.trim().length >= 13) {
      setStep('sms');
    } else {
      alert("Iltimos, to'liq telefon raqamingizni kiriting!");
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (smsCode.length === 4) {
      setIsLoggedIn(true);
    } else {
      alert("4 xonali SMS kodni kiriting (masalan: 7777)");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-card animate-modal" 
        style={{ maxWidth: 440, padding: 32 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Yopish">
          <IconX size={20} />
        </button>

        {initialMode === 'orders' && userOrders.length > 0 ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(59,130,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa' }}>
                <IconUser size={20} />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: '#ffffff' }}>Mening buyurtmalarim</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxHeight: 360, overflowY: 'auto' }}>
              {userOrders.map((ord, idx) => (
                <div key={idx} style={{ background: 'rgba(13,22,52,0.7)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: 12, padding: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 4 }}>
                    <span style={{ color: '#60a5fa', fontWeight: 700 }}>#{ord.id}</span>
                    <span style={{ color: '#10b981', fontWeight: 600 }}>Yetkazilmoqda</span>
                  </div>
                  <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 4 }}>Sana: {ord.date}</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#ffffff' }}>
                    {ord.total.toLocaleString('uz-UZ')} so'm
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : !isLoggedIn ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <div className="logo-icon-box" style={{ width: 48, height: 48, margin: '0 auto 12px auto', fontSize: 22 }}>
                BM
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: '#ffffff', marginBottom: 6 }}>
                BLACK MARKET ga kirish
              </h3>
              <p style={{ fontSize: 13, color: '#94a3b8' }}>
                Buyurtmalarni boshqarish va chegirmalardan foydalanish uchun tizimga kiring
              </p>
            </div>

            {step === 'phone' ? (
              <form onSubmit={handleSendCode}>
                <div style={{ marginBottom: 18 }}>
                  <label style={{ fontSize: 12.5, fontWeight: 600, color: '#94a3b8', display: 'block', marginBottom: 6 }}>
                    Telefon raqam
                  </label>
                  <input 
                    type="tel"
                    className="form-input"
                    style={{ width: '100%', fontSize: 16 }}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+998 90 123 45 67"
                    required
                  />
                </div>
                <button type="submit" className="checkout-btn">
                  Kodni olish
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerify}>
                <div style={{ marginBottom: 18 }}>
                  <label style={{ fontSize: 12.5, fontWeight: 600, color: '#94a3b8', display: 'block', marginBottom: 6 }}>
                    SMS orqali yuborilgan kodni kiriting
                  </label>
                  <input 
                    type="text"
                    maxLength={4}
                    className="form-input"
                    style={{ width: '100%', fontSize: 20, textAlign: 'center', letterSpacing: 8 }}
                    value={smsCode}
                    onChange={(e) => setSmsCode(e.target.value)}
                    placeholder="••••"
                    required
                  />
                  <div style={{ fontSize: 11, color: '#64748b', marginTop: 6, textAlign: 'center' }}>
                    Test uchun ixtiyoriy 4 xonali son kiriting (masalan: 1234)
                  </div>
                </div>
                <button type="submit" className="checkout-btn">
                  Tasdiqlash
                </button>
              </form>
            )}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#10b981', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
              <IconCheck size={30} />
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: '#ffffff', marginBottom: 6 }}>
              Xush kelibsiz!
            </h3>
            <p style={{ fontSize: 13, color: '#94a3b8', marginBottom: 20 }}>
              Siz muvaffaqiyatli tizimga kirdingiz.
            </p>
            <button className="slide-action-btn" onClick={onClose} style={{ padding: '10px 24px', fontSize: 14 }}>
              Do'konga o'tish
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
