import React from 'react';
import { IconX, IconHeart, IconTrash, IconCart, IconStar } from './Icons';

export default function FavoritesModal({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onClearFavorites,
  onAddToCart,
  onOpenDetail
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-card animate-modal" 
        style={{ maxWidth: 760 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(59,130,246,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 18, fontWeight: 700 }}>
            <IconHeart size={22} fill="#ef4444" style={{ color: '#ef4444' }} />
            <span>Sevimlilar ro'yxati ({favorites.length})</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {favorites.length > 0 && (
              <button 
                onClick={onClearFavorites}
                style={{ fontSize: 13, color: '#ef4444', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}
              >
                <IconTrash size={14} />
                <span>Hammasini o'chirish</span>
              </button>
            )}
            <button className="modal-close-btn" style={{ position: 'static' }} onClick={onClose}>
              <IconX size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: 24, maxHeight: '70vh', overflowY: 'auto' }}>
          {favorites.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ width: 70, height: 70, borderRadius: '50%', background: 'rgba(239,68,68,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444', margin: '0 auto 16px auto' }}>
                <IconHeart size={34} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: '#f8fafc' }}>
                Sevimlilar ro'yxati bo'sh
              </h3>
              <p style={{ color: '#94a3b8', fontSize: 13, marginBottom: 20 }}>
                O'zingizga ma'qul kelgan tovarlardagi yurakcha belgisini bosing!
              </p>
              <button className="slide-action-btn" onClick={onClose} style={{ fontSize: 13, padding: '8px 20px' }}>
                Katalogga qaytish
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
              {favorites.map(prod => (
                <div 
                  key={prod.id} 
                  style={{
                    background: 'rgba(13, 22, 52, 0.7)',
                    border: '1px solid rgba(59, 130, 246, 0.18)',
                    borderRadius: 14,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ position: 'relative', width: '100%', height: 160, cursor: 'pointer' }} onClick={() => { onOpenDetail(prod); onClose(); }}>
                    <img src={prod.images[0]} alt={prod.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <button 
                      onClick={(e) => { e.stopPropagation(); onRemoveFavorite(prod.id); }}
                      style={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        background: 'rgba(5,8,20,0.7)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '50%',
                        width: 30,
                        height: 30,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ef4444'
                      }}
                    >
                      <IconTrash size={14} />
                    </button>
                  </div>

                  <div style={{ padding: 12, display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h4 
                      style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0', marginBottom: 6, lineHeight: 1.3, height: 34, overflow: 'hidden', cursor: 'pointer' }}
                      onClick={() => { onOpenDetail(prod); onClose(); }}
                    >
                      {prod.name}
                    </h4>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#f59e0b', marginBottom: 8 }}>
                      <IconStar size={13} />
                      <span style={{ fontWeight: 700 }}>{prod.rating}</span>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 8, borderTop: '1px solid rgba(59,130,246,0.1)' }}>
                      <div style={{ fontSize: 14, fontWeight: 800, color: '#ffffff' }}>
                        {prod.price.toLocaleString('uz-UZ')} <span style={{ fontSize: 11, color: '#94a3b8' }}>so'm</span>
                      </div>

                      <button 
                        className="add-cart-btn"
                        style={{ width: 32, height: 32 }}
                        onClick={() => onAddToCart(prod)}
                        title="Savatga qo'shish"
                      >
                        <IconCart size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
