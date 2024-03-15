#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;

module_manifest!();

pub fn main() {}

#[marine]
pub fn add(subscription: memSubscription) -> memContentObject {
    
    let source_path = vault_path("mem_body");
    let target_path = vault_path("mem_response");
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
   
    if(response.success) {

        let result = fs::read_to_string(target_path.clone()).unwrap();
        let json : Value = serde_json::from_str(&result).unwrap();
        

        let o = memContentObject {
            memberName: subscription.name,
            data: serde_json::to_string(&json["data"]).unwrap());
        }

        o
    } 

}
