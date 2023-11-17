    // Get all checkboxes
    const checkboxes = document.querySelectorAll('.filter-checkbox');

    // Get the list of items
    const items = document.querySelectorAll('.card');

    // Attach event listener to each checkbox
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', updateFilter);
    });

    function updateFilter() {
      // Get the selected categories
      const selectedCategories = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.getAttribute('data-category'));

      // Show/hide items based on selected categories
      items.forEach(item => {
        const categories = item.getAttribute('data-categories').split(' ');
        const isVisible = selectedCategories.every(category => categories.includes(category));

        item.style.display = isVisible ? 'block' : 'none';
      
      });
    }
