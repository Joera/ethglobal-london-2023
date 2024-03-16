import { NextRequest, NextResponse } from "next/server"
import fs from 'fs'
import path from 'path'

export async function GET(req: NextRequest, res: NextResponse) {
  /*
    This Api that returns the image for a campaign
  */
  
  try {
    /*
      TODO: Return the stored image corresponding to the campaign and image id rather than the hardcoded image
      const url = new URL(req.url)
      const { campaignId, imageId } = getCampaignDataFromURL(url);
    */
    const dir = path.resolve('./public/img');
    const data = fs.readFileSync(`${dir}/doggy.jpeg`);
    console.log("ARTUR: ", data);
    const response = new NextResponse(data)
    response.headers.set('content-type', 'image/png');
    return response;
  } catch (error) {
    console.log(error, __filename);
    return NextResponse.json({ error: error });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  /*
    This Api that is called with campaign data and creates and stores the frame image based on it.
    It should return the url of the corresponding frame
  */
  
    const body = await req.json();
    const campaignId = body.campaign.id;
    const imageId = body.campaign.index;

    // TODO: Generate and store the image

    return new NextResponse(JSON.stringify({
      frame_url: `${process.env.BASE_URL}/frame/${campaignId}/${imageId}`
    }));
}
