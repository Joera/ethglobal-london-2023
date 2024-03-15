#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;

module_manifest!();

pub fn main() {}

#[marine]
pub fn renderFrame() -> String {
    format!("Hi")
}

#[marine]
pub fn castFrame() -> String {
    format!("Hi")
}

#[marine]   
pub fn nft() -> String {
    format!("Hi")
}

