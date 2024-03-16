export interface CampaignParams { 
  campaignId: string, 
  imageId: string 
};

export interface MemMemberAssets { 
    logo: string,
    background_color: string,
    graph_color: string
}

export interface MemCampaign {
    id: string,
    index: Number,
    dune_query_id: string,
    timebase: string, // weekly / monthly / milestone
    milestone: string,
    reached: number,
    runs_untill: string
}

export interface MemSubscription {
    name: string,
    assets: MemMemberAssets,
    campaign:  MemCampaign
}

export interface MemContentObject {
    subscription: MemSubscription,
    data_object: string
}

