#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use curl_effector_imports as curl;
use curl_effector_imports::{CurlRequest, CurlResult};
use curl_effector_imports::HttpHeader;
use std::fs;
use mem_types::{MemContentObject, MemSubscription};
use std::path::PathBuf;
use serde_json::Value;


module_manifest!();

pub fn main() {}

#[marine]
pub fn create(content_object: MemContentObject) -> String {


    let url = format!("http://localhost:3000/create/{}/{}", content_object.subscription.campaign.id, content_object.subscription.campaign.index);

    let body: String = serde_json::to_string(&content_object).unwrap();

    let source_path = vault_path("content_body");
    let target_path = vault_path("content_response");
    let _ = fs::write(PathBuf::from(source_path.clone()), body);

    let h = HttpHeader {
        name: "Content-Type".to_string(),
        value: "application/json".to_string()
    };

    let request = CurlRequest {
        url,    
        headers: vec![h]
    };

    let response = curl::curl_post(request, source_path, target_path.clone());

    if response.success {

        let result = fs::read_to_string(target_path.clone()).unwrap();
        let v: Value = serde_json::from_str(&result).unwrap();

        v["frame_url"].to_string()

    } else {

        response.error
    }


}

#[marine]
pub fn castFrame() -> String {
    format!("Hi")
}

#[marine]   
pub fn nft() -> String {
    format!("Hi")
}

pub fn vault_path(filename: &str) -> String {
    let cp = marine_rs_sdk::get_call_parameters();
    format!("/tmp/vault/{}-{}/{}", cp.particle.id, cp.particle.token, filename)
}


