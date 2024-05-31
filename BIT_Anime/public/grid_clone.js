function cloner(link, name, num) {
    let originalDiv = document.getElementById("cloner");
    
    // Clone the div element
    let clonedDiv = originalDiv.cloneNode(true);
    clonedDiv.setAttribute("id", `clone_${num}`);
    clonedDiv.setAttribute("class", "card_card");

    // Set the image source for the cloned element based on the num parameter
    clonedDiv.querySelector(".card_hov").setAttribute("src", link);
    clonedDiv.querySelector(".card__title").innerHTML = name;
    // Append the cloned element to the desired location
    let container = document.getElementsByClassName("grid_grid");
    if (container.length > 0) { // Check if there is at least one element with the class "grid_grid"
      container[0].appendChild(clonedDiv); // Append to the first element with the class name "grid_grid"
    }
}

// Correctly calling the function with three arguments
cloner('https://images.alphacoders.com/849/thumb-440-849984.webp', 'Akame ga Kill', 0);
cloner('https://images7.alphacoders.com/846/846276.jpg', 'Code Geass', 1);
cloner('https://images.alphacoders.com/846/thumb-440-846361.webp', 'Date a Live', 2);
cloner('https://images8.alphacoders.com/134/thumb-440-1349635.webp', 'Eminence in Shadow', 3);
cloner('https://images8.alphacoders.com/750/thumbbig-750477.webp', 'Date a Live', 4);
cloner('https://images.alphacoders.com/857/thumb-440-857909.webp', 'Re Zero', 5);
cloner('https://images7.alphacoders.com/599/thumbbig-599379.webp', 'Sword Art Online', 6);
cloner('https://images7.alphacoders.com/737/thumb-440-737137.webp', 'No Game No Life', 7);
cloner('https://images3.alphacoders.com/838/thumb-440-838037.webp', 'High School DxD', 8);
cloner('https://images6.alphacoders.com/131/thumbbig-1319754.webp', 'Bluelock', 9);