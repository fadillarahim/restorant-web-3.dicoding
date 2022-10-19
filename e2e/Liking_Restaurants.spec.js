Feature('Liking Restaurants');

const assert = require('assert');

// Before(({ I }) => {
//   I.amOnPage('/#/favorite');
// });

Scenario('Showing empty favorite restaurant', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.waitForElement('#favorite-resto-title', 20);
  I.seeElement('#favorite-resto-title');
  I.waitForElement('.nothing-restaurant', 20);
  I.see('There are no Restaurants to Display', '.nothing-restaurant');
});

Scenario('Liking one movie', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.waitForElement('.nothing-restaurant', 20);
  I.see('There are no Restaurants to Display', '.nothing-restaurant');

  I.amOnPage('/#home');

  I.waitForElement('.card-item', 20);
  I.seeElement('.card-item');

  I.waitForElement('.card-item__title a', 20);
  I.seeElement('.card-item__title a');
  // I.click(locate('.card-item__title a').first());

  const firstResto = locate('.card-item__title a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#likeButton', 20);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.card-item', 20);
  I.seeElement('.card-item');

  const favoritedRestoName = await I.grabTextFrom('.card-item__title a');
  assert.strictEqual(firstRestoName, favoritedRestoName);
});

Scenario('Unliking one Movie', ({ I }) => {
  I.amOnPage('/#home');
  I.waitForElement('.card-item__title a', 20);
  I.seeElement('.card-item__title a');
  I.click(locate('.card-item__title a').first());

  I.waitForElement('#likeButton', 20);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.card-item__title a', 20);
  I.seeElement('.card-item__title a');
  I.click('.card-item__title a');

  I.waitForElement('#likeButton', 20);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.nothing-restaurant', 20);
  I.see('There are no Restaurants to Display', '.nothing-restaurant');
});
