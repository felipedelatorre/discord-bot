module.exports.giveMisions = options => {
  if (options) {
    const mission = (function(mapInitial) {
      switch (mapInitial) {
        case 'f':
          return _factory();
        case 'w':
          return _woods();
        case 'c':
          return _customs();
        case 'i':
          return _interchange();
        case 'r':
          return _reserve();
        case 's':
          return _shoreline();
        case 'l':
          return _lab();
        default:
          return 'unknown option selected';
      }
    })(options);

    return mission;
  }

  return 'Kill Killa';
};

function _factory() {
  const missionList = ['1) Loot Office\n 2) Protect Office\n 3) Extract after timer hits 10 min'];

  return getRandomFromList(missionList);
}

function _woods() {
  const missionList = ['1) Secure Blue Building\n 2) Kill Scav Boss'];

  return getRandomFromList(missionList);
}

function _customs() {
  const missionList = ['1) Loot Dorms and Gas Station', '1) Loot Labby \n 2) Checkout construction site'];

  return getRandomFromList(missionList);
}

function _interchange() {
  const missionList = ['1) Loot Kiba', '1) Loot Techlight if spawn OLI side. Else Kill PMCs. Follow the shots.'];

  return getRandomFromList(missionList);
}

function _reserve() {
  const missionList = ['1) Kill Scav Boss', '1) Bring bolt action sniper. Snipe kill'];

  return getRandomFromList(missionList);
}

function _shoreline() {
  const missionList = [
    '1) Loot your closes Resort Wing',
    '2) Loot outskirt (Cottage, Gas Stations, Power Plant, and Satellite area )',
  ];

  return getRandomFromList(missionList);
}

function _lab() {
  const missionList = ['survive?', 'Yo mamma'];

  return getRandomFromList(missionList);
}

function getRandomFromList(array) {
  return array[Math.floor(Math.random() * array.length)];
}
