document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.cards_item_button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const wrapper = button.closest('.cards_item');
            if (wrapper) {
                wrapper.classList.add('show');
            }
        });
    });
});