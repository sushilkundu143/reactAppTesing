export const isPalidrome = (str) => {
    if (str?.length === 0) return false;
    let reserveStr = "",
      len = str.length;
    for (let i = len - 1; i >= 0; i--) {
      reserveStr += str[i];
    }
    return str === reserveStr;
  };
  