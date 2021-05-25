//Array of all profiles
const totalProfiles = Array.from(document.querySelectorAll("li.contact-item"));
//Number of profiles to be displayed on each page
const profilesPerPage = 10;
const initialPage = 1;

//Function displays required number of profiles on the page
function displayPage(pageNumber) {
    //First and last profiles on each page
    const startIndex = (pageNumber - 1) * profilesPerPage;
    const endIndex = startIndex + profilesPerPage;
    //Looping through array of all profiles to display suitable profiles
    for (let i = 0; i < totalProfiles.length; i++) {
        if (i >= startIndex && i < endIndex) {
            totalProfiles[i].style.display = '';
         } else {
            totalProfiles[i].style.display = 'none';
         }
    }
}

//Function creates pagination links
function paginateProfiles() {
    //Total number of pages
    const pages = Math.ceil(totalProfiles.length / profilesPerPage);
    //Creating 'ul' element that will contain all pagination links
    const firstDiv = document.querySelector('div');
    const listOfLinks = document.createElement('ul');
    listOfLinks.classList.add('pagination');
    firstDiv.appendChild(listOfLinks);
    
    //Looping through pages to add pagination links
    for (let j = 1; j < pages + 1; j++) {
        listOfLinks.insertAdjacentHTML('beforeend', `<li><a href="#">${j}</a></li>`);
    }
    //Assigning active class to initial page
    document.getElementsByTagName('a')[0].classList.add('active');
    //Array of all anchor links
    const aLinks = Array.from(document.querySelectorAll('a'));
    //Event Listener to display each page with appropriate profiles 
    aLinks.map(aLink => aLink.addEventListener('click', (e) => {
        //Assigning the link text as page number to pass as argument to 'displayPage' function
        let pageNum = e.target.text;
        const pageLinks = Array.from(document.querySelectorAll('.pagination li'));
        //Assigning active class to selected anchor link 
        for (let i = 0; i < pageLinks.length; i++) {
            const anchLink = pageLinks[i].getElementsByTagName('a')[0];
            const aText = anchLink.text;
            if (aText === pageNum) {
                anchLink.classList.add('active');
            } else {
                anchLink.classList.remove('active');
            }
        }
        //Display the page 
        displayPage(pageNum);
    }))   
}

// Initial loading of the page
displayPage(initialPage);
paginateProfiles();