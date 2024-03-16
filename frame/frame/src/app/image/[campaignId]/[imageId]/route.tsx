import { NextRequest, NextResponse } from "next/server"
import { CampaignParams, MemContentObject } from "@/app/types";
import { ImageResponse } from '@vercel/og'
import fs from 'fs'
import path from 'path'
import BarChart from '../../../utils/graphService'


export async function GET(req: NextRequest, { params }: { params: CampaignParams }) {
  /*
    This Api that returns the image for a campaign
  */
    const mocked : MemContentObject = {
      
      "subscription": {
        "name": "Safe wallet",
        "assets": {
          "logo": "somelink",
          "background_color": "#000",
          "graph_color": "#0cb259"
        },
        "campaign": {
            "id": "0x01",
            "index": 1,
            "dune_query_id": "43918", 
            "timebase": "weekly",
            "reached": 0,
            "milestone": "10000",
            "runs_untill": ""
        }
      },
      "data_object" : "[{\"date\":\"\",\"value\":\"200\"}]"
    }

    const data = JSON.parse(mocked.data_object);
  
  try {
    /*
      TODO: Return the stored image corresponding to the campaign and image id rather than the hardcoded image
      const { campaignId, imageId } = params;
    */

      

    return new ImageResponse(
      (
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            background: mocked.subscription.assets.background_color,
            color: mocked.subscription.assets.graph_color
          }}
        > 
          <div 
          style={{
            width: '100%',
            height: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            lineHeight: '1'
          }}>header</div>
          <div style={{
            width: '100%',
            flex: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
          }}>

              <div style={{
                width: '2rem',
                background: mocked.subscription.assets.graph_color,
                height: data[0]
              }}>
              </div>

          </div>
          <div
          style={{
            width: '100%',
            height: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
          }}>footer</div>
          
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
