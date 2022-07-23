// Gets the input HTML element
var filterInput = document.getElementById('filterInput');
// Adds an event listener
filterInput.addEventListener('keyup', filterPapers);

/**
 * Dynamically filters items in a Webflow CMS based on a search input the user provides.
 *
 * @param {string} cms The CSS class name you've given to the CMS Block in webflow
 * @param {string} cmsID The CSS ID of the CMS Block in webflow.
 * @param {string} filterTag The CSS tag name of the text in the CMS Block you are looking for. 
 * e.g. "Typing 'h1' will select all <h1> headers in each entry within the CMS Block, and will match
 * based on the contents of the h1 tag."
 * 
 */
function ContentFilter(cms, cmsID, filterTag) {
    // Gets the value of the search input
    let filterValue = filterInput.value.toUpperCase();

    // Gets the CMS container within which the items are held
    let container = document.getElementById(cmsID);

    // Gets each of the items within the CMS container
    // TO DO: See if the cmsID can replace cms here
    let li = container.querySelectorAll(`div.${cms}.w-dyn-item`);

    // Loops through the collected items to see if they match the provided query
    for (let i = 0; i < li.length; i++) {
        let j = li[i].getElementsByTagName(filterTag)[0];

        // Displays the collected items only if they match, otherwise it hides them.
        if (j.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}