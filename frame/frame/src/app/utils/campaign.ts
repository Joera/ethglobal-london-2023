export function getCampaignDataFromURL(url: URL) {
  return {
    campaignId: url.pathname.split("/")[1],
    imageId: url.pathname.split("/")[2],
  };
}
