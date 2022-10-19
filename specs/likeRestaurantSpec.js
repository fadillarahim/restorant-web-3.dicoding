/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { async } from 'regenerator-runtime';
import FavoriteRestaurantdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // Mensimulasikan widget Like Restaurant ditekan
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // Tambahkan Restaurant dengan ID 1 ke daftar resto yang disukai
    await FavoriteRestaurantdb.putRestaurant({ id: 1 });

    // Mensimulasikan widget Like Restaurant ditekan
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Tidak ada resto yang ganda
    expect(await FavoriteRestaurantdb.getAllRestaurant()).toEqual([{ id: 1 }]);

    FavoriteRestaurantdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantdb.getAllRestaurant()).toEqual([]);
  });
});
