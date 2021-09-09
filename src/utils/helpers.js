const replaceWhiteSpaces = (string, character) => {
    return string.replace(/\s/g, character);
};

const replaceHyphen = (string, character) => {
    return string.replace(/-/g, character);
};

export { replaceWhiteSpaces, replaceHyphen };
