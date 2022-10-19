/* eslint-disable no-unused-vars */
import RestaurantDbSource from '../../data/restaurantdb_source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="content">
        <h2  class="title" tabindex="0">Explore Restaurant</h2>
        <p class="desc" tabindex="0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, est!</p>

        <section class="list-restaurant">
            <div class="card-grid"></div>
        </section>
    </section>
      `;
  },

  async afterRender() {
    const jumbotron = document.querySelector('.jumbotron');
    jumbotron.style.display = 'flex';
    const restaurants = await RestaurantDbSource.listRestaurant();
    const restaurantsContainer = document.querySelector('.card-grid');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Home;
