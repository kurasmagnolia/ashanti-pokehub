let slideIndex = 0;

function showSlides(hideArrows = false) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Hide arrows if specified
  if (hideArrows) {
    document.querySelectorAll(".arrow-container").forEach((arrow) => {
      arrow.style.display = "none";
    });
  } else {
    document.querySelectorAll(".arrow-container").forEach((arrow) => {
      arrow.style.display = "block";
    });
  }

  // Display the current slide with a fade effect
  slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
  slideIndex += n;

  let slides = document.getElementsByClassName("mySlides");

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  showSlides();
}

// JavaScript for expanding images

// Array to store different contexts for each image
const imageContexts = [
  "Name: Pikachu <br> Type: Electric <br> Abilities: Static: Pikachu possesses the ability to generate static electricity. Any contact with Pikachu may result in paralysis for its opponents due to this electrifying power. <br> Height: 0.4 meters (1 foot 4 inches) <br> Weight: 6.0 kilograms (13.2 pounds) <br> Description: Pikachu, an Electric-type Pokémon, is a small, yellow creature standing at a height of 0.4 meters and weighing 6.0 kilograms. With its iconic rosy cheeks, pointy ears, and endearing appearance, Pikachu has become a symbol of the Pokémon franchise. Known for its playful and friendly nature, Pikachu possesses the ability, 'Static', enabling it to potentially paralyze opponents upon physical contact. This combination of cuteness and formidable abilities has made Pikachu a fan favorite, capturing the hearts of trainers and fans worldwide.",

  "Name: Mega Charizard X <br> Type: Fire/Dragon <br> Abilities: - Possesses enhanced Fire-type abilities with increased power and range. <br> - Gains the Dragon typing, making it resistant to certain types of attacks. <br> - Showcases increased speed and strength compared to its regualr form. <br> Height: Varies <br> Weight: Varies <br> Description: Mega Charizard X is an evolved form of Charizard achieved through Mega Evolution. In this powerful state, Charizard undergoes a remarkable transformation, gaining a sleek black apperance with blue flame. It becomes a formidable Fire/Dragon type Pokémon, combining the strengths of both types. Mega Charizard X is known for its intensified firepower, agility, and the ability to unleash devastating attacks that make it a force to be reckoned with in battles.",

  "Name: Greninja <br> Type: Water/Dark <br> Abilities: Torrent (boosts Water-type moves when Greninja's HP is low) <br> - Protean (changes Greninja's type to the type of move it's about to use) <br> Height: Approximately 1.5 meters (4 feet 11 inches) <br> Weight: Around 40 kilograms (88.2) <br> Description: Greninja is a sleek and ninja-like Pokémon with a unique Water/Dark typing. Known for its exceptional speed and agility, Greninja is a formidable opponent in battles. Its ability to transform its type with Protean keeps opponents guessing, while the Torrent ability enhances the power of its Water-type moves when it's in a pinch. Greninja's mysterious and cool demeanor, combined with its powerful moves, make it a fan-favorite in the Pokémon world.",

  "Name: Eevee <br> Type: Normal <br> Abilities: Run Away (allows Eevee to escape from wild Pokémon battles) <br> - Adaptability (increases the effectiveness of Eevee's attacks) <br> Height: Approximately: 0.3 meters (1 foot) <br> Weight: Around 6.5 kilograms (14.3 pounds) <br> Description: Eevee is an adorable and versatile Pokémon with a Normal typing. What sets Eevee apart is its incredible adaptability, both in terms of its appearance and its evolution options. Eevee has captured the hearts of trainers worldwide with its cute and fluffy appearance. Known for its friendly demeanor and potential to evolve into various different forms, Eevee is a beloved and iconic Pokémon in the Pokémon universe.",

  "Name: Umbreon <br> Type: Dark <br> Abilities: Synchronize (passes on status conditions to Pokémon that cause a status condition to Umbreon) <br> - Inner Focus (prevents flinching) <br> Height:  Approximately 1 meter (3 feet 3 inches) <br> Weight: Around 27 kilograms (59.5 pounds) <br> Description: Umbreon, the Dark-type Pokémon, is known for its sleek and mysterious appearance. Evolving from Eevee through friendship, Umbreon is characterized by its deep black fur and golden rings that adorn its body. With a calm and reserved demeanor, Umbreon is a loyal companion to trainers who have built a strong bond with their Eevee. Its Dark typing adds an element of mystery to its personality, making it a fascinating and sought-after Pokémon in the Pokémon world.",

  "Name: Lucario <br> Type: Fighting/Steel <br> Abilities: Steadfast (raises Speed stat each time Lucario flinches) <br> - Inner Focus (prevents flinching) <br> Height: Approximately 1.2 meters (3 feet 11 inches) <br> Weight: Around 54 kilograms (119 pounds) <br> Description: Lucario, a Fighting and Steel-type Pokémon, exudes strength and grace. Renowned for its aura-sensing abilities, Lucario can detect the energy of living beings and understand their feelings. With a sleek, blue-and-black fur design, Lucario combines the power of martial arts with the durability of steel. Trainers often seek Lucario as a partner for its loyalty, combat prowess, and the unique aura powers it brings to battles. Evolving from Riolu through friendship, Lucario embodies the perfect balance between might and sensitivity.",

  "Name: Mewtwo <br> Type: Psychic <br> Abilities: Pressure (forces opponents to use more PP) <br> - Unnerve (prevents opposing Pokémon from using their held Berries) <br> Height: Approximately 2 meters (6 feet 7 inches) <br> Weight: Around 122 kilograms (269 pounds) <br> Description: Mewtwo, a legendary Psychic-type Pokémon, stands as an epitome of psychic prowess. Created through genetic manipulation, Mewtwo possesses immense psychic abilities, granting it telepathic and telekinetic powers. Its sleek, purple appearance, coupled with a highly intelligent demeanor, makes Mewtwo an enigmatic and formidable presence. As a genetically enhanced Pokémon, Mewtwo is sought after for its unrivaled psychic strength, capable of bending spoons and unleashing devastating psychic attacks. Trainers who seek the extraordinary often find Mewtwo to be an awe-inspiring partner in their Pokémon journeys.",

  "Name: Gengar <br> Type: Ghost/Poison <br> Abilities: Levitate (renders it immune to Ground-type moves) <br> Height: Approximately 1.8 meters (4 feet 11 inches) <br> Weight: Around 40.5 kilograms (89 pounds) <br> Description: Gengar, a mischievous Ghost-type Pokémon, exudes an air of eerie charm. Its sinister grin and shadowy presence make it a captivating and enigmatic Pokémon. Gengar is known for its ability to slip through walls and for its mischievous nature, often playing pranks on unsuspecting humans and Pokémon alike. As a Ghost-type, Gengar possesses a wide array of haunting moves, making it a formidable opponent in battles. Its levitating ability adds an extra layer of elusiveness, making it a tricky adversary to pin down. Trainers with a penchant for the mysterious are drawn to Gengar's ghostly allure, making it a popular choice among those who embrace the darker side of the Pokémon world.",

  "Name: Arceus <br> Type: Normal <br> Abilities: Multitpe (allows it to change its type depending on the Plate or Z-Crystal it holds) <br> Height: Approximately 3.2 meters (10 feet 6 inches) <br> Weight: Around 320 kilograms (705.5 pounds) <br> Description: Arceus, often revered as the Alpha Pokémon, stands as a majestic and mythical figure in the Pokémon world. As a Normal-type Pokémon, Arceus is unique in its ability to adapt and wield various types of moves, thanks to its Multitype ability. Legend has it that Arceus shaped the Pokémon universe and is said to have created the Sinnoh region along with the Legendary trio Dialga, Palkia, and Giratina. Its towering presence and divine aura make it a symbol of power and creation, attracting trainers who seek the extraordinary. Arceus is not only a potent force in battles but also a symbol of the vast, unexplored mysteries within the Pokémon realm.",

  "Name: Ceruledge <br> Type: Ice/Flying <br> Abilities: Frosty Aura (reduces the Speed stat of opposing Pokémon on the field) <br> Height: Approximately 1.8 meters (5 feet 11 inches) <br> weight: Around 48 kilograms (105.8 pounds) <br> Description: Ceruledge, a captivating combination of Ice and Flying types, takes flight with grace and power. Known for its Frosty Aura ability, Ceruledge has the ability to chill the air around it, slowing down opposing Pokémon on the battlefield. Its sleek, icy wings and streamlined form make it a mesmerizing sight in the frosty skies. Ceruledge is often associated with wintry landscapes, showcasing the beauty and strength of Pokémon in the diverse regions they inhabit. As trainers embark on their journeys, encountering Ceruledge adds a touch of elegance and strategic prowess to their Pokémon adventures.",
];

