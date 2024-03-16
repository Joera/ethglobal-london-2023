import { NextRequest, NextResponse } from "next/server"
import { CampaignParams } from "@/app/types";
import { ImageResponse } from '@vercel/og'
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
    const data = req.json();
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 128,
            background: 'lavender',
          }}
        >
          Milestone reached!
        </div>
      )
    )
    
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
