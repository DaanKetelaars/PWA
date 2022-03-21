const routing = newData => {

    const sections = document.querySelectorAll('section');
    const section = document.querySelector(`section[data-route="detail"]`);
    const ul = document.createElement("ul");
    section.appendChild(ul)

    routie({
        'artwork:id': (id) => {
            while (ul.firstChild) {
                ul.removeChild(ul.firstChild);
            }
            let filterOnID = newData.filter(item => item.id === id);
            filterOnID.forEach(item => {
                const figures = `
                    <figure>
                        <figcaption>
                        <h2>${item.title} - ${item.maker}</h2>
                        <p>${item.longTitle}</p>
                        </figcaption>
                        <img src="${item.guid.url + 1500}" alt="${item.longTitle}">
                    </figure>
            `;
                const li = document.createElement('li');
                li.innerHTML = figures;
                ul.appendChild(li);
            })
            updateUI("detail");
        },
        " ": () => {
            updateUI("normal");
        }
    });

    function updateUI(route) {
        sections.forEach((item) => {
            item.classList.add("disabled");
        });
        let activeSection = document.querySelector(`[data-route=${route}]`);
        activeSection.classList.remove("disabled");
    }

    return newData
}

export {
    routing
}