// Run once for if it's already loaded for some reason
createLinks();

const options = {childList: true, subtree: true};

const observer = new MutationObserver(createLinks);
observer.observe(document, options);

function createLinks() {

    const profList = document.querySelectorAll('a[href^=mailto]')

    for (const prof of profList) {

        if (!(prof.dataset.done)) {
            const prof_name = prof.textContent.trim();
            const profLink = "https://google.com"; // Need to change link per prof

            // Anchor with the link and text and stuff
            const profLinkAnchor = document.createElement("a");

            profLinkAnchor.textContent = "Link to google"; // Prob change to "RMP" or smth later
            profLinkAnchor.setAttribute("href", profLink);
            profLinkAnchor.setAttribute("target", "_blank"); // Opens link in new tab
            profLinkAnchor.setAttribute("rel", "noopener noreferrer") // Security

            // Div to parent anchor so that it's on a new line
            const profLinkSpace = document.createElement("div");
            profLinkSpace.appendChild(profLinkAnchor);

            prof.after(profLinkSpace);

            prof.dataset.done = true;
        }
    }
}