import { Product } from './product';

export const PRODUCTS: Product[] = [
  { id: 1,
    name: 'HAMMER-DEMOLITION',
    description: 'Concrete slab demolition unto 100mm',
    price: 100,
    isDry: true,
    isWet: false,
    isDeliverable: true,
    isPickup: false,
    suburb: 'Parkville',
    state: 'VIC',
    image: './assets/drill.jpeg'
   },
   { id: 2,
     name: 'AXE-DEMOLITION',
     description: 'Concrete slab demolition unto 100mm',
     price: 120,
     isDry: true,
     isWet: true,
     isDeliverable: true,
     isPickup: false,
     suburb: 'Parkville',
     state: 'VIC',
     image: './assets/drill.jpeg'
   },
   { id: 3,
     name: 'CHAINSAW-DEMOLITION',
     description: 'Concrete slab demolition unto 100mm',
     price: 130,
     isDry: false,
     isWet: true,
     isDeliverable: true,
     isPickup: false,
     suburb: 'Parkville',
     state: 'VIC',
     image: './assets/drill.jpeg'
    }
];
