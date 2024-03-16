import { NextRequest, NextResponse } from "next/server"
import { getConnectedAddressForUser } from "../utils/fc";
import { mintNft, balanceOf } from "../utils/mint";

import { PinataFDK } from "pinata-fdk";

const fdk = new PinataFDK({
  pinata_jwt: process.env.PINATA_JWT as string,
  pinata_gateway: process.env.GATEWAY_URL as string,
});

export async function GET(req: NextRequest, res: NextResponse) {
  /*
    This API returns the frame metadata
  */ 
  try {
    /* 
    TODO: Use a campaignId and imageId query params instead of hardcoding them
    const url = new URL(req.url)
    const { campaignId, imageId } = getCampaignDataFromURL(url);
    */
    const campaignId = '1'; // Campaign id in the end product will be the smart contract address of the campaign's NFT
    const imageId = 1;
    /*
    TODO: We should only have the Mint button, if the campaign's milestone has been reached. Otherwise, it should just be an info image about the current state;
    */
    const frameMetadata = await fdk.getFrameMetadata({
      post_url: `${process.env.BASE_URL}/frame/${campaignId}/${imageId}`,
      buttons: [{ label: "Mint", action: "post" }],
      aspect_ratio: "1:1",
      image: {
        url: `${process.env.BASE_URL}/image/${campaignId}/${imageId}`
      },
    });
    return new NextResponse(frameMetadata);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  /*
    This Api is called by the Mint button in the campaign frame
  */
  const body = await req.json();
  const fid = body.untrustedData.fid;
  const address = await getConnectedAddressForUser(fid);
  /* 
  TODO: Use a campaignId and imageId query params instead of hardcoding them
  const url = new URL(req.url)
  const { campaignId, imageId } = getCampaignDataFromURL(url);
  */
  const campaignId = '1'; // Campaign id in the end product will be the smart contract address of the campaign's NFT
  const imageId = 1;
  const balance = await balanceOf(address, campaignId);

  if (typeof balance === "number" && balance !== null && balance < 1) {
    try {
      // balance < 1 means that the user doesn't have our NFT yet
      // mint the NFT and then show the image of the NFT
      // campaignId is the address of the campaign NFT's smart contract
      const mint = await mintNft(address, campaignId);
      const frameMetadata = await fdk.getFrameMetadata({
        aspect_ratio: "1:1",
        image: {
          url: `${process.env.BASE_URL}/image/${campaignId}/${imageId}`
        },
      });
      return new NextResponse(frameMetadata);
    } catch (error) {
      // error while minting the NFT
      return NextResponse.json({ error: error });
    }
  } else {
    // the user already has the NFT
    // just show the image of the NFT
    const frameMetadata = await fdk.getFrameMetadata({
      aspect_ratio: "1:1",
      image: {
        url: `${process.env.BASE_URL}/image/${campaignId}/${imageId}`
      },
    });
    return new NextResponse(frameMetadata);
  }
}
