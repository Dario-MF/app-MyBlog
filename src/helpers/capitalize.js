

export const capitalize = (string = '') => {
    let stringArr = string.split(' ');
    stringArr = stringArr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
    return stringArr.join(' ');
};