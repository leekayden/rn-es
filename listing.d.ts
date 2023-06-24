export type CarouselItemsType = {
  Name: string;
  Caption: string;
  contentPosition: "left" | "right" | "middle";
  Items: { Name: string; Image: string }[];
  route: string;
};

export interface Listing {
  id: string;
  code: string;
  title: string;
  description: string;
  images: string[];
  email: string;
  district: string;
  address: string;
  price: number;
  numOfGuests: number;
  numOfBeds: number;
  numOfBaths: number;
  maxPax: number;
  amenities: string[];
  mrt: string;
  rooms: number;
  roomType: string;
  availability: string;
  roomFeatures: string[];
  apartmentFeatures: string[];
  commonFacilities: string[];
  carouselItems: CarouselItemsType[];
}
