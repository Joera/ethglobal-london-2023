import { NextRequest, NextResponse } from "next/server"
import { CampaignParams } from "@/app/types";
import fs from 'fs'
import path from 'path'

export async function GET(req: NextRequest, { params }: { params: CampaignParams }) {
  /*
    This Api that returns the image for a campaign
  */
  
  try {
    /*
      TODO: Return the stored image corresponding to the campaign and image id rather than the hardcoded image
      const { campaignId, imageId } = params;
    */
    const dir = path.resolve('./public/img');
    const data = fs.readFileSync(`${dir}/chart.jpg`);
    const response = new NextResponse(data)
    response.headers.set('content-type', 'image/png');
    return response;
  } catch (error) {
    console.log(error, __filename);
    return NextResponse.json({ error: error });
  }
}

export async function POST(req: NextRequest, { params }: { params: CampaignParams }) {
  /*
    This Api that is called with campaign data and creates and stores the frame image based on it.
    It should return the url of the corresponding frame
  */
  
    const body = await req.json();
    const { campaignId, imageId } = params;

    // TODO: Generate and store the image

    return new NextResponse(JSON.stringify({
      frame_url: `${process.env.BASE_URL}/frame/${campaignId}/${imageId}`
    }));
}
