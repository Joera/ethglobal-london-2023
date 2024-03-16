#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;

module_manifest!();

pub fn main() {}

#[marine]
pub fn fetch() -> Vec<String> {

    // get from subscription contract when enough time 

    vec!("QmX217PAV6QQPzvAiBvvQYP6UYH9T6WHnctL1Xi2uv8ta8") 
}
