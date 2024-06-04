const pokemonList = document.querySelector("ul.cards");

for (i = 0; i < data.length; i++) {
  // creating the li element
  const listItem = document.createElement("li");
  listItem.classList = "card";

  // creating the h2
  const heading = document.createElement("h2");
  heading.classList = "card--title";
  heading.textContent = data[i].name;

  // adding the h2 as a child of li
  listItem.appendChild(heading);

  // creating the img
  const image = document.createElement("img");
  image.classList = "card--img";

  image.setAttribute("width", "256");

  image.setAttribute(
    "src",
    data[i].sprites.other["official-artwork"].front_default
  );

  // adding the img as a child of the li
  listItem.appendChild(image);

  // creating the list for pokemon stats
  const statsList = document.createElement("ul");
  statsList.classList = "card--text";

  // loop over pokemon stats
  for (j = 0; j < data[i].stats.length; j++) {
    // create li for individual stat
    const statListItem = document.createElement("li");
    // create text for stat
    const text =
      data[i].stats[j].stat.name.toUpperCase() +
      ": " +
      data[i].stats[j].base_stat;
    statListItem.textContent = text;

    // adding li ul
    statsList.appendChild(statListItem);
  }

  // adding ul to li
  listItem.appendChild(statsList);

  // adding the li as a child of the ul
  pokemonList.appendChild(listItem);
}
