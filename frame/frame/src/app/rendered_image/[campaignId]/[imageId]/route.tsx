import { NextRequest, NextResponse } from "next/server"
import { CampaignParams, MemContentObject } from "@/app/types";
import { ImageResponse } from '@vercel/og'
import fs from 'fs'
import path, { relative } from 'path'
import BarChart from '../../../utils/graphService'


export async function GET(req: NextRequest, { params }: { params: CampaignParams }) {

  try {
    
    const filePath = path.join(process.cwd(), '.', 'images', `${params.campaignId}_${params.imageId}.png`);

    const imageBuffer = fs.readFileSync(filePath);
    const response = new NextResponse(imageBuffer)
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
