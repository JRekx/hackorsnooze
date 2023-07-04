"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when clicking site name */
function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

// Show story submit form when clicking on "submit" in the navbar
function navSubmitStoryClick(evt) {
  console.debug("navSubmitStoryClick", evt);
  hidePageComponents();
  $submitForm.show();
}

$navSubmitStory.on("click", navSubmitStoryClick);

// Show favorites list when clicking on "favorites" in the navbar
function navFavoritesClick(evt) {
  console.debug("navFavoritesClick", evt);
  hidePageComponents();
  putFavoritesListOnPage();
}

$body.on("click", "#nav-favorites", navFavoritesClick);

// Show user's own stories when clicking on "my stories" in the navbar
function navMyStories(evt) {
  console.debug("navMyStories", evt);
  hidePageComponents();
  putUserStoriesOnPage();
  $ownStories.show();
}

$body.on("click", "#nav-my-stories", navMyStories);

/** Show login/signup forms when clicking on "login" in the navbar */
function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
  $storiesContainer.hide();
}

$navLogin.on("click", navLoginClick);

// Show user profile when clicking on "profile" in the navbar
function navProfileClick(evt) {
  console.debug("navProfileClick", evt);
  hidePageComponents();
  $userProfile.show();
}

$navUserProfile.on("click", navProfileClick);

// Update navbar when the user first logs in
function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").css("display", "flex");
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(currentUser.username).show();
}

