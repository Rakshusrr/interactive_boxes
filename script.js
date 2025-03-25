// document.addEventListener("DOMContentLoaded", function() {
//     const boxes = document.querySelectorAll('.box');
//     const colorSelectors = document.querySelectorAll('select[id^="color"]');
//     const sizeSelectors = document.querySelectorAll('select[id^="size"]');

//     // Handle box click: show or hide options and ensure others are closed
//     boxes.forEach(box => {
//         box.addEventListener('click', function() {
//             // Toggle 'open' class on the clicked box
//             this.classList.toggle('open');

//             // Hide options for all other boxes
//             boxes.forEach(otherBox => {
//                 if (otherBox !== this) {
//                     otherBox.classList.remove('open');
//                 }
//             });
//         });
//     });

//     // Color and size change handlers
//     colorSelectors.forEach(colorSelect => {
//         colorSelect.addEventListener('change', function() {
//             const boxId = this.id.replace('color', 'box');
//             document.getElementById(boxId).style.backgroundColor = this.value;
//         });
//     });

//     sizeSelectors.forEach(sizeSelect => {
//         sizeSelect.addEventListener('change', function() {
//             const boxId = this.id.replace('size', 'box');
//             const box = document.getElementById(boxId);
//             const size = this.value;

//             if (size === 'small') {
//                 box.style.height = '120px';
//             } else if (size === 'medium') {
//                 box.style.height = '200px';
//             } else if (size === 'large') {
//                 box.style.height = '300px';
//             }
//         });
//     });
// });



document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box');
    const colorSelectors = document.querySelectorAll('select[id^="color"]');
    const sizeSelectors = document.querySelectorAll('select[id^="size"]');

    // Handle box click: show or hide options and ensure others are closed
    boxes.forEach(box => {
        box.addEventListener('click', function() {
            // Toggle 'open' class on the clicked box
            this.classList.toggle('open');

            // Hide options for all other boxes
            boxes.forEach(otherBox => {
                if (otherBox !== this) {
                    otherBox.classList.remove('open');
                }
            });
        });
    });

    // Prevent box close when clicking inside dropdowns
    colorSelectors.forEach(colorSelect => {
        colorSelect.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the click event from propagating
        });
    });

    sizeSelectors.forEach(sizeSelect => {
        sizeSelect.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the click event from propagating
        });
    });

    // Color and size change handlers
    colorSelectors.forEach(colorSelect => {
        colorSelect.addEventListener('change', function() {
            const boxId = this.id.replace('color', 'box');
            document.getElementById(boxId).style.backgroundColor = this.value;
        });
    });

    sizeSelectors.forEach(sizeSelect => {
        sizeSelect.addEventListener('change', function() {
            const boxId = this.id.replace('size', 'box');
            const box = document.getElementById(boxId);
            const size = this.value;

            if (size === 'small') {
                box.style.height = '200px';
            } else if (size === 'medium') {
                box.style.height = '300px';
            } else if (size === 'large') {
                box.style.height = '400px';
            }
        });
    });
});
