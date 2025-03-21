document.addEventListener("DOMContentLoaded", () => {
    const tooltip = document.getElementById("tooltip");
    const characters = document.querySelectorAll(".character");

    characters.forEach(character => {
        character.addEventListener("mousemove", (e) => {
            const name = character.getAttribute("data-name");
            const description = character.getAttribute("data-description");

            tooltip.innerHTML = `<strong>${name}</strong><br>${description}`;
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
            tooltip.style.visibility = "visible";
            tooltip.style.opacity = "1";
        });

        character.addEventListener("mouseleave", () => {
            tooltip.style.visibility = "hidden";
            tooltip.style.opacity = "0";
        });
    });
});
