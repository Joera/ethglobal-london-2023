

pub fn post(query_id: String) {

    let url = format!("https://api.dune.com/api/v1/query/{}/execute", &query_id);
    
    let q = types::DuneQuery {
        query_parameters: {"param1":24}, 
        performance: "large"
    };

    let body: String = serde_json::to_string(&q).unwrap();

    let source_path = vault_path("dune_body");
    let target_path = vault_path("dune_response");
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
   
}

pub fn get(execution_id: String) {

    let url = format!("https://api.dune.com/api/v1/execution/{}/results", &execution_id);
    
    let target_path = vault_path("mem_response");

    // let h = HttpHeader {    let h = HttpHeader {
    //     name: "Content-Type".to_string(),
    //     value: "application/json".to_string()
    // };

    let hh = HttpHeader {
        name: "X-DUNE-API-KEY".to_string()
        value: "".to_string()
    }

    let request = CurlRequest {
        url,    
        headers: vec![i]
    };

    let response = curl::curl_get(request, target_path.clone());
}


