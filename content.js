setTimeout(test_emails, 15000); // Hard set delay for now. need to set better later

function test_emails() {

    const profList = document.querySelectorAll('a[href^=mailto]')

    for (const prof of profList) {
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
    }
}