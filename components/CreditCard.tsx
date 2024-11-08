import Image from 'next/image';
import React from 'react';

interface CreditCardProps {
  card: {
    id: string;
    name: string;
    benefits: string;
    annualFee: string;
    interestRate: string;
    colorScheme: string;
    mask: string;
  };
  userName: string;
}

const CreditCard = ({ card, userName }: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <div className={`bank-card ${card.colorScheme}`}>
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">
              {card.name}
            </h1>
            <p className="text-white">{card.benefits}</p>
          </div>

          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">
                {userName}
              </h1>
              <h2 className="text-12 font-semibold text-white">
                ●● / ●●
              </h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● <span className="text-16">{card.mask}</span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon">
          <Image src="/icons/Paypass.svg" width={20} height={24} alt="pay" />
          <Image src="/icons/mastercard.svg" width={45} height={32} alt="mastercard" className="ml-5" />
        </div>

        <Image src="/icons/lines.png" width={316} height={190} alt="lines" className="absolute top-0 left-0" />
      </div>
    </div>
  );
};

export default CreditCard;
