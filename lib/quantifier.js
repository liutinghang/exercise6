module.exports = function (str) {
  // TODO
  const regExp = /^\d+\.(jpg|jpeg)$/;
  return regExp.test(str);
}