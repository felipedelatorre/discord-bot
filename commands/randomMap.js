module.exports.randomMap = (options) => {
  if (options){
    const prefixes = options.split('');
    const randomPrefixes = prefixes[Math.floor(Math.random() * prefixes.length)];
    const map = (function(color) {
      switch(color) {
        case 'f':
          return "factory";
        case 'w':
          return "woods";
        case 'c':
          return "customs";
        case 'i':
          return "interchange";
        case 'r':
          return "reserve";
        case 's':
          return "shoreline";
        case 'l':
          return "lab";
        default:
          return "unknown option selected";
      }
    })(randomPrefixes);

    return map;
  }
    const maps = ["factory", "woods", "customs", "interchange", "reserve", "shoreline", "lab"];
    const result = maps[Math.floor(Math.random() * maps.length)];
    return result;
}