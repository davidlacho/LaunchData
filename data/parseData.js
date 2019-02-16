module.exports = launchData => launchData.data.launches.map(launch => ({
  name: launch.rocket.name || '',
  agency: launch.lsp.name || '',
  location: launch.location.name || '',
  launchTime: launch.net || '',
  launchWiki: launch.location.wikiURL || launch.location.pads[0].wikiURL || '',
  agencyWiki: launch.lsp.wikiURL || '',
  rocketWiki: launch.rocket.wikiURL || '',
}));