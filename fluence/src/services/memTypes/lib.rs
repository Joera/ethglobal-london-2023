use serde::{Deserialize, Serialize};
use serde_json::{Value};
use std::collections::BTreeMap;
use marine_rs_sdk::marine;


#[marine] 
#[derive(Debug, Serialize, Deserialize)]
pub struct memSubscription {
    pub name: String
    pub duneExecutionId: String
}

#[marine] 
#[derive(Debug, Serialize, Deserialize)]
pub struct memContentObject {
    pub memberName: String
    pub data: String
}
