const convertValidString = (obj) => {
  if (obj === null) {
    return "-";
  } else {
    return obj;
  }
};

const convertValidAddressString = (address1, address2) => {
  if (address1 === null) {
    return "-";
  } else {
    if (address2 === null) {
      return address1;
    } else {
      return `${address1} ${address2}`;
    }
  }
};

export { convertValidAddressString };
export default convertValidString;
