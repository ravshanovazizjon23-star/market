import React, { useState } from 'react';
import { 
  IconX, 
  IconStar, 
  IconHeart, 
  IconCart, 
  IconTruck, 
  IconShield, 
  IconCheck, 
  IconSparkles 
} from './Icons';

export default function ProductDetailModal({
  product,
  onClose,
  isFavorite,
  onToggleFavorite,
  onAddToCart,
  onBuyNow
}) {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : null);
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null);

  const images = product.images && product.images.length > 0 
    ? product.images 
    : ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card animate-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Yopish">
          <IconX size={20} />
        </button>

        <div className="detail-grid">
          {/* Gallery Section */}
          <div className="gallery-wrap">
            <div className="main-preview-img-box">
              <img 
                src={images[selectedImage]} 
                alt={product.name} 
                className="main-preview-img"
              />
            </div>

            {images.length > 1 && (
              <div className="thumbs-row">
                {images.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className={`thumb-item ${selectedImage === idx ? 'active' : ''}`}
                    onClick={() => setSelectedImage(idx)}
                  >
                    <img src={imgUrl} alt={`${product.name} - ${idx + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info Section */}
          <div className="detail-info">
            {/* Badges & Wishlist */}
            <div className="detail-badge-row">
              {product.discount > 0 && (
                <span className="badge-discount">Chegirma -{product.discount}%</span>
              )}
              {product.isHit && (
                <span className="badge-hit">Ommabop mahsulot</span>
              )}
              {product.isNew && (
                <span className="badge-new">Yangi kolleksiya</span>
              )}
              <button 
                className={`wish-btn ${isFavorite ? 'active' : ''}`}
                style={{ position: 'static', marginLeft: 'auto' }}
                onClick={() => onToggleFavorite(product)}
              >
                <IconHeart size={18} fill={isFavorite ? "#ef4444" : "none"} />
              </button>
            </div>

            {/* Title */}
            <h1 className="detail-title">{product.name}</h1>

            {/* Rating */}
            <div className="detail-rating-row">
              <div className="meta-rating" style={{ fontSize: 15 }}>
                <IconStar size={16} />
                <span>{product.rating}</span>
              </div>
              <span className="meta-reviews" style={{ fontSize: 13 }}>
                ({product.reviewsCount} ta xaridor sharhi)
              </span>
              <span style={{ color: '#10b981', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                <IconCheck size={16} /> Omborda mavjud ({product.stock} dona)
              </span>
            </div>

            {/* Price Box */}
            <div className="detail-price-box">
              <div className="detail-price-main">
                {product.price.toLocaleString('uz-UZ')} so'm
                {product.oldPrice && (
                  <span className="detail-price-old">
                    {product.oldPrice.toLocaleString('uz-UZ')} so'm
                  </span>
                )}
              </div>
              <div className="detail-installment-banner">
                <IconSparkles size={16} />
                <span>Muddatli to'lov: oyiga atigi {(product.installmentPrice || Math.round(product.price / 12)).toLocaleString('uz-UZ')} so'mdan (12 oyga 0% ustamasiz)</span>
              </div>
            </div>

            {/* Colors Choice */}
            {product.colors && product.colors.length > 0 && (
              <div className="option-section">
                <div className="option-title">Rang: <span style={{ color: '#f8fafc' }}>{selectedColor}</span></div>
                <div className="options-row">
                  {product.colors.map(col => (
                    <button
                      key={col}
                      className={`option-chip ${selectedColor === col ? 'selected' : ''}`}
                      onClick={() => setSelectedColor(col)}
                    >
                      {col}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes / Memory Choice */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="option-section">
                <div className="option-title">O'lcham: <span style={{ color: '#f8fafc' }}>{selectedSize}</span></div>
                <div className="options-row">
                  {product.sizes.map(sz => (
                    <button
                      key={sz}
                      className={`option-chip ${selectedSize === sz ? 'selected' : ''}`}
                      onClick={() => setSelectedSize(sz)}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Specs Table */}
            {product.specs && (
              <div className="specs-table">
                {Object.entries(product.specs).map(([label, val]) => (
                  <div key={label} className="specs-row">
                    <span className="specs-label">{label}</span>
                    <span className="specs-val">{val}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Short Description */}
            <p style={{ color: '#94a3b8', fontSize: 13, lineHeight: 1.6, marginBottom: 20 }}>
              {product.description}
            </p>

            {/* Delivery Guarantee Notes */}
            <div style={{ display: 'flex', gap: 16, marginBottom: 24, fontSize: 12, color: '#94a3b8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <IconTruck size={18} style={{ color: '#60a5fa' }} />
                <span>Ertaga yetkazamiz</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <IconShield size={18} style={{ color: '#10b981' }} />
                <span>1 yil rasmiy kafolat</span>
              </div>
            </div>

            {/* Actions */}
            <div className="detail-actions-row">
              <button 
                className="detail-buy-now"
                onClick={() => {
                  onBuyNow(product);
                  onClose();
                }}
              >
                1 bosishda xarid qilish
              </button>
              <button 
                className="detail-add-cart"
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
              >
                <IconCart size={18} />
                <span>Savatga qo'shish</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
