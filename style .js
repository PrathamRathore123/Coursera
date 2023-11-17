   
    const checkboxes = document.querySelectorAll('.filter-checkbox');

 
    const items = document.querySelectorAll('.card');

   
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', updateFilter);
    });

    function updateFilter() {
    
      const selectedCategories = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.getAttribute('data-category'));

    
      items.forEach(item => {
        const categories = item.getAttribute('data-categories').split(' ');
        const isVisible = selectedCategories.every(category => categories.includes(category));

        item.style.display = isVisible ? 'block' : 'none';
      
      });
    }
