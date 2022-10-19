/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb_source';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import {
  createRestoDetailTemplate,
  createRestoListFood,
  createRestoListDrink,
  createRestoListReview,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id="restaurant-container" class="restaurant-container"></div>
    <div id="likeButtonContainer"></div>
  `;
  },

  async afterRender() {
    const jumbotron = document.querySelector('.jumbotron');
    jumbotron.style.display = 'none';

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const { foods, drinks } = restaurant.menus;
    const { customerReviews } = restaurant;
    const restaurantContainer = document.querySelector('#restaurant-container');
    restaurantContainer.innerHTML += createRestoDetailTemplate(restaurant);

    const menuscontainer = document.createElement('div');
    menuscontainer.setAttribute('class', 'menus-container');
    menuscontainer.innerHTML += createRestoListFood(foods);
    menuscontainer.innerHTML += createRestoListDrink(drinks);
    restaurantContainer.appendChild(menuscontainer);
    restaurantContainer.innerHTML += createRestoListReview(customerReviews);

    // add like button
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
      },

    });
  },
};

export default Detail;
