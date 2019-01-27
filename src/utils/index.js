export default class Utils {
  static arrayToObject = array =>
    array.reduce((obj, item) => {
      obj[item.id] = item;
      return obj;
    }, {});
}
