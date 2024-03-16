#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;

module_manifest!();

mod dune;

pub fn main() {}

#[marine]
pub fn add(subscription: memSubscription) -> memContentObject {

    let r1 = dune.post(query_id);

    if(response.success) {

        let execution_id = response.result
    

        let r2 = dune.get(execution_id);
    
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

}
