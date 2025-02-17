'use client';

import { restaurantList } from '../apollo/queries';
import { useLazyQuery } from '@apollo/client';
import { RestaurantInterface } from '@/utils/types'
import { useEffect } from 'react';
import Image from 'next/image';
import { useLocation } from '@/context/LocationContext';
import { Clock, Star } from 'lucide-react';

export default function Restaurant(): React.ReactElement {
  const { coordinates } = useLocation();
  const [getRestaurants, { data, loading }] = useLazyQuery(restaurantList);

  useEffect(() => {
    if (coordinates.longitude && coordinates.latitude) {
      getRestaurants({
        variables: {
          longitude: coordinates?.longitude,
          latitude: coordinates?.latitude,
        },
      });
    }
  }, [coordinates, getRestaurants]);

  if (loading) {
    return (
      <div className='w-full h-64 flex items-center justify-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500'></div>
      </div>
    );
  }

  return (
    <div id='restaurants' className='w-full max-w-[100vw] overflow-x-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
          {data?.nearByRestaurants?.restaurants.map(
            (restaurant: RestaurantInterface) => (
              <div
                key={restaurant?._id}
                className='group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1'
              >
                <div className='relative h-48 w-full'>
                  <Image
                    src={restaurant?.image}
                    alt={restaurant?.name}
                    fill
                    className='object-cover transition-transform duration-300 group-hover:scale-105'
                    priority
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                </div>

                <div className='p-4 sm:p-6'>
                  <h3 className='text-lg sm:text-xl font-bold text-gray-800 mb-2 truncate'>
                    {restaurant?.name}
                  </h3>

                  <div className='flex items-center mb-4'>
                    <div className='flex items-center bg-green-100 rounded-full px-3 py-1'>
                      <Star className='w-4 h-4 text-green-600 mr-1' />
                      <span className='font-semibold text-green-700'>
                        {restaurant?.reviewData?.ratings || '4'}
                      </span>
                      <span className='text-sm text-green-600 ml-1'>
                        ({restaurant?.reviewData?.total || '10'})
                      </span>
                    </div>
                  </div>

                  <div className='flex items-center text-gray-600'>
                    <Clock className='w-4 h-4 mr-2 flex-shrink-0' />
                    <span className='text-sm'>
                      Delivery in {restaurant?.deliveryTime} mins
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
