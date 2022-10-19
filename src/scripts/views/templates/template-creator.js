/* eslint-disable no-unused-vars */
import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
<div class = "detail-page">
<h2 class="resto-detail-title" tabindex="0">${restaurant.name} Details</h2>
  <div class="resto-poster-info-bundle">
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" tabindex="0"/>
    <div class="resto__info" tabindex="0">
      <h3>Information</h3>
      <h4>Name of Restaurant</h4>
      <p>${restaurant.name}</p>
      <h4>Addres</h4>
      <p>${restaurant.address}</p>
      <h4>City</h4>
      <p>${restaurant.city}</p>
      <h4>Rating</h4>
      <p>⭐️ ${restaurant.rating}</p>
    </div>
  </div>
  <div class="resto__overview" tabindex="0">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
  </div>
</div>
`;

const createRestoItemTemplate = (restaurant) => `
<article class="card-item">
<img class="card-item__thumbnail lazyload"
     src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
     alt="${restaurant.name} restaurant" tabindex="0">
<div class="card-item__content">
<h1 class="card-item__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>  
<p class="card-item_city" tabindex="0">
  located in ${restaurant.city}<span class=txt-rat> with Ratting </span><span class=ratting>&#9733;</span>${restaurant.rating}
  </p>
  <p class="card-item__description" tabindex="0">${restaurant.description}</p>
</article>
`;

const createRestoListFood = (foods) => {
  // eslint-disable-next-line prefer-const
  let text = `
    <div class = "resto__menu" tabindex="0">
    <h4>Foods</h4>
    <ul class = "list__menu">
  `;
  foods.forEach((food) => {
    text += `<li>${food.name}</li>`;
  });
  text += `
  </ul>
  </div>
  `;

  return text;
};

const createRestoListDrink = (drinks) => {
  // eslint-disable-next-line prefer-const
  let text = `
    <div class = "resto__menu" tabindex="0">
    <h4>Drinks</h4>
    <ul class = "list__menu">
  `;
  drinks.forEach((drink) => {
    text += `<li>${drink.name}</li>`;
  });
  text += `
  </ul>
  </div>
  `;

  return text;
};

const createRestoListReview = (customerReviews) => {
  let text = `
  <h3 class ="resto-review-title" tabindex="0">Review</h3>
  <div class = "resto__review" tabindex="0">
  `;
  customerReviews.forEach((review) => {
    text += `
    <div class = "review-container" tabindex="0">
    <p class= "reviewer-name">${review.name}</p>
    <p class= "reviewer-date">${review.date}</p>
    <p>review :</p>
    <p class= "review-desc">${review.review}</p>
    <br>
    </div>
  `;
  });
  text += `
  </div>`;
  return text;
};

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const getEmptyRestaurantTemplate = () => `
<div class="nothing-restaurant">There are no Restaurants to Display</div>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createRestoListFood,
  createRestoListDrink,
  createRestoListReview,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  getEmptyRestaurantTemplate,
};
