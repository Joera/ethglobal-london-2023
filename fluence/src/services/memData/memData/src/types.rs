use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Week {
    pub date: String,
    pub value: String
}

#[derive(Debug, Serialize, Deserialize)]
pub struct DuneQuery {

}

