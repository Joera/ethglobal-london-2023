#![allow(unused_imports)]
#![allow(dead_code)]
use serde::{Deserialize, Serialize};
use serde_json::{Value};
use std::collections::BTreeMap;
use marine_rs_sdk::marine;

#[marine] 
#[derive(Debug, Serialize, Deserialize)]
pub struct MemMemberAssets { 
    pub logo: String,
    pub background_color: String,
    pub graph_color: String
}

#[marine] 
#[derive(Debug, Serialize, Deserialize)]
pub struct MemCampaign {
    pub id: String,
    pub index: String,
    pub dune_query_id: String,
    pub timebase: String, // weekly / monthly / milestone
    pub milestone: String,
    pub runs_untill: String
}

#[marine] 
#[derive(Debug, Serialize, Deserialize)]
pub struct MemSubscription {
    pub name: String,
    pub assets: MemMemberAssets,
    pub campaign:  MemCampaign
}

#[marine] 
#[derive(Debug, Serialize, Deserialize)]
pub struct MemContentObject {
    pub subscription: MemSubscription,
    pub data_object: String
}