// Add a variable to track whether the image is expanded
let isImageExpanded = false;

// Function to expand the image
function expandImage(index) {
  let expandedContainer = document.getElementById("expanded-container");
  let expandedImage = document.getElementById("expanded-image");
  let expandedContext = document.getElementById("expanded-context");
  let slides = document.getElementsByClassName("mySlides");

  // Hide arrows in the background slideshow
  showSlides(true);

  // Ensure that the index is within a valid range
  if (index >= 0 && index < slides.length) {
    // Get the image and context for the selected index
    let selectedSlide = slides[index];
    let selectedImage = selectedSlide.querySelector("img");

    // Set the expanded image source
    expandedImage.src = selectedImage.src;

    // Set the expanded context
    expandedContext.innerHTML = imageContexts[index]; // Use the correct index variable

    // Display the expanded container
    expandedContainer.style.display = "flex";

    // Hide the newsletter input field and the "Sign Up" button
    document.getElementById("newsletter-section").style.display = "none";
  }
}

// Function to close the expanded image
function closeExpandedImage() {
  let expandedContainer = document.getElementById("expanded-container");
  expandedContainer.style.display = "none";

  // Show arrows in the background slideshow
  showSlides();

  // Show the newsletter input field and the "Sign Up" button
  document.getElementById("newsletter-section").style.display = "flex";
}

showSlides();
