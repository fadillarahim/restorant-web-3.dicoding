/* eslint-disable no-cond-assign */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import FavoriteRestaurantdb from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate, getEmptyRestaurantTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `    
    <section class="content">
        <h2  id="favorite-resto-title"class="title" tabindex="0">Favorite Restaurant</h2>
        <p class="desc" tabindex="0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, est!</p>

        <section class="list-restaurant">
            <div class="card-grid"></div>
        </section>
    </section>`;
  },

  async afterRender() {
    const jumbotron = document.querySelector('.jumbotron');
    jumbotron.style.display = 'none';

    const restaurants = await FavoriteRestaurantdb.getAllRestaurant();
    this.showFavResto(restaurants);
  },

  showFavResto(restaurant = []) {
    const restaurantsContainer = document.querySelector('.card-grid');
    const emptyTemplate = getEmptyRestaurantTemplate();
    if (restaurant.length) {
      restaurant.forEach((resto) => {
        restaurantsContainer.innerHTML += createRestoItemTemplate(resto);
      });
    } else {
      restaurantsContainer.innerHTML = emptyTemplate;
    }
  },
};

export default Favorite;
