#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use serde_json;
use serde_json::Value;
use mem_types::{MemSubscription, MemContentObject};
use std::fs;


module_manifest!();

mod types;
mod dune;
mod vault;

pub fn main() {}

#[marine]
pub fn add(subscription: MemSubscription) -> Vec<MemContentObject> {

    let mut objects : Vec<MemContentObject> = vec!();
    let target_path = vault::vault_path("mem_response");
    let r1 = dune::post(&subscription.campaign.dune_query_id, &target_path);

    if r1.success {

        let r1_result = fs::read_to_string(target_path.clone()).unwrap();
        let r1_json : Value = serde_json::from_str(&r1_result).unwrap();

        let r2 = dune::get(r1_json["execution_id"].to_string(), &target_path);
    
        if r2.success {

            let r2_result = fs::read_to_string(target_path.clone()).unwrap();
            let r2_json : Value = serde_json::from_str(&r2_result).unwrap();
            
            let o = MemContentObject {
                subscription,
                data_object: serde_json::to_string(&r2_json["data"]).unwrap()
            };

            objects.push(o);
        } 

    }

    objects

}
