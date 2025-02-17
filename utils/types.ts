export type Coordinates= {
  latitude: number | null;
  longitude: number | null;
}

export type Restaurant={
  _id: string;
  name: string;
  image: string;
  slug: string;
  address: string;
  location: location;
  deliveryTime: number;
  minimumOrder: number;
  tax: number;
  reviewData: reviewData;
  categories: categories[];
  rating: number | null;
  isAvailable: boolean;
  openingTimes: openingTimes;
}
export type location={
  coordinates: number[];
}

export type reviewData= {
  total: number;
  ratings: number;
  reviews: reviews[];
}

export type reviews= {
  _id: string;
  __typename: string;
}
export type categories= {
  _id: string;
  title: string;
  foods: foods[];
}

export type foods ={
  _id: string;
  title: string;
}

export type times ={
  startTime: string[];
  endTime: string[];
}

export type openingTimes= {
  day: string;
  times: times[];
}
