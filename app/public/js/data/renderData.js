const renderData = cleanedData => {
    const section = document.querySelector("section");
    const ul = document.createElement("ul");
    section.appendChild(ul)

    const newData = cleanedData;
    cons =
        newData.map(item => {
            const figures = `
        <a href="/artwork/${item.id}">
            <figure>
                <figcaption>
                <h2>${item.title}</h2>
                <p>${item.maker}</p>
                </figcaption>
                <img src=${item.guid.url + 1500} alt="${item.longTitle}">
            </figure>
        </a>
    `;
            const li = document.createElement('li');
            li.innerHTML = figures;
            ul.appendChild(li);
        })
    return newData
}

export {
    renderData
}