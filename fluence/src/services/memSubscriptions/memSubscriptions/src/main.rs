#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;

module_manifest!();

pub fn main() {}

#[marine]
pub fn fetch() -> Vec<String> {

    let safe_cid = "QmQzRiaPHiMqBsBKW64H21zVTUKM7ozzMntSUksy9nbXUw".to_string();

    // get from subscription contract when enough time 
    vec!(safe_cid) 
}
