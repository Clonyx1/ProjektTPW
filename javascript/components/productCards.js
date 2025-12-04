
document.addEventListener("DOMContentLoaded", () => {
    addElement();
});

async function fetchData() {
    const response = await fetch('../javascript/data/productCardData.json');
    const data = await response.json();

    return data;
}


async function addElement() {
    const data = await fetchData();

    const productSectionGrid = document.getElementById('product-section');

    data.forEach(record => {
        let element = document.createElement("div");
        elementClasses = ["product-card", "pd-2", "mr-2"];
        element = addProperties(element, elementClasses);

        //Card heading
        let cardHeading = document.createElement("h3");
        cardHeadingClasses = ["product-card-heading", "pd-t-3", "pd-b-3"];
        cardHeading = addProperties(cardHeading, cardHeadingClasses, record.name);

        //Card text
        let cardText = document.createElement("p");
        cardTextClasses = ["product-card-text", "mr-b-3"];
        cardText = addProperties(cardText, cardTextClasses, record.text);

        //Card price
        const cardPrice = document.createElement("p");
        cardPrice.innerText = record.price + "Kč";
        cardPrice.classList.add("product-card-price");

        //Card image
        const cardPicture = document.createElement("picture");

        const imgSource = document.createElement("source");
        imgSource.srcset = record.imgSrcset;
        imgSource.type = "image/avif";

        const img = document.createElement("img");
        img.src = record.imgSrc;
        img.alt = record.imgAlt;

        cardPicture.appendChild(imgSource);
        cardPicture.appendChild(img);
        cardPicture.classList.add("product-card-img");

        element.appendChild(cardPicture);
        element.appendChild(cardHeading);
        element.appendChild(cardText);
        element.appendChild(cardPrice);

        productSectionGrid.appendChild(element);
    });
}

function addProperties(element, classes, innerText) {
    classes.forEach(c => {
        element.classList.add(c);
    });

    if (innerText) {
        element.innerText = innerText;
    }


    return element;
}