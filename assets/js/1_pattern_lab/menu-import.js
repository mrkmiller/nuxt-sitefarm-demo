import jQuery from 'jquery';

(($ => {

  const domain = 'www.ucdavis.edu';

  $(document).ready(() => {

    $('[data-menu-name]').each(function () {
      const $menu = $(this);
      // Get the menu name
      const menu_name = $menu.data('menu-name');
      const menu_storage_key = `menu-${menu_name}`;

      // Check to see if the menu data is already stored.
      const menu_data = sessionStorage.getItem(menu_storage_key);

      if (menu_data) {
        $menu.replaceWith(menu_data);
      }
      else {
        // Fetch menus from the main website.
        $.ajax({
          url: `https://${domain}/menu/${menu_name}`,
          method: 'POST',
          dataType: 'html',
          crossDomain: true
        }).done(data => {
          $menu.replaceWith(data);
          // Store the menu data to a session storage.
          sessionStorage.setItem(menu_storage_key, data);
        });
      }
    });

  });

}))(jQuery); // end jquery enclosure
