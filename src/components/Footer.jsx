import React from 'react';
import { IconMapPin, IconPhone, IconShield } from './Icons';

export default function Footer({ onSelectCategory }) {
  return (
    <footer className="main-footer">
      <div className="footer-inner">
        <div className="footer-top-grid">
          {/* Col 1: About Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div className="logo-icon-box" style={{ width: 38, height: 38, fontSize: 18 }}>
                BM
              </div>
              <div>
                <span className="logo-title" style={{ fontSize: 20 }}>BLACK MARKET</span>
                <div className="logo-tagline" style={{ fontSize: 9 }}>Premium E-Commerce</div>
              </div>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: '#94a3b8', marginBottom: 16 }}>
              BLACK MARKET — O'zbekistondagi eng so'nggi zamonaviy texnologiyalar, eksklyuziv gadjetlar, techwear kiyimlar va afsonaviy krossovkalar do'koni. 1 kunda bepul yetkazib beramiz.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <IconPhone size={15} style={{ color: '#60a5fa' }} />
                <span>+998 (71) 200-00-20 (Har kuni 08:00 - 22:00)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <IconMapPin size={15} style={{ color: '#60a5fa' }} />
                <span>Toshkent sh., Amir Temur shoh ko'chasi, 107-bino</span>
              </div>
            </div>
          </div>

          {/* Col 2: Xaridorlarga */}
          <div>
            <h4 className="footer-col-title">Xaridorlarga</h4>
            <ul className="footer-links-list">
              <li><a href="#delivery" onClick={(e) => e.preventDefault()}>1 kunda yetkazib berish</a></li>
              <li><a href="#installment" onClick={(e) => { e.preventDefault(); onSelectCategory('installment'); }}>0% Muddatli to'lov</a></li>
              <li><a href="#return" onClick={(e) => e.preventDefault()}>Tovarni qaytarish (10 kun)</a></li>
              <li><a href="#guarantee" onClick={(e) => e.preventDefault()}>Rasmiy kafolat</a></li>
              <li><a href="#pvz" onClick={(e) => e.preventDefault()}>Tarqatish punktlari (PVZ)</a></li>
            </ul>
          </div>

          {/* Col 3: Ommabop toifalar */}
          <div>
            <h4 className="footer-col-title">Katalog</h4>
            <ul className="footer-links-list">
              <li><a href="#phones" onClick={(e) => { e.preventDefault(); onSelectCategory('phones'); }}>Smartfonlar & iPhone</a></li>
              <li><a href="#laptops" onClick={(e) => { e.preventDefault(); onSelectCategory('computers'); }}>Noutbuklar & MacBook</a></li>
              <li><a href="#clothing" onClick={(e) => { e.preventDefault(); onSelectCategory('clothing'); }}>Kiyimlar & Techwear</a></li>
              <li><a href="#shoes" onClick={(e) => { e.preventDefault(); onSelectCategory('shoes'); }}>Air Jordan & Krossovkalar</a></li>
              <li><a href="#audio" onClick={(e) => { e.preventDefault(); onSelectCategory('audio'); }}>AirPods & Naushniklar</a></li>
            </ul>
          </div>

          {/* Col 4: Mobil ilova va Ijtimoiy tarmoqlar */}
          <div>
            <h4 className="footer-col-title">Ijtimoiy tarmoqlarimiz</h4>
            <p style={{ fontSize: 13, color: '#94a3b8', marginBottom: 12 }}>
              Yangiliklar, maxsus chegirmalar va o'yinlardan birinchi bo'lib xabardor bo'ling:
            </p>
            <div className="social-pills-row">
              <a href="https://t.me" target="_blank" rel="noreferrer" className="social-pill" title="Telegram">
                TG
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-pill" title="Instagram">
                IG
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-pill" title="YouTube">
                YT
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-pill" title="Facebook">
                FB
              </a>
            </div>

            <div style={{ marginTop: 20 }}>
              <div style={{ fontSize: 12, color: '#64748b', marginBottom: 6 }}>Mobil ilovani yuklab oling:</div>
              <div style={{ display: 'flex', gap: 8 }}>
                <div style={{ background: '#0a1026', border: '1px solid rgba(59,130,246,0.2)', padding: '6px 12px', borderRadius: 8, fontSize: 11, fontWeight: 700, color: '#cbd5e1' }}>
                   App Store
                </div>
                <div style={{ background: '#0a1026', border: '1px solid rgba(59,130,246,0.2)', padding: '6px 12px', borderRadius: 8, fontSize: 11, fontWeight: 700, color: '#cbd5e1' }}>
                  ▶ Google Play
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} «BLACK MARKET» MChJ. Barcha huquqlar himoyalangan.
          </div>

          <div className="payment-badges-row">
            <span className="pay-badge">Payme</span>
            <span className="pay-badge">Click Up</span>
            <span className="pay-badge">Uzum Bank</span>
            <span className="pay-badge">UZCARD</span>
            <span className="pay-badge">HUMO</span>
            <span className="pay-badge">VISA</span>
            <span className="pay-badge">MasterCard</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
