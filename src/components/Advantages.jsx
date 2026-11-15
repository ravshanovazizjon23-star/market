import React from 'react';
import { IconTruck, IconCreditCard, IconShield, IconRotate } from './Icons';

export default function Advantages() {
  const items = [
    {
      icon: <IconTruck size={24} />,
      title: "1 kunda tezkor yetkazish",
      desc: "O'zbekiston bo'ylab eng tez yetkazib berish xizmati"
    },
    {
      icon: <IconCreditCard size={24} />,
      title: "0% Muddatli to'lov",
      desc: "Halol bo'lib to'lash, ortiqcha foiz va jarimalarsiz"
    },
    {
      icon: <IconShield size={24} />,
      title: "100% Original kafolati",
      desc: "Faqat sertifikatlangan, asl brend tovarlar"
    },
    {
      icon: <IconRotate size={24} />,
      title: "10 kun ichida qaytarish",
      desc: "Tovarni oson va qiyinchiliksiz qaytarib berish"
    }
  ];

  return (
    <div className="advantages-grid">
      {items.map((item, idx) => (
        <div key={idx} className="advantage-card">
          <div className="adv-icon-wrap">
            {item.icon}
          </div>
          <div>
            <div className="adv-title">{item.title}</div>
            <div className="adv-subtitle">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
