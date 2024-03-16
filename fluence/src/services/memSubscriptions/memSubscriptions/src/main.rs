#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;

module_manifest!();

pub fn main() {}

#[marine]
pub fn fetch() -> Vec<String> {

    let safe_cid = "QmVhGgJT7ifdrBmv9Ss8oFNGFc2HdJFfkm7CKk7X38WAPr".to_string();

    // get from subscription contract when enough time 
    vec!(safe_cid) 
}
