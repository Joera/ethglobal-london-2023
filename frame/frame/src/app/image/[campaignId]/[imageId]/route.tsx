import { NextRequest, NextResponse } from "next/server"
import { CampaignParams, MemContentObject } from "@/app/types";
import { ImageResponse } from '@vercel/og'
import fs from 'fs'
import path, { relative } from 'path'
import BarChart from '../../../utils/graphService'


export async function GET(req: NextRequest, { params }: { params: CampaignParams }) {
  /*
    This Api that returns the image for a campaign
  */

    const mocked : MemContentObject = {
      
      "subscription": {
        "name": "Safe wallet",
        "assets": {
          "logo": "somelink",
          "background_color": "#000",
          "graph_color": "#0cb259"
        },
        "campaign": {
            "id": "0x01",
            "index": 1,
            "dune_query_id": "43918", 
            "timebase": "weekly",
            "reached": 0,
            "milestone": "10000",
            "runs_untill": ""
        }
      },
      "data_object" : `[
        {\"date\":\"\",\"value\":\"200\"},
        {\"date\":\"\",\"value\":\"300\"},
        {\"date\":\"\",\"value\":\"420\"},
        {\"date\":\"\",\"value\":\"500\"},
        {\"date\":\"\",\"value\":\"600\"},
        {\"date\":\"\",\"value\":\"900\"}
      ]`
    }

    const _data = {"execution_id":"01HS4P1CDS8F9V98PNR7F7RFNF","query_id":3532684,"is_execution_finished":true,"state":"QUERY_STATE_COMPLETED","submitted_at":"2024-03-16T22:27:37.530735Z","expires_at":"2024-06-14T22:27:39.135622Z","execution_started_at":"2024-03-16T22:27:38.743889Z","execution_ended_at":"2024-03-16T22:27:39.13562Z","result":{"rows":[{"num_safes":177595,"week":"2024-03-11 00:00:00.000 UTC"},{"num_safes":279532,"week":"2024-03-04 00:00:00.000 UTC"},{"num_safes":260738,"week":"2024-02-26 00:00:00.000 UTC"},{"num_safes":312697,"week":"2024-02-19 00:00:00.000 UTC"},{"num_safes":141880,"week":"2024-02-12 00:00:00.000 UTC"},{"num_safes":102298,"week":"2024-02-05 00:00:00.000 UTC"},{"num_safes":115289,"week":"2024-01-29 00:00:00.000 UTC"},{"num_safes":106544,"week":"2024-01-22 00:00:00.000 UTC"},{"num_safes":125977,"week":"2024-01-15 00:00:00.000 UTC"},{"num_safes":107237,"week":"2024-01-08 00:00:00.000 UTC"},{"num_safes":70379,"week":"2024-01-01 00:00:00.000 UTC"},{"num_safes":116196,"week":"2023-12-25 00:00:00.000 UTC"},{"num_safes":139670,"week":"2023-12-18 00:00:00.000 UTC"},{"num_safes":86945,"week":"2023-12-11 00:00:00.000 UTC"},{"num_safes":67834,"week":"2023-12-04 00:00:00.000 UTC"},{"num_safes":77185,"week":"2023-11-27 00:00:00.000 UTC"},{"num_safes":71637,"week":"2023-11-20 00:00:00.000 UTC"},{"num_safes":50437,"week":"2023-11-13 00:00:00.000 UTC"},{"num_safes":49820,"week":"2023-11-06 00:00:00.000 UTC"},{"num_safes":50452,"week":"2023-10-30 00:00:00.000 UTC"},{"num_safes":51991,"week":"2023-10-23 00:00:00.000 UTC"},{"num_safes":85034,"week":"2023-10-16 00:00:00.000 UTC"},{"num_safes":84266,"week":"2023-10-09 00:00:00.000 UTC"},{"num_safes":56568,"week":"2023-10-02 00:00:00.000 UTC"},{"num_safes":48977,"week":"2023-09-25 00:00:00.000 UTC"},{"num_safes":70910,"week":"2023-09-18 00:00:00.000 UTC"},{"num_safes":50568,"week":"2023-09-11 00:00:00.000 UTC"},{"num_safes":21283,"week":"2023-09-04 00:00:00.000 UTC"},{"num_safes":21092,"week":"2023-08-28 00:00:00.000 UTC"},{"num_safes":22286,"week":"2023-08-21 00:00:00.000 UTC"},{"num_safes":38386,"week":"2023-08-14 00:00:00.000 UTC"},{"num_safes":47914,"week":"2023-08-07 00:00:00.000 UTC"},{"num_safes":121118,"week":"2023-07-31 00:00:00.000 UTC"},{"num_safes":190777,"week":"2023-07-24 00:00:00.000 UTC"},{"num_safes":143141,"week":"2023-07-17 00:00:00.000 UTC"},{"num_safes":140531,"week":"2023-07-10 00:00:00.000 UTC"},{"num_safes":136761,"week":"2023-07-03 00:00:00.000 UTC"},{"num_safes":555569,"week":"2023-06-26 00:00:00.000 UTC"},{"num_safes":157282,"week":"2023-06-19 00:00:00.000 UTC"},{"num_safes":73953,"week":"2023-06-12 00:00:00.000 UTC"},{"num_safes":80267,"week":"2023-06-05 00:00:00.000 UTC"},{"num_safes":84623,"week":"2023-05-29 00:00:00.000 UTC"},{"num_safes":92137,"week":"2023-05-22 00:00:00.000 UTC"},{"num_safes":118018,"week":"2023-05-15 00:00:00.000 UTC"},{"num_safes":111912,"week":"2023-05-08 00:00:00.000 UTC"},{"num_safes":45813,"week":"2023-05-01 00:00:00.000 UTC"},{"num_safes":42939,"week":"2023-04-24 00:00:00.000 UTC"},{"num_safes":58076,"week":"2023-04-17 00:00:00.000 UTC"},{"num_safes":60267,"week":"2023-04-10 00:00:00.000 UTC"},{"num_safes":55342,"week":"2023-04-03 00:00:00.000 UTC"},{"num_safes":63059,"week":"2023-03-27 00:00:00.000 UTC"},{"num_safes":62989,"week":"2023-03-20 00:00:00.000 UTC"},{"num_safes":62373,"week":"2023-03-13 00:00:00.000 UTC"},{"num_safes":51540,"week":"2023-03-06 00:00:00.000 UTC"},{"num_safes":52263,"week":"2023-02-27 00:00:00.000 UTC"},{"num_safes":66673,"week":"2023-02-20 00:00:00.000 UTC"},{"num_safes":62499,"week":"2023-02-13 00:00:00.000 UTC"},{"num_safes":69042,"week":"2023-02-06 00:00:00.000 UTC"},{"num_safes":63988,"week":"2023-01-30 00:00:00.000 UTC"},{"num_safes":56691,"week":"2023-01-23 00:00:00.000 UTC"},{"num_safes":67592,"week":"2023-01-16 00:00:00.000 UTC"},{"num_safes":67946,"week":"2023-01-09 00:00:00.000 UTC"},{"num_safes":45499,"week":"2023-01-02 00:00:00.000 UTC"},{"num_safes":43413,"week":"2022-12-26 00:00:00.000 UTC"},{"num_safes":45415,"week":"2022-12-19 00:00:00.000 UTC"},{"num_safes":55942,"week":"2022-12-12 00:00:00.000 UTC"},{"num_safes":84874,"week":"2022-12-05 00:00:00.000 UTC"},{"num_safes":102400,"week":"2022-11-28 00:00:00.000 UTC"},{"num_safes":89773,"week":"2022-11-21 00:00:00.000 UTC"},{"num_safes":45019,"week":"2022-11-14 00:00:00.000 UTC"},{"num_safes":44423,"week":"2022-11-07 00:00:00.000 UTC"},{"num_safes":54078,"week":"2022-10-31 00:00:00.000 UTC"},{"num_safes":59536,"week":"2022-10-24 00:00:00.000 UTC"},{"num_safes":37034,"week":"2022-10-17 00:00:00.000 UTC"},{"num_safes":26349,"week":"2022-10-10 00:00:00.000 UTC"},{"num_safes":18296,"week":"2022-10-03 00:00:00.000 UTC"},{"num_safes":9368,"week":"2022-09-26 00:00:00.000 UTC"},{"num_safes":7190,"week":"2022-09-19 00:00:00.000 UTC"},{"num_safes":7204,"week":"2022-09-12 00:00:00.000 UTC"},{"num_safes":8604,"week":"2022-09-05 00:00:00.000 UTC"},{"num_safes":7325,"week":"2022-08-29 00:00:00.000 UTC"},{"num_safes":3992,"week":"2022-08-22 00:00:00.000 UTC"},{"num_safes":7550,"week":"2022-08-15 00:00:00.000 UTC"},{"num_safes":6440,"week":"2022-08-08 00:00:00.000 UTC"},{"num_safes":6109,"week":"2022-08-01 00:00:00.000 UTC"},{"num_safes":7515,"week":"2022-07-25 00:00:00.000 UTC"},{"num_safes":8208,"week":"2022-07-18 00:00:00.000 UTC"},{"num_safes":4907,"week":"2022-07-11 00:00:00.000 UTC"},{"num_safes":3668,"week":"2022-07-04 00:00:00.000 UTC"},{"num_safes":4186,"week":"2022-06-27 00:00:00.000 UTC"},{"num_safes":5126,"week":"2022-06-20 00:00:00.000 UTC"},{"num_safes":18105,"week":"2022-06-13 00:00:00.000 UTC"},{"num_safes":105727,"week":"2022-06-06 00:00:00.000 UTC"},{"num_safes":3825,"week":"2022-05-30 00:00:00.000 UTC"},{"num_safes":3376,"week":"2022-05-23 00:00:00.000 UTC"},{"num_safes":4101,"week":"2022-05-16 00:00:00.000 UTC"},{"num_safes":2950,"week":"2022-05-09 00:00:00.000 UTC"},{"num_safes":9895,"week":"2022-05-02 00:00:00.000 UTC"},{"num_safes":3904,"week":"2022-04-25 00:00:00.000 UTC"},{"num_safes":6294,"week":"2022-04-18 00:00:00.000 UTC"},{"num_safes":3767,"week":"2022-04-11 00:00:00.000 UTC"},{"num_safes":3894,"week":"2022-04-04 00:00:00.000 UTC"},{"num_safes":6282,"week":"2022-03-28 00:00:00.000 UTC"},{"num_safes":4260,"week":"2022-03-21 00:00:00.000 UTC"},{"num_safes":3180,"week":"2022-03-14 00:00:00.000 UTC"},{"num_safes":1879,"week":"2022-03-07 00:00:00.000 UTC"},{"num_safes":2131,"week":"2022-02-28 00:00:00.000 UTC"},{"num_safes":2130,"week":"2022-02-21 00:00:00.000 UTC"},{"num_safes":1644,"week":"2022-02-14 00:00:00.000 UTC"},{"num_safes":2639,"week":"2022-02-07 00:00:00.000 UTC"},{"num_safes":1521,"week":"2022-01-31 00:00:00.000 UTC"},{"num_safes":1629,"week":"2022-01-24 00:00:00.000 UTC"},{"num_safes":1785,"week":"2022-01-17 00:00:00.000 UTC"},{"num_safes":1698,"week":"2022-01-10 00:00:00.000 UTC"},{"num_safes":1960,"week":"2022-01-03 00:00:00.000 UTC"},{"num_safes":1694,"week":"2021-12-27 00:00:00.000 UTC"},{"num_safes":2308,"week":"2021-12-20 00:00:00.000 UTC"},{"num_safes":1853,"week":"2021-12-13 00:00:00.000 UTC"},{"num_safes":1881,"week":"2021-12-06 00:00:00.000 UTC"},{"num_safes":1443,"week":"2021-11-29 00:00:00.000 UTC"},{"num_safes":1492,"week":"2021-11-22 00:00:00.000 UTC"},{"num_safes":1715,"week":"2021-11-15 00:00:00.000 UTC"},{"num_safes":1759,"week":"2021-11-08 00:00:00.000 UTC"},{"num_safes":2250,"week":"2021-11-01 00:00:00.000 UTC"},{"num_safes":2459,"week":"2021-10-25 00:00:00.000 UTC"},{"num_safes":9452,"week":"2021-10-18 00:00:00.000 UTC"},{"num_safes":9653,"week":"2021-10-11 00:00:00.000 UTC"},{"num_safes":1021,"week":"2021-10-04 00:00:00.000 UTC"},{"num_safes":1622,"week":"2021-09-27 00:00:00.000 UTC"},{"num_safes":1458,"week":"2021-09-20 00:00:00.000 UTC"},{"num_safes":2263,"week":"2021-09-13 00:00:00.000 UTC"},{"num_safes":1292,"week":"2021-09-06 00:00:00.000 UTC"},{"num_safes":946,"week":"2021-08-30 00:00:00.000 UTC"},{"num_safes":921,"week":"2021-08-23 00:00:00.000 UTC"},{"num_safes":2453,"week":"2021-08-16 00:00:00.000 UTC"},{"num_safes":821,"week":"2021-08-09 00:00:00.000 UTC"},{"num_safes":2872,"week":"2021-08-02 00:00:00.000 UTC"},{"num_safes":1133,"week":"2021-07-26 00:00:00.000 UTC"},{"num_safes":1172,"week":"2021-07-19 00:00:00.000 UTC"},{"num_safes":768,"week":"2021-07-12 00:00:00.000 UTC"},{"num_safes":1726,"week":"2021-07-05 00:00:00.000 UTC"},{"num_safes":4871,"week":"2021-06-28 00:00:00.000 UTC"},{"num_safes":3787,"week":"2021-06-21 00:00:00.000 UTC"},{"num_safes":2399,"week":"2021-06-14 00:00:00.000 UTC"},{"num_safes":3066,"week":"2021-06-07 00:00:00.000 UTC"},{"num_safes":989,"week":"2021-05-31 00:00:00.000 UTC"},{"num_safes":554,"week":"2021-05-24 00:00:00.000 UTC"},{"num_safes":576,"week":"2021-05-17 00:00:00.000 UTC"},{"num_safes":492,"week":"2021-05-10 00:00:00.000 UTC"},{"num_safes":1361,"week":"2021-05-03 00:00:00.000 UTC"},{"num_safes":1433,"week":"2021-04-26 00:00:00.000 UTC"},{"num_safes":3280,"week":"2021-04-19 00:00:00.000 UTC"},{"num_safes":1119,"week":"2021-04-12 00:00:00.000 UTC"},{"num_safes":597,"week":"2021-04-05 00:00:00.000 UTC"},{"num_safes":608,"week":"2021-03-29 00:00:00.000 UTC"},{"num_safes":864,"week":"2021-03-22 00:00:00.000 UTC"},{"num_safes":711,"week":"2021-03-15 00:00:00.000 UTC"},{"num_safes":844,"week":"2021-03-08 00:00:00.000 UTC"},{"num_safes":376,"week":"2021-03-01 00:00:00.000 UTC"},{"num_safes":258,"week":"2021-02-22 00:00:00.000 UTC"},{"num_safes":337,"week":"2021-02-15 00:00:00.000 UTC"},{"num_safes":436,"week":"2021-02-08 00:00:00.000 UTC"},{"num_safes":315,"week":"2021-02-01 00:00:00.000 UTC"},{"num_safes":850,"week":"2021-01-25 00:00:00.000 UTC"},{"num_safes":493,"week":"2021-01-18 00:00:00.000 UTC"},{"num_safes":471,"week":"2021-01-11 00:00:00.000 UTC"},{"num_safes":424,"week":"2021-01-04 00:00:00.000 UTC"},{"num_safes":564,"week":"2020-12-28 00:00:00.000 UTC"},{"num_safes":622,"week":"2020-12-21 00:00:00.000 UTC"},{"num_safes":583,"week":"2020-12-14 00:00:00.000 UTC"},{"num_safes":775,"week":"2020-12-07 00:00:00.000 UTC"},{"num_safes":897,"week":"2020-11-30 00:00:00.000 UTC"},{"num_safes":2232,"week":"2020-11-23 00:00:00.000 UTC"},{"num_safes":13435,"week":"2020-11-16 00:00:00.000 UTC"},{"num_safes":3845,"week":"2020-11-09 00:00:00.000 UTC"},{"num_safes":42626,"week":"2020-11-02 00:00:00.000 UTC"},{"num_safes":21661,"week":"2020-10-26 00:00:00.000 UTC"},{"num_safes":17555,"week":"2020-10-19 00:00:00.000 UTC"},{"num_safes":4615,"week":"2020-10-12 00:00:00.000 UTC"},{"num_safes":449,"week":"2020-10-05 00:00:00.000 UTC"},{"num_safes":195,"week":"2020-09-28 00:00:00.000 UTC"},{"num_safes":198,"week":"2020-09-21 00:00:00.000 UTC"},{"num_safes":124,"week":"2020-09-14 00:00:00.000 UTC"},{"num_safes":150,"week":"2020-09-07 00:00:00.000 UTC"},{"num_safes":152,"week":"2020-08-31 00:00:00.000 UTC"},{"num_safes":224,"week":"2020-08-24 00:00:00.000 UTC"},{"num_safes":202,"week":"2020-08-17 00:00:00.000 UTC"},{"num_safes":121,"week":"2020-08-10 00:00:00.000 UTC"},{"num_safes":317,"week":"2020-08-03 00:00:00.000 UTC"},{"num_safes":429,"week":"2020-07-27 00:00:00.000 UTC"},{"num_safes":229,"week":"2020-07-20 00:00:00.000 UTC"},{"num_safes":106,"week":"2020-07-13 00:00:00.000 UTC"},{"num_safes":242,"week":"2020-07-06 00:00:00.000 UTC"},{"num_safes":384,"week":"2020-06-29 00:00:00.000 UTC"},{"num_safes":183,"week":"2020-06-22 00:00:00.000 UTC"},{"num_safes":149,"week":"2020-06-15 00:00:00.000 UTC"},{"num_safes":209,"week":"2020-06-08 00:00:00.000 UTC"},{"num_safes":93,"week":"2020-06-01 00:00:00.000 UTC"},{"num_safes":191,"week":"2020-05-25 00:00:00.000 UTC"},{"num_safes":229,"week":"2020-05-18 00:00:00.000 UTC"},{"num_safes":154,"week":"2020-05-11 00:00:00.000 UTC"},{"num_safes":80,"week":"2020-05-04 00:00:00.000 UTC"},{"num_safes":146,"week":"2020-04-27 00:00:00.000 UTC"},{"num_safes":109,"week":"2020-04-20 00:00:00.000 UTC"},{"num_safes":247,"week":"2020-04-13 00:00:00.000 UTC"},{"num_safes":63,"week":"2020-04-06 00:00:00.000 UTC"},{"num_safes":106,"week":"2020-03-30 00:00:00.000 UTC"},{"num_safes":138,"week":"2020-03-23 00:00:00.000 UTC"},{"num_safes":73,"week":"2020-03-16 00:00:00.000 UTC"},{"num_safes":59,"week":"2020-03-09 00:00:00.000 UTC"},{"num_safes":44,"week":"2020-03-02 00:00:00.000 UTC"},{"num_safes":84,"week":"2020-02-24 00:00:00.000 UTC"},{"num_safes":104,"week":"2020-02-17 00:00:00.000 UTC"},{"num_safes":68,"week":"2020-02-10 00:00:00.000 UTC"},{"num_safes":68,"week":"2020-02-03 00:00:00.000 UTC"},{"num_safes":65,"week":"2020-01-27 00:00:00.000 UTC"},{"num_safes":54,"week":"2020-01-20 00:00:00.000 UTC"},{"num_safes":46,"week":"2020-01-13 00:00:00.000 UTC"},{"num_safes":33,"week":"2020-01-06 00:00:00.000 UTC"},{"num_safes":21,"week":"2019-12-30 00:00:00.000 UTC"},{"num_safes":24,"week":"2019-12-23 00:00:00.000 UTC"},{"num_safes":84,"week":"2019-12-16 00:00:00.000 UTC"},{"num_safes":25,"week":"2019-12-09 00:00:00.000 UTC"},{"num_safes":49,"week":"2019-12-02 00:00:00.000 UTC"},{"num_safes":20,"week":"2019-11-25 00:00:00.000 UTC"},{"num_safes":57,"week":"2019-11-18 00:00:00.000 UTC"},{"num_safes":75,"week":"2019-11-11 00:00:00.000 UTC"},{"num_safes":28,"week":"2019-11-04 00:00:00.000 UTC"},{"num_safes":125,"week":"2019-10-28 00:00:00.000 UTC"},{"num_safes":124,"week":"2019-10-21 00:00:00.000 UTC"},{"num_safes":16,"week":"2019-10-14 00:00:00.000 UTC"},{"num_safes":25,"week":"2019-10-07 00:00:00.000 UTC"},{"num_safes":33,"week":"2019-09-30 00:00:00.000 UTC"},{"num_safes":15,"week":"2019-09-23 00:00:00.000 UTC"},{"num_safes":12,"week":"2019-09-16 00:00:00.000 UTC"},{"num_safes":106,"week":"2019-09-09 00:00:00.000 UTC"},{"num_safes":42,"week":"2019-09-02 00:00:00.000 UTC"},{"num_safes":27,"week":"2019-08-26 00:00:00.000 UTC"},{"num_safes":90,"week":"2019-08-19 00:00:00.000 UTC"},{"num_safes":19,"week":"2019-08-12 00:00:00.000 UTC"},{"num_safes":26,"week":"2019-08-05 00:00:00.000 UTC"},{"num_safes":35,"week":"2019-07-29 00:00:00.000 UTC"},{"num_safes":20,"week":"2019-07-22 00:00:00.000 UTC"},{"num_safes":17,"week":"2019-07-15 00:00:00.000 UTC"},{"num_safes":11,"week":"2019-07-08 00:00:00.000 UTC"},{"num_safes":11,"week":"2019-07-01 00:00:00.000 UTC"},{"num_safes":27,"week":"2019-06-24 00:00:00.000 UTC"},{"num_safes":32,"week":"2019-06-17 00:00:00.000 UTC"},{"num_safes":30,"week":"2019-06-10 00:00:00.000 UTC"},{"num_safes":44,"week":"2019-06-03 00:00:00.000 UTC"},{"num_safes":93,"week":"2019-05-27 00:00:00.000 UTC"},{"num_safes":34,"week":"2019-05-20 00:00:00.000 UTC"},{"num_safes":14,"week":"2019-05-13 00:00:00.000 UTC"},{"num_safes":20,"week":"2019-05-06 00:00:00.000 UTC"},{"num_safes":14,"week":"2019-04-29 00:00:00.000 UTC"},{"num_safes":8,"week":"2019-04-22 00:00:00.000 UTC"},{"num_safes":12,"week":"2019-04-15 00:00:00.000 UTC"},{"num_safes":13,"week":"2019-04-08 00:00:00.000 UTC"},{"num_safes":13,"week":"2019-04-01 00:00:00.000 UTC"},{"num_safes":9,"week":"2019-03-25 00:00:00.000 UTC"},{"num_safes":14,"week":"2019-03-18 00:00:00.000 UTC"},{"num_safes":42,"week":"2019-03-11 00:00:00.000 UTC"},{"num_safes":45,"week":"2019-03-04 00:00:00.000 UTC"},{"num_safes":20,"week":"2019-02-25 00:00:00.000 UTC"},{"num_safes":16,"week":"2019-02-18 00:00:00.000 UTC"},{"num_safes":16,"week":"2019-02-11 00:00:00.000 UTC"},{"num_safes":22,"week":"2019-02-04 00:00:00.000 UTC"},{"num_safes":16,"week":"2019-01-28 00:00:00.000 UTC"},{"num_safes":74,"week":"2019-01-21 00:00:00.000 UTC"},{"num_safes":15,"week":"2019-01-14 00:00:00.000 UTC"},{"num_safes":6,"week":"2019-01-07 00:00:00.000 UTC"},{"num_safes":9,"week":"2018-12-31 00:00:00.000 UTC"},{"num_safes":3,"week":"2018-12-24 00:00:00.000 UTC"},{"num_safes":11,"week":"2018-12-17 00:00:00.000 UTC"},{"num_safes":20,"week":"2018-12-10 00:00:00.000 UTC"},{"num_safes":24,"week":"2018-12-03 00:00:00.000 UTC"}],"metadata":{"column_names":["week","num_safes"],"row_count":276,"result_set_bytes":9862,"total_row_count":276,"total_result_set_bytes":9030,"datapoint_count":552,"pending_time_millis":1213,"execution_time_millis":391}}};

    let weeks = [];

    let total = 0;

    for (let row of _data.result.rows.reverse()) {

        total = total + row.num_safes;

        weeks.push({
          date: row.week,
          value: total
        })
    }

    let data = weeks.reverse().slice(0,8);

    console.log(data);

    const logo = "profile_img_029ff791-8701-4324-b4e0-b441af1c9aef_sjoiq.png";

    const thousands = (n: Number) => {

        return n.toLocaleString('en-GB');
    }
  
  try {
    /*
      TODO: Return the stored image corresponding to the campaign and image id rather than the hardcoded image
      const { campaignId, imageId } = params;
    */

    const r = .00005;  
    const barWidth = '6.4rem';  

    if(mocked.subscription.campaign.reached > 0) {

      data.unshift({
        date: '',
        value: 8300001
      })

      return new ImageResponse(
        (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              background: mocked.subscription.assets.background_color,
              color: mocked.subscription.assets.graph_color
            }}
          > 
            <div 
            style={{
              position: 'relative',
              zIndex: 99,
              width: '100%',
              height: '9rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              padding: "0 6rem"
            }}>
                <h1 style={{
                  fontSize: '3.6rem',
                  lineHeight: '1',
                  padding: "0 0"
                }}>Safe&#123;Wallet&#125;</h1>
                <span style={{
                  display: 'block',
                  fontSize: '1.2rem',
                  lineHeight: '1.5',
                  margin: "-3rem 0 0rem 0"
                }}>We are tracking the number of Safe wallets created per week:
                </span>
                <div style={{
                  position: 'relative',
                  zIndex: 99,
                  display: 'flex',
                  fontSize: '1.2rem',
                  lineHeight: '1.5',
                  width: '100%',
                  // margin: "0 6rem",
                  // width: '900px',
                  height: "2px",
                  borderTop: '2px dashed white'
                }}>
                    <span style={{
                      fontSize: '1.2rem',
                      lineHeight: '1.5',
                      color: 'white'
                  
                  
                    }}>
                      the next milestone has been set at 8.000.000 wallets
                    </span>
              </div>
            </div>
            
            <div style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              flex: '1',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-around',
              fontSize: '2rem',
              padding: "0 9rem"
            }}>
  
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  width: barWidth,
                  background: mocked.subscription.assets.graph_color,
                  height: data[5].value * r
                }}>
                  <span style={{
                    color: 'black',
                    fontSize: '1.2rem',
                    marginTop: '.3rem'
                  }}>{thousands(data[5].value)}</span>
                </div>
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  width: barWidth,
                  background: mocked.subscription.assets.graph_color,
                  height: data[4].value * r
                }}>
                  <span style={{
                    color: 'black',
                    fontSize: '1.2rem',
                    marginTop: '.3rem'
                  }}>{thousands(data[4].value)}</span>
                </div>
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  width: barWidth,
                  background: mocked.subscription.assets.graph_color,
                  height: data[3].value * r
                }}>
                  <span style={{
                    color: 'black',
                    fontSize: '1.2rem',
                    marginTop: '.3rem'
                  }}>{thousands(data[3].value)}</span>
                </div>
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  width: barWidth,
                  background: mocked.subscription.assets.graph_color,
                  height: data[2].value * r
                }}>
                  <span style={{
                    color: 'black',
                    fontSize: '1.2rem',
                    marginTop: '.3rem'
                  }}>{thousands(data[2].value)}</span>
                </div>
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  width: barWidth,
                  background: mocked.subscription.assets.graph_color,
                  height: data[1].value * r
                }}>
                  <span style={{
                    color: 'black',
                    fontSize: '1.2rem',
                    marginTop: '.3rem'
                  }}>{thousands(data[1].value)}</span>
                </div>
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  width: barWidth,
                  background: "#ff0000",
                  height: data[0].value * r
                }}>
                  <span style={{
                    color: 'black',
                    fontSize: '1.2rem',
                    marginTop: '.3rem'
                  }}>{thousands(data[0].value)}</span>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    zIndex: '9999',
                    paddingTop: '7.7rem',
                    marginLeft: '7.7rem'
                  }}>
                  <svg  version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xmlSpace="preserve" width="300" height="375"><path fill="#ff0000" d="M88.89,47.5l-3.29-5.699c-0.439-0.76-0.67-1.622-0.67-2.5V32.72c0-1.786-0.953-3.437-2.5-4.33l-5.699-3.29  c-0.76-0.439-1.391-1.07-1.83-1.83l-3.29-5.699c-0.893-1.547-2.544-2.5-4.33-2.5h-6.581c-0.878,0-1.74-0.231-2.5-0.67L52.5,11.11  c-1.547-0.893-3.453-0.893-5,0l-5.699,3.29c-0.76,0.439-1.622,0.67-2.5,0.67H32.72c-1.786,0-3.437,0.953-4.33,2.5l-3.29,5.699  c-0.439,0.76-1.07,1.391-1.83,1.83l-5.699,3.29c-1.547,0.893-2.5,2.544-2.5,4.33v6.581c0,0.878-0.231,1.74-0.67,2.5L11.11,47.5  c-0.893,1.547-0.893,3.453,0,5l3.29,5.699c0.439,0.76,0.67,1.622,0.67,2.5v6.581c0,1.786,0.953,3.437,2.5,4.33l5.699,3.29  c0.76,0.439,1.391,1.07,1.83,1.83l3.29,5.699c0.893,1.547,2.544,2.5,4.33,2.5h6.581c0.878,0,1.74,0.231,2.5,0.67l5.699,3.29  c1.547,0.893,3.453,0.893,5,0l5.699-3.29c0.76-0.439,1.622-0.67,2.5-0.67h6.581c1.786,0,3.437-0.953,4.33-2.5l3.29-5.699  c0.439-0.76,1.07-1.391,1.83-1.83l5.699-3.29c1.547-0.893,2.5-2.544,2.5-4.33v-6.581c0-0.878,0.231-1.74,0.67-2.5l3.29-5.699  C89.783,50.953,89.783,49.047,88.89,47.5z M50,80c-16.569,0-30-13.431-30-30s13.431-30,30-30s30,13.431,30,30S66.569,80,50,80z"/><path fill="#FF0000"  d="M50,24c-14.336,0-26,11.664-26,26s11.664,26,26,26s26-11.664,26-26S64.336,24,50,24z M64.54,41.044L50.193,61.913  c-0.454,0.66-1.187,1.076-1.987,1.125c-0.055,0.003-0.109,0.005-0.162,0.005c-0.743,0-1.453-0.317-1.95-0.876L35.659,50.429  c-0.957-1.077-0.86-2.725,0.217-3.682c1.076-0.958,2.725-0.861,3.682,0.217l8.222,9.249l12.461-18.125  c0.816-1.186,2.441-1.488,3.628-0.671C65.056,38.232,65.357,39.856,64.54,41.044z"/></svg>
                </div>
  
            </div>
            <div
            style={{
              width: '100%',
              height: '6rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              color: '#ff0000'
            }}>The next milestone has been reached. You can mint your memorable NFT!</div>
            
          </div>
        )
      )

    } else {

    let image = new ImageResponse(
      (
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            background: mocked.subscription.assets.background_color,
            color: mocked.subscription.assets.graph_color
          }}
        > 
          <div 
          style={{
            width: '100%',
            height: '9rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            padding: "0 6rem"
          }}>
              <h1 style={{
                fontSize: '3.6rem',
                lineHeight: '1',
                padding: "0 0"
              }}>Safe&#123;Wallet&#125;</h1>
              <span style={{
                display: 'block',
                fontSize: '1.2rem',
                lineHeight: '1.5',
                margin: "-3rem 0 0rem 0"
              }}>We are tracking the number of Safe wallets created per week:
              </span>
              <div style={{
                display: 'flex',
                fontSize: '1.2rem',
                lineHeight: '1.5',
                width: '100%',
                // margin: "0 6rem",
                // width: '900px',
                height: "2px",
                borderTop: '2px dashed white'
              }}>
                  <span style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.5',
                    color: 'white'
                
                
                  }}>
                    the next milestone has been set at 8.000.000 wallets
                  </span>
            </div>
          </div>
          
          <div style={{
            width: '100%',
            flex: '1',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-around',
            fontSize: '2rem',
            padding: "0 9rem"
          }}>

              <div style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: barWidth,
                background: mocked.subscription.assets.graph_color,
                height: data[5].value * r
              }}>
                <span style={{
                  color: 'black',
                  fontSize: '1.2rem',
                  marginTop: '.3rem'
                }}>{thousands(data[5].value)}</span>
              </div>
              <div style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: barWidth,
                background: mocked.subscription.assets.graph_color,
                height: data[4].value * r
              }}>
                <span style={{
                  color: 'black',
                  fontSize: '1.2rem',
                  marginTop: '.3rem'
                }}>{thousands(data[4].value)}</span>
              </div>
              <div style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: barWidth,
                background: mocked.subscription.assets.graph_color,
                height: data[3].value * r
              }}>
                <span style={{
                  color: 'black',
                  fontSize: '1.2rem',
                  marginTop: '.3rem'
                }}>{thousands(data[3].value)}</span>
              </div>
              <div style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: barWidth,
                background: mocked.subscription.assets.graph_color,
                height: data[2].value * r
              }}>
                <span style={{
                  color: 'black',
                  fontSize: '1.2rem',
                  marginTop: '.3rem'
                }}>{thousands(data[2].value)}</span>
              </div>
              <div style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: barWidth,
                background: mocked.subscription.assets.graph_color,
                height: data[1].value * r
              }}>
                <span style={{
                  color: 'black',
                  fontSize: '1.2rem',
                  marginTop: '.3rem'
                }}>{thousands(data[1].value)}</span>
              </div>
              <div style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: barWidth,
                background: mocked.subscription.assets.graph_color,
                height: data[0].value * r
              }}>
                <span style={{
                  color: 'black',
                  fontSize: '1.2rem',
                  marginTop: '.3rem'
                }}>{thousands(data[0].value)}</span>
              </div>

          </div>
          <div
          style={{
            width: '100%',
            height: '6rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
          }}>Keep rooting for safe walet adoption and mint your memorable NFT when the milestone is reached!</div>
          
        </div>
      )
    )


    return image;

    }
    
  } catch (error) {
    console.log(error, __filename);
    return NextResponse.json({ error: error });
  }
}


export async function POST(req: NextRequest, { params }: { params: CampaignParams }) {
  /*
    This Api that is called with campaign data and creates and stores the frame image based on it.
    It should return the url of the corresponding frame
  */

    const body = await req.json();
    const { campaignId, imageId } = params;

    // TODO: Generate and store the image

    return new NextResponse(JSON.stringify({
      frame_url: `${process.env.BASE_URL}/frame/${campaignId}/${imageId}`
    }));
}
