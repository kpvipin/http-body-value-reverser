module.exports = () => {
  return function (req, res, next) {
    for (var key in req.body) {
      if (req.body.hasOwnProperty(key)) {
        req.body[key] = reverseString(req.body[key]);
      }
    }
    next();
  }
}

reverseString = (string) => {
  //Split the string to array, reverse the array and then join it back to convert to string
  return string.split("").reverse().join("");
}
