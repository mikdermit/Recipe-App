/**
 * This is the data that is initially loaded.
 * Please do not modify this file.
 */

const RecipeData = [
    {
        title: "Tuna Poke with Mango",
        tags: ["Hawaiian"],
        photo: "https://www.noracooks.com/wp-content/uploads/2022/06/vegan-poke-bowl-3.jpg",
        ingredients: [
            "1 package of sushi grade tuna.",
            "1 cup cooked quinoa ½ avocado, sliced.",
            "½ mango, cubed.",
            "1 shredded carrot.",
            "1 small sliced cucumber.",
            "poke sauce."
        ],
        preparation: [
            "Chop tuna into cubes.",
            "Toss with 1 tbsp sesame oil and 1 tbsp tamari. Set aside.",
            "Layer your poke bowl starting with quinoa.",
            "Whisk all poke sauce ingredients in a bowl and pour over the poke bowl.",
            "Garnish with sesame seeds and furikake.",
            "Top with chopped scallions."
        ]
    },
    {
        title: "Guacamole",
        tags: ["Mexican", "Vegetarian"],
        photo: "https://www.savorynothings.com/wp-content/uploads/2018/04/easy-guacamole-image-hero.jpg",
        ingredients: [
            "3 ripe avocados.",
            "¾ cup finely chopped Roma tomato.",
            "2 serrano chiles very finely chopped (seeded and deveined).",
            "3 heaping tablespoons of finely chopped onion.",
            "3 tablespoons of minced cilantro.",
            "Salt to taste"
        ],
        preparation: [
            "Remove the flesh of the avocados.",
            "Mash the avocados with the back of a fork.",
            "Add the other ingredients and incorporate evenly.",
            "Add salt to taste."
        ]
    }
];

const RecipeTags = ['Italian', 'Chinese', 'American', 'Mexican', 'Hawaiian', 'Indian', 'Thai', 'Japanese', 'Koren', 'Greek', 'Mediterranean', 'Vegetarian'].map(
    item => ({ label: item, value: item })
  );

  export {RecipeData, RecipeTags}


