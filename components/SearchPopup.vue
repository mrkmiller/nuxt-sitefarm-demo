<template>
  <div>
    <button class="search-popup__open js-search-popup__open">Open</button>

    <form action="" method="post" class="search-popup">
      <button class="search-popup__close"><span
        class="search-popup__close-icon">Close</span></button>
      <div class="search-popup__container">
        <label for="search-popup" class="search-popup__label">Search the site:</label>
        <input
          id="search-popup"
          type="text"
          name="search"
          class="search-popup__input"
          placeholder="Search"
          required="required">
        <input type="submit" value="Submit Search" class="search-popup__submit">
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'SearchPopup'
  }
</script>
