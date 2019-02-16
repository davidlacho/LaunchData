const launchData = ({ data }) => data.launches.map(launch => ({
  id: launch.id,
  name: launch.rocket.name || '',
  agency: launch.lsp.name || '',
  location: launch.location.name || '',
  launchTime: launch.net || '',
  launchWiki: launch.location.wikiURL || launch.location.pads[0].wikiURL || '',
  agencyWiki: launch.lsp.wikiURL || '',
  rocketWiki: launch.rocket.wikiURL || '',
}));

const rocketData = ({ data }) => {
  const rockets = {};
  data.launches.forEach((launch) => {
    rockets[launch.id] = {
      name: launch.rocket.name || '',
      agency: launch.lsp.name || '',
      location: launch.location.name || '',
      launchTime: launch.net || '',
      launchWiki: launch.location.wikiURL || launch.location.pads[0].wikiURL || '',
      agencyWiki: launch.lsp.wikiURL || '',
      rocketWiki: launch.rocket.wikiURL || '',
    };
  });
  return rockets;
};

module.exports = {
  launchData,
  rocketData,
};
