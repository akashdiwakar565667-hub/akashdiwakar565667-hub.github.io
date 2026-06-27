const glow = document.createElement("div");

glow.className = "mouse-glow";
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

// =====================
// Movie Data
// =====================

const movies = [
    {{
    title: "Interstellar",
    rating: "8.7",
    image: "assets/posters/"
}
    },
    {
        title: "Inception",
        rating: "8.8",
        image: "https://placehold.co/300x450?text=Inception"
    },
    {
        title: "The Dark Knight",
        rating: "9.0",
        image: "https://placehold.co/300x450?text=Dark+Knight"
    },
    {
        title: "Your Name",
        rating: "8.4",
        image: "https://placehold.co/300x450?text=Your+Name"
    }
];

const container = document.getElementById("movie-container");

if (container) {

    container.innerHTML = "";

    movies.forEach(movie => {

        container.innerHTML += `
            <div class="movie-card">

                <img src="${movie.image}" alt="${movie.title}">

                <h3>${movie.title}</h3>

                <p>⭐ ${movie.rating}</p>

                <button>Watch</button>

            </div>
        `;

    });

}
