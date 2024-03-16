use curl_effector_imports as curl;
use curl_effector_imports::{CurlRequest, CurlResult};
use curl_effector_imports::HttpHeader;
use std::fs;
use std::path::PathBuf;
use crate::vault;

use crate::types;

static KEY : &str = "NyAl6eYL2taSpLkdJDwLJmobNCpn1jnw";

pub fn post(query_id: &String, target_path: &String) -> CurlResult {

    let url = format!("https://api.dune.com/api/v1/query/{}/execute", &query_id);
    
    let q = types::DuneQuery {
        // query_parameters: {"param1":24}, 
        // performance: "large"
    };

    let body: String = serde_json::to_string(&q).unwrap();

    let source_path = vault::vault_path("dune_body");
    let _ = fs::write(PathBuf::from(source_path.clone()), body);

    let h = HttpHeader {
        name: "Content-Type".to_string(),
        value: "application/json".to_string()
    };

    let request = CurlRequest {
        url,    
        headers: vec![h]
    };

    curl::curl_post(request, source_path, target_path.clone())
   
}

pub fn get(query_id: &String, target_path: &String) -> CurlResult {

   // let url = format!("https://api.dune.com/api/v1/execution/{}/results", &execution_id);
    let url = format!("https://api.dune.com/api/v1/query/{}/results?limit=1000", query_id);
    
    let hh = HttpHeader {
        name: "X-DUNE-API-KEY".to_string(),
        value: KEY.to_string()
    };

    let request = CurlRequest {
        url,    
        headers: vec![hh]
    };

    curl::curl_get(request, target_path.clone())
}



