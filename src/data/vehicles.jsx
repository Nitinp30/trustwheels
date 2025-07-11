const MOCK_VEHICLES = [
  // Existing entries (id: 1–8) - CORRECTED URLs
  {
    id: 1,
    make: "Ford",
    model: "EcoSport",
    trim: "Titanium",
    year: 2020,
    color: "Red",
    mileage: 69123,
    price: 364,
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&h=300&crop=entropy&fit=crop&q=80&fm=jpg&auto=format",
    zipCode: "10004",
    featured: false,
    recentlyAdded: false,
    brandNew: false,
    noShippingFee: true,
    getItBy: "Jun 28",
  },
  {
    id: 2,
    make: "Kia",
    model: "K5",
    trim: "LXS",
    year: 2021,
    color: "Black",
    mileage: 42855,
    price: 369,
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=300&crop=entropy&fit=crop&q=80&fm=jpg&auto=format",
    zipCode: "10004",
    featured: false,
    recentlyAdded: false,
    brandNew: false,
    noShippingFee: false,
    getItBy: "Jun 28",
  },
  {
    id: 3,
    make: "Ford",
    model: "Edge",
    trim: "Titanium",
    year: 2022,
    color: "Silver",
    mileage: 51012,
    price: 409,
    image:
      "https://images.unsplash.com/photo-1570796079693-e4a9fbc7c6ec?w=500&h=300&crop=entropy&fit=crop&q=80&fm=jpg&auto=format",
    zipCode: "10004",
    featured: false,
    recentlyAdded: true,
    brandNew: false,
    noShippingFee: false,
    getItBy: "Jun 28",
  },
  {
    id: 4,
    make: "Mazda",
    model: "Mazda6",
    trim: "Touring",
    year: 2021,
    color: "White",
    mileage: 57896,
    price: 399,
    image:
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=500&h=300&crop=entropy&fit=crop&q=80&fm=jpg&auto=format",
    zipCode: "10004",
    featured: false,
    recentlyAdded: true,
    brandNew: false,
    noShippingFee: false,
    getItBy: "Jun 28",
  },
  {
    id: 5,
    make: "Mercedes-Benz",
    model: "GLS",
    trim: "GLS 450",
    year: 2023,
    color: "Black",
    mileage: 41271,
    price: 1329,
    image:
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=500&h=300&crop=entropy&fit=crop&q=80&fm=jpg&auto=format",
    zipCode: "10004",
    featured: false,
    recentlyAdded: true,
    brandNew: false,
    noShippingFee: false,
    getItBy: "Jun 28",
  },
  {
    id: 6,
    make: "Tesla",
    model: "Model 3",
    trim: "Long Range",
    year: 2023,
    color: "White",
    mileage: 15000,
    price: 599,
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&h=300&crop=entropy&fit=crop&q=80&fm=jpg&auto=format",
    zipCode: "90210",
    featured: true,
    recentlyAdded: false,
    brandNew: true,
    noShippingFee: true,
    getItBy: "Jun 28",
  },
  {
    id: 7,
    make: "BMW",
    model: "X3",
    trim: "xDrive30i",
    year: 2022,
    color: "Blue",
    mileage: 28500,
    price: 689,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&crop=entropy&fit=crop&q=80&fm=jpg&auto=format",
    zipCode: "90210",
    featured: false,
    recentlyAdded: false,
    brandNew: false,
    noShippingFee: true,
    getItBy: "Jun 30",
  },
  {
    id: 8,
    make: "Audi",
    model: "A4",
    trim: "Premium Plus",
    year: 2021,
    color: "Gray",
    mileage: 32000,
    price: 545,
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=300&crop=entropy&fit=crop&q=80&fm=jpg&auto=format",
    zipCode: "90210",
    featured: false,
    recentlyAdded: true,
    brandNew: false,
    noShippingFee: false,
    getItBy: "Jul 2",
  },

  {
    id: 9,
    make: "Toyota",
    model: "Camry",
    trim: "SE",
    year: 2020,
    color: "Blue",
    mileage: 48000,
    price: 389,
    image:
      "https://images.unsplash.com/photo-1605478486462-5efb2bceaf66?w=500&h=300&crop=entropy&fit=crop&q=80&fm=jpg&auto=format",
    zipCode: "94105",
    featured: false,
    recentlyAdded: false,
    brandNew: false,
    noShippingFee: true,
    getItBy: "Jul 1",
  },
  {
    id: 10,
    make: "Honda",
    model: "Civic",
    trim: "EX",
    year: 2023,
    color: "Gray",
    mileage: 60000,
    price: 359,
    image:
      "https://images.unsplash.com/photo-1585350671190-328ae01a0388?w=500&h=300&crop=entropy&fit=crop&q=80&fm=jpg&auto=format",
    zipCode: "94105",
    featured: false,
    recentlyAdded: false,
    brandNew: false,
    noShippingFee: false,
    getItBy: "Jun 30",
  },
  {
    id: 11,
    make: "Hyundai",
    model: "Tucson",
    trim: "SEL",
    year: 2022,
    color: "Red",
    mileage: 19000,
    price: 415,
    image:
      "https://images.unsplash.com/photo-1617290050166-9962cb046fa1?w=500&h=300&crop=entropy&fit=crop&q=80&fm=jpg&auto=format",
    zipCode: "30301",
    featured: true,
    recentlyAdded: true,
    brandNew: false,
    noShippingFee: true,
    getItBy: "Jul 3",
  },
  {
    id: 12,
    make: "Chevrolet",
    model: "Malibu",
    trim: "LT",
    year: 2021,
    color: "Silver",
    mileage: 30000,
    price: 379,
    image:
      "https://images.unsplash.com/photo-1549921296-3a2120b5d0d2?w=500&h=300&crop=entropy&fit=crop&q=80&fm=jpg&auto=format",
    zipCode: "30301",
    featured: false,
    recentlyAdded: true,
    brandNew: false,
    noShippingFee: false,
    getItBy: "Jul 2",
  },
  {
    id: 13,
    make: "Nissan",
    model: "Altima",
    trim: "SR",
    year: 2023,
    color: "Black",
    mileage: 12000,
    price: 429,
    image:
      "https://images.unsplash.com/photo-1593802460733-0fa63896f213?w=500&h=300&crop=entropy&fit=crop&q=80&fm=jpg&auto=format",
    zipCode: "60601",
    featured: false,
    recentlyAdded: false,
    brandNew: true,
    noShippingFee: true,
    getItBy: "Jul 4",
  },
  {
    id: 14,
    make: "Volkswagen",
    model: "Tiguan",
    trim: "SEL",
    year: 2020,
    color: "White",
    mileage: 45000,
    price: 395,
    image:
      "https://images.unsplash.com/photo-1620920540407-fcf524cfe6df?w=500&h=300&crop=entropy&fit=crop&q=80&fm=jpg&auto=format",
    zipCode: "60601",
    featured: false,
    recentlyAdded: false,
    brandNew: false,
    noShippingFee: false,
    getItBy: "Jul 5",
  },
];

export default MOCK_VEHICLES;
