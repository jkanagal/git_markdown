const nameInverter = function (name) {
  const honorifics = ['Mr.', 'Mrs.', 'Ms.', 'Dr.'];

  if (name === '') {
    return '';
  }
  if (/\s/.test(name)) {
    return name.replace(/\s/g, "");
  }

  if (name.split(' ').length === 1 && name.includes(honorifics)) {
    return '';
  } else if (name.split(' ').length === 1) {
    const myArr = name.split(' ');
    return myArr[1] + ', ' + myArr[0];
  } else if (name.split(' ').length === 2 && name.includes(honorifics)) {
    const myArr = name.split(' ');
    return myArr[0] + ' ' + myArr[2] + ', ' + myArr[1];
  } else if (name.split(' ').length > 2 && name.includes(honorifics)) {
    const myArr = name.split(' ');
    return myArr[0] + ', ' + myArr[2] + myArr[1];
  }

  if (name === undefined) {
    return 'Error';
  }

  return name;
};

module.exports = nameInverter;



