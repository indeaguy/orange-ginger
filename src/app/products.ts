export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Bracelet',
    price: 7999999,
    description: 'A custom bracelet just for you'
  },
  {
    id: 2,
    name: 'Necklace',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 4,
    name: 'Beads',
    price: 299,
    description: 'Shiney'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/