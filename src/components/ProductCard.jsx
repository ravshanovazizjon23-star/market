import React from 'react';
import { IconStar, IconHeart, IconCart, IconPlus, IconMinus, IconEye } from './Icons';

export default function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
  cartQuantity,
  onAddToCart,
  onUpdateCartQty,
  onOpenDetail
}) {
  return (
    <div className="product-card">
      {/* 1. Image & Badges */}
      <div className="card-img-wrap" onClick={() => onOpenDetail(product)}>
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="card-img"
          loading="lazy"
        />

        {/* Badges */}
        <div className="card-badges">
          {product.discount > 0 && (
            <span className="badge-discount">-{product.discount}%</span>
          )}
          {product.isHit && (
            <span className="badge-hit">HIT</span>
          )}
          {product.isNew && (
            <span className="badge-new">YANGI</span>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          className={`wish-btn ${isFavorite ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(product);
          }}
          aria-label="Sevimlilarga qo'shish"
        >
          <IconHeart size={18} fill={isFavorite ? "#ef4444" : "none"} />
        </button>

        {/* Quick View overlay button */}
        <button
          className="quick-view-overlay-btn"
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetail(product);
          }}
        >
          <IconEye size={15} />
          <span>Tez ko'rish</span>
        </button>
      </div>

      {/* 2. Card Content */}
      <div className="card-body">
        {/* Title */}
        <h3 
          className="card-title" 
          title={product.name}
          onClick={() => onOpenDetail(product)}
        >
          {product.name}
        </h3>

        {/* Rating & Reviews */}
        <div className="card-meta">
          <div className="meta-rating">
            <IconStar size={14} />
            <span>{product.rating}</span>
          </div>
          <span className="meta-reviews">({product.reviewsCount} ta sharh)</span>
        </div>

        {/* Installment Badge (Uzum Market style) */}
        <div className="card-installment">
          {(product.installmentPrice || Math.round(product.price / 12)).toLocaleString('uz-UZ')} so'm/oy
        </div>

        {/* Price Row & Add to Cart */}
        <div className="card-price-row">
          <div className="price-group">
            {product.oldPrice && (
              <span className="old-price">{product.oldPrice.toLocaleString('uz-UZ')} so'm</span>
            )}
            <span className="current-price">
              {product.price.toLocaleString('uz-UZ')} <span>so'm</span>
            </span>
          </div>

          {/* Cart action: Add or Qty control */}
          {cartQuantity > 0 ? (
            <div className="cart-qty-control" onClick={(e) => e.stopPropagation()}>
              <button 
                className="cart-qty-btn"
                onClick={() => onUpdateCartQty(product.id, cartQuantity - 1)}
                aria-label="Kamaytirish"
              >
                <IconMinus size={14} />
              </button>
              <span className="cart-qty-number">{cartQuantity}</span>
              <button 
                className="cart-qty-btn"
                onClick={() => onUpdateCartQty(product.id, cartQuantity + 1)}
                aria-label="Ko'paytirish"
              >
                <IconPlus size={14} />
              </button>
            </div>
          ) : (
            <button
              className="add-cart-btn"
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              aria-label="Savatga qo'shish"
            >
              <IconCart size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
