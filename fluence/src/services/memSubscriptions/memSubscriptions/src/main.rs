#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;

module_manifest!();

pub fn main() {}

#[marine]
pub fn fetch() -> Vec<String> {

    // get from subscription contract when enough time 
    vec!("QmVhGgJT7ifdrBmv9Ss8oFNGFc2HdJFfkm7CKk7X38WAPr") 
}
