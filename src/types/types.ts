export interface TClothesItem {
  _id: string;
  image: string;
  title: string;
  category: string;
  size: string[];
  description: string;
  price: number;
}

export interface TDonorItem {
  _id: string;
  img: string;
  name: string;
  location: string;
  testimonial: string;
  amount: number;
}

export interface TVolunteer {
  _id: string;
  email: string;
  phoneNumber: string;
  location: string;
}
