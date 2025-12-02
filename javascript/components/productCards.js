
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
        const element = document.createElement("div");
        element.classList.add("product-card");
        element.classList.add("pd-2");
        element.classList.add("mr-2");

        //Card heading
        const cardHeading = document.createElement("h3");
        cardHeading.innerText = record.name;
        cardHeading.classList.add("product-card-heading");
        cardHeading.classList.add("pd-t-3");
        cardHeading.classList.add("pd-b-3");

        //Card text
        const cardText = document.createElement("p");
        cardText.innerText = record.text;
        cardText.classList.add("product-card-text");
        cardText.classList.add("mr-b-3");

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

        cardPicture.appendChild(imgSource);
        cardPicture.appendChild(img);
        cardPicture.classList.add("product-card-img");

        element.appendChild(cardPicture);
        element.appendChild(cardHeading);
        element.appendChild(cardText);
        element.appendChild(cardPrice);

        productSectionGrid.appendChild(element);
    });
    /*
    //Main div of the card
    const element = document.createElement("div");
    element.classList.add("product-card");
    element.classList.add("pd-2");
    element.classList.add("mr-2");
    //Card heading
    const cardHeading = document.createElement("h2");
    cardHeading.innerText = "Produkt";
    cardHeading.classList.add("product-card-heading");
    cardHeading.classList.add("pd-t-3");
    cardHeading.classList.add("pd-b-3");
    //Card text
    const cardText = document.createElement("p");
    cardText.innerText = "Poctivý domácí chléb s křupavou kůrkou a měkkou střídou. Pečený s láskou z kvalitní mouky a tradičního kvásku.";
    cardText.classList.add("product-card-text");
    cardText.classList.add("mr-b-3");
    //Card price
    const cardPrice = document.createElement("p");
    cardPrice.innerText = "25Kč,-";
    cardPrice.classList.add("product-card-price");
    //Card image
    const cardImg = document.createElement("img");
    cardImg.src = "obrazky/bageta.avif";
    cardImg.classList.add("product-card-img");

    element.appendChild(cardImg);
    element.appendChild(cardHeading);
    element.appendChild(cardText);
    element.appendChild(cardPrice);


    main.appendChild(element);*/
}