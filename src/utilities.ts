export default class Utils {
  static isEmptyOrNull(item){
      console.log(item );
      console.log(item.length == 0);
      console.log( item === null);
      console.log(item===undefined);
        console.log(item.length == 0 || item === null|| item===undefined)
        return item.length == 0 || item === null|| item===undefined;
    }
}