const cleanData = getKeys => {

    let cleanedData = getKeys;
    return cleanedData = cleanedData.filter(item => item.guid !== null);
}

export {
    cleanData
}