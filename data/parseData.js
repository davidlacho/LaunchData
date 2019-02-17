const launchData = ({ data }) => data.launches.map((launch) => {
  let image = launch.rocket.imageURL;
  if (image === 'Array' || image === '') {
    image = 'https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png';
  }
  return ({
    id: launch.id,
    name: launch.rocket.name || '',
    img: image,
    agency: launch.lsp.name || '',
    location: launch.location.name || '',
    launchTime: launch.net || '',
    launchWiki: launch.location.wikiURL || launch.location.pads[0].wikiURL || '',
    agencyWiki: launch.lsp.wikiURL || '',
    rocketWiki: launch.rocket.wikiURL || '',
  });
});

const rocketData = ({ data }) => {
  const rockets = {};

  data.launches.forEach((launch) => {
    let image = launch.rocket.imageURL;
    if (image === 'Array' || image === '') {
      image = 'https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png';
    }
    rockets[launch.id] = {
      name: launch.rocket.name || '',
      img: image,
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
