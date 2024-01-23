# Pokédex

## Description

Pokédex is a Single Page Application (SPA) developed in React.js that allows users to explore detailed information about each Pokémon, just like in Pokémon games and anime.

## Features

- Theme toggler between Light and Dark themes
- Pokémon search by name and ID
- Pokémon filtering by type
- Viewing details of each Pokémon, including moves and abilities

## Technologies Used

- [React.js](https://react.dev/): Chosen for its efficiency in creating SPAs
- [PokeAPI](https://pokeapi.co/api/v2/)
- [Vanilla Extract](https://vanilla-extract.style/): Adopted for styling components and creating the Theme Toggler.
- [React Router](https://reactrouter.com/en/main): Used for navigation between application pages.

## Decisions Made

- **Figma Prototype**: I created the UI prototype in Figma, which made my workflow smoother as I knew how the design of my application would look.

- **PokéAPI**: This API is designed in a simple and easy-to-use way, with a wide variety of data and images for each Pokémon. I love how the game arts were pixelated, so I decided to use this aesthetic despite the ease of switching to any other.

- **Vanilla Extract**: I used this library to style the components for its practicality and being a Zero-runtime Stylesheets, providing better performance than other libraries.

- **Theme Toggler**: I created themes to improve the user experience, allowing them to switch between Light and Dark themes.

- **React Router**: I used this library to facilitate navigation between different pages of the application.

## Screenshots

Main Page

<img src='./public/pokedex-loadmore-filter.gif'><br>

Pokémon Details Page

<img src='./public/pokemon-details.gif'><br>

Theme Toggler

<img src='./public/pokedex-theme-toggler.gif'>

## How to Run the Project

1. Clone the repository to your computer:
   ```bash
   git clone https://github.com/jricardocarreira/pokedex
2. Navigate to the cloned project directory:
   ```bash
   cd pokedex
3. Install dependencies:
   ```bash
   npm install
4. Start the application:
   ```bash
   npm start
5. Open your browser and go to http://localhost:3000 to view the Pokédex!

## Contact

<a href="https://instagram.com/jricardocarreira" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
<a href = "mailto:jricardocarreira@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/jricardocarreira" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
 
 ## Additional Resources
  ### Figma
- [Figma Pokédex Prototype]()
 ### Vanilla Extract
- [Vanilla Extract documentation](https://vanilla-extract.style/documentation/getting-started)
- [Using Vanilla Extract with React](https://youtu.be/eKfPRK_rOfc?si=MENdg94FTfrSSZBC)
- [Theming a React Application with Vanilla Extract](https://formidable.com/blog/2021/vanilla-extract/)
### PokéAPI
- [PokéAPI Documentation](https://pokeapi.co/docs/v2)
- [PokéAPI Sprites](https://github.com/PokeAPI/sprites)