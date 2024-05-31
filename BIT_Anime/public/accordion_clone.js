function cloner(link, name, num) {
    let originalDiv = document.getElementById("acc");
    
    // Clone the div element
    let clonedDiv = originalDiv.cloneNode(true);
    clonedDiv.setAttribute("id", `acc_${num}`);
    clonedDiv.setAttribute("class", "card");

    // Set the image source for the cloned element based on the num parameter
    clonedDiv.querySelector(".img_alpha").setAttribute("src", link);
    clonedDiv.querySelector(".title").innerHTML = name;
    // Append the cloned element to the desired location
    let container = document.getElementsByClassName("container");
    if (container.length > 0) { // Check if there is at least one element with the class "grid_grid"
      container[0].appendChild(clonedDiv); // Append to the first element with the class name "grid_grid"
    }
}

// Correctly calling the function with three arguments
cloner('https://images2.alphacoders.com/533/533009.jpg', 'Naruto', 0);
cloner('https://images6.alphacoders.com/629/629544.jpg', 'Tokyo Ghoul', 1);
cloner('https://images8.alphacoders.com/132/1329943.jpeg', 'Demon Slayer', 2);
cloner('https://images.alphacoders.com/131/1311951.jpg', 'Oshi No Ko', 3);
cloner('https://images5.alphacoders.com/133/1337369.png', 'Jujutsu Kaisen', 4);
cloner('https://images6.alphacoders.com/851/851069.png', 'One Piece', 5);
cloner('https://images.alphacoders.com/736/736461.png', 'Your Name', 6);