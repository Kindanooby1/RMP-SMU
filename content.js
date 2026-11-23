const schoolID = 927

// Run once for if it's already loaded for some reason
createLinks();

const options = {childList: true, subtree: true};

const observer = new MutationObserver(createLinks);
observer.observe(document, options);

function cleanProfName(profName) {
    const normProfName = profName.normalize();

    const profNameSplit = normProfName.split(" ");
    const newProfNameSplit = []
    for (const word in profNameSplit) {
        if (!(profNameSplit[word].includes("'") || profNameSplit[word].includes("’"))) {
            newProfNameSplit.push(profNameSplit[word]);
        }
    }

    if (newProfNameSplit.length === 0) {
        return normProfName;
    }

    return newProfNameSplit.join(" ");
}

function createLinks() {

    const profList = document.querySelectorAll('a[href^=mailto]')

    for (const prof of profList) {

        if (!(prof.dataset.done)) {
            const profName = cleanProfName(prof.textContent.trim());
            const profLink =
                `https://www.ratemyprofessors.com/search/professors/${schoolID}?q=${encodeURIComponent(profName)}`

            // Anchor with the link and text and stuff
            const profLinkAnchor = document.createElement("a");

            profLinkAnchor.textContent = "Search RMP";
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