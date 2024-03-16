use serde::{Deserialize, Serialize};
use serde_json::{Value};
use std::collections::BTreeMap;
use marine_rs_sdk::marine;

#[marine] 
#[derive(Debug, Serialize, Deserialize)]
pub struct MemMemberAssets { 
    pub logo: String
    pub background_color: String
    pub graph_color: String
}

#[marine] 
#[derive(Debug, Serialize, Deserialize)]
pub struct MemPlan {
    pub dune_query_id: String
    pub timebase: String // weekly / monthly / milestone
    pub milestone: String
    pub runs_untill: String
}

#[marine] 
#[derive(Debug, Serialize, Deserialize)]
pub struct MemSubscription:
    pub name: String
    pub assets: MemMemberAssets
    pub plan:  MemPlan

#[marine] 
#[derive(Debug, Serialize, Deserialize)]
pub struct MemContentObject:
    pub subscription: MemSubscription
    pub data_object: String
