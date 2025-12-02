document.addEventListener("DOMContentLoaded", () => {

})

async function fetchData() {
    const response = await fetch('../javascript/data/openPositionCardData.json');
    const data = await response.json();

    return data;
}

async function addElement() {
    const data = await fetchData();

    const openPositionSection = document.getElementById('open-position-section');

    data.forEach(record => {
        //Open position card div
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("open-position-card");
        cardDiv.classList.add("pd-4");
        cardDiv.classList.add("mr-b-4");

        //Create card heading div + h3 inside
        const cardHeadingDiv = createCardHeading(record);

        //Create show more btn with div
        const showMoreDiv = createShowMoreBtn();
        cardHeadingDiv.appendChild(showMoreDiv);

        //Create position summary div

        cardDiv.appendChild(cardHeadingDiv);

    });
}

function createCardHeading(record) {
    //Card heading div
    const cardHeadingDiv = document.createElement("div");
    cardHeadingDiv.classList.add("open-position-card-heading");
    cardHeadingDiv.classList.add("mr-l-2");
    cardHeadingDiv.classList.add("mr-b-4");

    //Card heading
    const headingDiv = document.createElement("div");
    const cardHeading = document.createElement("h3");
    cardHeading.innerText = record.name;

    headingDiv.appendChild(cardHeading);
    cardHeadingDiv.appendChild(headingDiv);

    return cardHeadingDiv;
}

function createShowMoreBtn() {
    //Show more button
    const showMoreDiv = document.createElement("div");
    showMoreDiv.classList.add("open-position-card-show-more-button-wrap");

    //Create button
    const showMoreBtn = document.createElement("button");
    showMoreBtn.classList.add("icon");
    showMoreBtn.classList.add("icon--lg");
    showMoreBtn.classList.add("open-position-card-show-more-button");
    showMoreBtn.setAttribute("aria-label", "Zobrazit obsah karty");

    //Create svg
    const svgElement = createSvg("http://www.w3.org/2000/svg", "3 0 448 512", "M0 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm168 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm224-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z");

    //Add svg into button
    showMoreBtn.appendChild(svgElement);

    //Append button to wrap div
    showMoreDiv.appendChild(showMoreBtn);

    return showMoreDiv;
}

function createSvg(svgNS, viewBox, path){
    const svgElement = document.createElementNS(svgNS, "svg");

    svgElement.setAttribute("xmlns", svgNS);
    svgElement.setAttribute("viewBox", viewBox);

    const pathElement = document.createElementNS(svgNS, "path");
    pathElement.setAttribute("d", path);

    //Add path into svg
    svgElement.appendChild(pathElement);

    return svgElement;
}

function createPositionSummaryDiv(record){
    const positionSummaryWrap = document.createElement("div");
    positionSummaryWrap.classList.add("open-position-card-summary-wrap");

    const positionCardSummaryDiv = document.createElement("div");
    positionCardSummaryDiv.classList.add("open-position-card-summary");

    const pEmployment = document.createElement("p");
    pEmployment.classList.add("icon");
    pEmployment.classList.add("icon--xs");
    pEmployment.classList.add("pd-r-2");
    pEmployment.innerText = record.employment;
    //svg for employment p
    const employmentSvg = createSvg("http://www.w3.org/2000/svg", "0 0 512 512", "M328 112l-144 0-37.3-74.5c-1.8-3.6-2.7-7.6-2.7-11.6 0-14.3 11.6-25.9 25.9-25.9L342.1 0c14.3 0 25.9 11.6 25.9 25.9 0 4-.9 8-2.7 11.6L328 112zM169.6 160l172.8 0 48.7 40.6C457.6 256 496 338 496 424.5 496 472.8 456.8 512 408.5 512l-305.1 0C55.2 512 16 472.8 16 424.5 16 338 54.4 256 120.9 200.6L169.6 160zM323.9 284.1c-9.4-9.4-24.6-9.4-33.9 0l-33.9 33.9-33.9-33.9c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l33.9 33.9-33.9 33.9c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l33.9-33.9 33.9 33.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-33.9-33.9 33.9-33.9c9.4-9.4 9.4-24.6 0-33.9z");
    employmentSvg.classList.add("pd-2");
    pEmployment.appendChild(employmentSvg);
    positionSummaryWrap.appendChild(positionCardSummaryDiv);

    const pSalary = createSvg("http://www.w3.org/2000/svg", "0 0 512 512", "M328 112l-144 0-37.3-74.5c-1.8-3.6-2.7-7.6-2.7-11.6 0-14.3 11.6-25.9 25.9-25.9L342.1 0c14.3 0 25.9 11.6 25.9 25.9 0 4-.9 8-2.7 11.6L328 112zM169.6 160l172.8 0 48.7 40.6C457.6 256 496 338 496 424.5 496 472.8 456.8 512 408.5 512l-305.1 0C55.2 512 16 472.8 16 424.5 16 338 54.4 256 120.9 200.6L169.6 160zM323.9 284.1c-9.4-9.4-24.6-9.4-33.9 0l-33.9 33.9-33.9-33.9c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l33.9 33.9-33.9 33.9c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l33.9-33.9 33.9 33.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-33.9-33.9 33.9-33.9c9.4-9.4 9.4-24.6 0-33.9z");
}

