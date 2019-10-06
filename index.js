const fs = require('fs');
const phones = [];
const emails = [];
function loadContactsList(parse) {
  fs.readFile('file.txt', 'utf8', (err, data) => {
    err ? console.log(err) : parse(data);
  });
}
function parseContactsList(i) {
  myArray = i.split(/(\s+)/).filter(e => {
    return e.trim().length > 0;
  });
  printContactsPhoneList(myArray);
  console.log();
  printContactsEmailList(myArray);
}
function printContactsPhoneList(strNumber) {
  const regex = /[1-9]/g;
  strNumber.forEach(element => {
    if (element.match(regex)) {
      phones.push(element);
    }
  });
  phones.forEach((e, i) => {
    phone = `${++i}) ${e}`.replace('-', '/');
    phone = `${phone.slice(0, '4')}(${phone.slice('4')}`;
    phone = `${phone.slice(0, '8')})${phone.slice('8')}`;
    console.log(phone);
  });
}
function printContactsEmailList(strEmail) {
  strEmail.forEach(element => {
    if (element.includes('@')) {
      emails.push(element);
    }
  });
  emails.forEach((e, i) => {
    email = `${++i}) ${e}`;
    console.log(email);
  });
}
loadContactsList(parseContactsList);
