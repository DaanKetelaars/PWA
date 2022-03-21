import {
    validValue,
    inValidValue
} from "./valueState.js"

const getData = data => {

    const artWorks = data.artObjects;
    artWorks.length > 0 ? validValue() : inValidValue();

    let getKeys = artWorks.map(item => {
        const guid = item.webImage;
        const title = item.title;
        const longTitle = item.longTitle;
        const maker = item.principalOrFirstMaker;
        const id = item.id;
        console.log(id);
        return {
            guid,
            id,
            title,
            longTitle,
            maker,
        };
    })

    return getKeys;
}

export {
    getData,
}