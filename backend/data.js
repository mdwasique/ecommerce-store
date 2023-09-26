import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Md Wasique',
      email: 'mdwasique234@gmail.com',
      password: bcrypt.hashSync('google@123', 8),
      isAdmin: true,
    },
    {
      name: 'sandeep',
      email: 'sandeep234@gmail.com',
      password: bcrypt.hashSync('google@123', 8),
      isAdmin: true,
    },
  ],
  products: [
    {
      name: 'Nike Slim Shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      brand: 'Nike',
      rating: 3.7,
      numReviews: 9,
      countInStock: 0,
      description: 'High Quality Product',
    },
    {
      name: 'Adidas Fit Shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 100,
      brand: 'Adidas',
      rating: 4.4,
      numReviews: 10,
      countInStock: 19,
      description: 'High Quality Product',
    },
    {
      name: 'Lacoste Free Shirt',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 220,
      brand: 'Nike',
      rating: 4.8,
      numReviews: 17,
      countInStock: 5,
      description: 'High Quality Product',
    },
    {
      name: 'Nike Slim Pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 150,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      countInStock: 66,
      description: 'High Quality Product',
    },
    {
      name: 'Puma Slim Pant',
      category: 'Pants',
      image: '/images/p5.jpg',
      price: 65,
      brand: 'Puma',
      rating: 4,
      numReviews: 10,
      countInStock: 52,
      description: 'High Quality Product',
    },
  ],
};

export default data;
