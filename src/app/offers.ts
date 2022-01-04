export interface Offer {
  id: number;
  name: string;
  expire: string;
  description: string;
}

export const offers = [
  {
    id: 1,
    name: '50% Discount',
    expire: '01/03/2022',
    description: 'Enjoy a nice offer while you can'
  },
  {
    id: 2,
    name: 'Second unit FREE',
    expire: '01/02/2022',
    description: 'Pay one and obtain two'
  },
  {
    id: 3,
    name: '15% Discount',
    expire: '31/01/2022',
    description: 'Limited offer'
  }
];