/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.13.0
 * @fluencelabs/aqua-to-js version: 0.3.5
 * If you find any bugs in generated AIR, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * If you find any bugs in generated JS/TS, please write an issue on GitHub: https://github.com/fluencelabs/js-client/issues
 *
 */


// Making aliases to reduce chance of accidental name collision
import {
    v5_callFunction as callFunction$$,
    v5_registerService as registerService$$
} from '@fluencelabs/js-client';


// Functions
export const subnet_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (seq
      (seq
       (seq
        (seq
         (seq
          (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
          (par
           (par
            (new $option-inline
             (seq
              (seq
               (new %Deal_obj_map
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (ap ("chainNetwork" "local") %Deal_obj_map)
                      (ap ("chainNetworkId" 31337) %Deal_obj_map)
                     )
                     (ap ("dealId" "2901bb75a1f4b0ac205cb2e68986a53e3480eb56") %Deal_obj_map)
                    )
                    (ap ("dealIdOriginal" "0x2901bb75a1f4B0ac205CB2e68986A53E3480eB56") %Deal_obj_map)
                   )
                   (ap ("definition" "bafkreigtqodqs2vcg56t7jymph7mo6cmmoex7de3kxdmpgi57hpwitp6o4") %Deal_obj_map)
                  )
                  (ap ("timestamp" "2024-03-17T03:24:27.502Z") %Deal_obj_map)
                 )
                 (canon %init_peer_id% %Deal_obj_map  Deal_obj)
                )
               )
               (xor
                (ap Deal_obj $option-inline)
                (null)
               )
              )
              (canon %init_peer_id% $option-inline  #option-inline-0)
             )
            )
            (new $option-inline-1
             (seq
              (seq
               (new %Deal_obj-0_map
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (ap ("chainNetwork" "local") %Deal_obj-0_map)
                      (ap ("chainNetworkId" 31337) %Deal_obj-0_map)
                     )
                     (ap ("dealId" "18998c7e38ede4df09ceec08e5372bf8fe5719ea") %Deal_obj-0_map)
                    )
                    (ap ("dealIdOriginal" "0x18998c7E38ede4dF09cEec08E5372Bf8fe5719ea") %Deal_obj-0_map)
                   )
                   (ap ("definition" "bafkreiafv5fjgtjrvhnnbaprdhtprx3uibmni6jmhfvlgudh54n7inhwaq") %Deal_obj-0_map)
                  )
                  (ap ("timestamp" "2024-03-17T03:24:23.350Z") %Deal_obj-0_map)
                 )
                 (canon %init_peer_id% %Deal_obj-0_map  Deal_obj-0)
                )
               )
               (xor
                (ap Deal_obj-0 $option-inline-1)
                (null)
               )
              )
              (canon %init_peer_id% $option-inline-1  #option-inline-1-0)
             )
            )
           )
           (new $option-inline-2
            (seq
             (seq
              (new %Deal_obj-1_map
               (seq
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (ap ("chainNetwork" "local") %Deal_obj-1_map)
                     (ap ("chainNetworkId" 31337) %Deal_obj-1_map)
                    )
                    (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %Deal_obj-1_map)
                   )
                   (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %Deal_obj-1_map)
                  )
                  (ap ("definition" "bafkreid5kfpzbz3rx4gyoysrho7z77a3nyd7cqc3c2a6sqfq4rvvphj674") %Deal_obj-1_map)
                 )
                 (ap ("timestamp" "2024-03-17T03:24:19.223Z") %Deal_obj-1_map)
                )
                (canon %init_peer_id% %Deal_obj-1_map  Deal_obj-1)
               )
              )
              (xor
               (ap Deal_obj-1 $option-inline-2)
               (null)
              )
             )
             (canon %init_peer_id% $option-inline-2  #option-inline-2-0)
            )
           )
          )
         )
         (new %Deals_obj_map
          (seq
           (seq
            (seq
             (ap ("londonContentWorkerV0" #option-inline-0) %Deals_obj_map)
             (ap ("londonDataWorkerV0" #option-inline-1-0) %Deals_obj_map)
            )
            (ap ("londonMembersWorkerV0" #option-inline-2-0) %Deals_obj_map)
           )
           (canon %init_peer_id% %Deals_obj_map  Deals_obj)
          )
         )
        )
        (ap Deals_obj.$.londonMembersWorkerV0 Deals_obj_flat)
       )
       (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
      )
      (xor
       (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
       (fail :error:)
      )
     )
     (new -if-error-
      (xor
       (match ret.$.success false
        (seq
         (new $array-inline
          (seq
           (seq
            (ap "Failed to resolve subnet: " $array-inline)
            (ap ret.$.error $array-inline)
           )
           (canon %init_peer_id% $array-inline  #array-inline-0)
          )
         )
         (call %init_peer_id% ("run-console" "print") [#array-inline-0])
        )
       )
       (seq
        (ap :error: -if-error-)
        (xor
         (match :error:.$.error_code 10001
          (null)
         )
         (fail -if-error-)
        )
       )
      )
     )
    )
    (ap ret.$.workers ret_flat)
   )
   (call %init_peer_id% ("run-console" "print") [ret_flat])
  )
  (call %init_peer_id% ("callbackSrv" "response") [true])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function subnet(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "subnet",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "bool",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        subnet_script
    );
}

export const run_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "campaignCid") [] -campaignCid-arg-)
   )
   (new $subscriptions
    (new $queue
     (seq
      (seq
       (seq
        (seq
         (seq
          (seq
           (seq
            (seq
             (seq
              (seq
               (seq
                (seq
                 (seq
                  (call %init_peer_id% ("run-console" "print") ["starting"])
                  (par
                   (par
                    (new $option-inline
                     (seq
                      (seq
                       (new %Deal_obj_map
                        (seq
                         (seq
                          (seq
                           (seq
                            (seq
                             (seq
                              (ap ("chainNetwork" "local") %Deal_obj_map)
                              (ap ("chainNetworkId" 31337) %Deal_obj_map)
                             )
                             (ap ("dealId" "2901bb75a1f4b0ac205cb2e68986a53e3480eb56") %Deal_obj_map)
                            )
                            (ap ("dealIdOriginal" "0x2901bb75a1f4B0ac205CB2e68986A53E3480eB56") %Deal_obj_map)
                           )
                           (ap ("definition" "bafkreigtqodqs2vcg56t7jymph7mo6cmmoex7de3kxdmpgi57hpwitp6o4") %Deal_obj_map)
                          )
                          (ap ("timestamp" "2024-03-17T03:24:27.502Z") %Deal_obj_map)
                         )
                         (canon %init_peer_id% %Deal_obj_map  Deal_obj)
                        )
                       )
                       (xor
                        (ap Deal_obj $option-inline)
                        (null)
                       )
                      )
                      (canon %init_peer_id% $option-inline  #option-inline-0)
                     )
                    )
                    (new $option-inline-1
                     (seq
                      (seq
                       (new %Deal_obj-0_map
                        (seq
                         (seq
                          (seq
                           (seq
                            (seq
                             (seq
                              (ap ("chainNetwork" "local") %Deal_obj-0_map)
                              (ap ("chainNetworkId" 31337) %Deal_obj-0_map)
                             )
                             (ap ("dealId" "18998c7e38ede4df09ceec08e5372bf8fe5719ea") %Deal_obj-0_map)
                            )
                            (ap ("dealIdOriginal" "0x18998c7E38ede4dF09cEec08E5372Bf8fe5719ea") %Deal_obj-0_map)
                           )
                           (ap ("definition" "bafkreiafv5fjgtjrvhnnbaprdhtprx3uibmni6jmhfvlgudh54n7inhwaq") %Deal_obj-0_map)
                          )
                          (ap ("timestamp" "2024-03-17T03:24:23.350Z") %Deal_obj-0_map)
                         )
                         (canon %init_peer_id% %Deal_obj-0_map  Deal_obj-0)
                        )
                       )
                       (xor
                        (ap Deal_obj-0 $option-inline-1)
                        (null)
                       )
                      )
                      (canon %init_peer_id% $option-inline-1  #option-inline-1-0)
                     )
                    )
                   )
                   (new $option-inline-2
                    (seq
                     (seq
                      (new %Deal_obj-1_map
                       (seq
                        (seq
                         (seq
                          (seq
                           (seq
                            (seq
                             (ap ("chainNetwork" "local") %Deal_obj-1_map)
                             (ap ("chainNetworkId" 31337) %Deal_obj-1_map)
                            )
                            (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %Deal_obj-1_map)
                           )
                           (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %Deal_obj-1_map)
                          )
                          (ap ("definition" "bafkreid5kfpzbz3rx4gyoysrho7z77a3nyd7cqc3c2a6sqfq4rvvphj674") %Deal_obj-1_map)
                         )
                         (ap ("timestamp" "2024-03-17T03:24:19.223Z") %Deal_obj-1_map)
                        )
                        (canon %init_peer_id% %Deal_obj-1_map  Deal_obj-1)
                       )
                      )
                      (xor
                       (ap Deal_obj-1 $option-inline-2)
                       (null)
                      )
                     )
                     (canon %init_peer_id% $option-inline-2  #option-inline-2-0)
                    )
                   )
                  )
                 )
                 (new %Deals_obj_map
                  (seq
                   (seq
                    (seq
                     (ap ("londonContentWorkerV0" #option-inline-0) %Deals_obj_map)
                     (ap ("londonDataWorkerV0" #option-inline-1-0) %Deals_obj_map)
                    )
                    (ap ("londonMembersWorkerV0" #option-inline-2-0) %Deals_obj_map)
                   )
                   (canon %init_peer_id% %Deals_obj_map  Deals_obj)
                  )
                 )
                )
                (ap Deals_obj.$.londonMembersWorkerV0 Deals_obj_flat)
               )
               (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
              )
              (xor
               (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
               (fail :error:)
              )
             )
             (new -if-error-
              (xor
               (match ret.$.success false
                (seq
                 (new $array-inline
                  (seq
                   (seq
                    (ap "Failed to resolve subnet: " $array-inline)
                    (ap ret.$.error $array-inline)
                   )
                   (canon %init_peer_id% $array-inline  #array-inline-0)
                  )
                 )
                 (call %init_peer_id% ("run-console" "print") [#array-inline-0])
                )
               )
               (seq
                (ap :error: -if-error-)
                (xor
                 (match :error:.$.error_code 10001
                  (null)
                 )
                 (fail -if-error-)
                )
               )
              )
             )
            )
            (ap ret.$.workers ret_flat)
           )
           (call %init_peer_id% ("run-console" "print") [ret_flat.$.[0]])
          )
          (xor
           (seq
            (seq
             (seq
              (seq
               (seq
                (new $-ephemeral-stream-
                 (new #-ephemeral-canon-
                  (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                 )
                )
                (new $-ephemeral-stream-
                 (new #-ephemeral-canon-
                  (canon ret_flat.$.[0].host_id $-ephemeral-stream-  #-ephemeral-canon-)
                 )
                )
               )
               (call ret_flat.$.[0].worker_id.[0] ("memSubscriptions" "fetch") [] ret-0)
              )
              (fold ret-0 cid-0
               (seq
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (seq
                           (seq
                            (new $-ephemeral-stream-
                             (new #-ephemeral-canon-
                              (canon ret_flat.$.[0].host_id $-ephemeral-stream-  #-ephemeral-canon-)
                             )
                            )
                            (new $-ephemeral-stream-
                             (new #-ephemeral-canon-
                              (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                             )
                            )
                           )
                           (call %init_peer_id% ("run-console" "print") [-campaignCid-arg-])
                          )
                          (new $-ephemeral-stream-
                           (new #-ephemeral-canon-
                            (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                           )
                          )
                         )
                         (new $-ephemeral-stream-
                          (new #-ephemeral-canon-
                           (canon ret_flat.$.[0].host_id $-ephemeral-stream-  #-ephemeral-canon-)
                          )
                         )
                        )
                        (call ret_flat.$.[0].worker_id.[0] ("memKubo" "get") ["/dns4/ipfs/tcp/5001" cid-0] ret-1)
                       )
                       (new $-ephemeral-stream-
                        (new #-ephemeral-canon-
                         (canon ret_flat.$.[0].host_id $-ephemeral-stream-  #-ephemeral-canon-)
                        )
                       )
                      )
                      (new $-ephemeral-stream-
                       (new #-ephemeral-canon-
                        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                       )
                      )
                     )
                     (call %init_peer_id% ("run-console" "print") [ret-1])
                    )
                    (new $-ephemeral-stream-
                     (new #-ephemeral-canon-
                      (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                     )
                    )
                   )
                   (new $-ephemeral-stream-
                    (new #-ephemeral-canon-
                     (canon ret_flat.$.[0].host_id $-ephemeral-stream-  #-ephemeral-canon-)
                    )
                   )
                  )
                  (call ret_flat.$.[0].worker_id.[0] ("json" "parse") [ret-1] ret-2)
                 )
                 (ap ret-2 $subscriptions)
                )
                (next cid-0)
               )
               (null)
              )
             )
             (new $-ephemeral-stream-
              (new #-ephemeral-canon-
               (canon ret_flat.$.[0].host_id $-ephemeral-stream-  #-ephemeral-canon-)
              )
             )
            )
            (new $-ephemeral-stream-
             (new #-ephemeral-canon-
              (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
             )
            )
           )
           (seq
            (seq
             (seq
              (new $-ephemeral-stream-
               (new #-ephemeral-canon-
                (canon ret_flat.$.[0].host_id $-ephemeral-stream-  #-ephemeral-canon-)
               )
              )
              (new $-ephemeral-stream-
               (new #-ephemeral-canon-
                (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
               )
              )
             )
             (new $-ephemeral-stream-
              (new #-ephemeral-canon-
               (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
              )
             )
            )
            (fail :error:)
           )
          )
         )
         (canon %init_peer_id% $subscriptions  #subscriptions_canon)
        )
        (fold #subscriptions_canon sub-0
         (seq
          (seq
           (seq
            (seq
             (seq
              (seq
               (seq
                (seq
                 (seq
                  (seq
                   (call %init_peer_id% ("run-console" "print") [sub-0])
                   (par
                    (par
                     (new $option-inline-3
                      (seq
                       (seq
                        (new %Deal_obj-2_map
                         (seq
                          (seq
                           (seq
                            (seq
                             (seq
                              (seq
                               (ap ("chainNetwork" "local") %Deal_obj-2_map)
                               (ap ("chainNetworkId" 31337) %Deal_obj-2_map)
                              )
                              (ap ("dealId" "2901bb75a1f4b0ac205cb2e68986a53e3480eb56") %Deal_obj-2_map)
                             )
                             (ap ("dealIdOriginal" "0x2901bb75a1f4B0ac205CB2e68986A53E3480eB56") %Deal_obj-2_map)
                            )
                            (ap ("definition" "bafkreigtqodqs2vcg56t7jymph7mo6cmmoex7de3kxdmpgi57hpwitp6o4") %Deal_obj-2_map)
                           )
                           (ap ("timestamp" "2024-03-17T03:24:27.502Z") %Deal_obj-2_map)
                          )
                          (canon %init_peer_id% %Deal_obj-2_map  Deal_obj-2)
                         )
                        )
                        (xor
                         (ap Deal_obj-2 $option-inline-3)
                         (null)
                        )
                       )
                       (canon %init_peer_id% $option-inline-3  #option-inline-3-0)
                      )
                     )
                     (new $option-inline-4
                      (seq
                       (seq
                        (new %Deal_obj-3_map
                         (seq
                          (seq
                           (seq
                            (seq
                             (seq
                              (seq
                               (ap ("chainNetwork" "local") %Deal_obj-3_map)
                               (ap ("chainNetworkId" 31337) %Deal_obj-3_map)
                              )
                              (ap ("dealId" "18998c7e38ede4df09ceec08e5372bf8fe5719ea") %Deal_obj-3_map)
                             )
                             (ap ("dealIdOriginal" "0x18998c7E38ede4dF09cEec08E5372Bf8fe5719ea") %Deal_obj-3_map)
                            )
                            (ap ("definition" "bafkreiafv5fjgtjrvhnnbaprdhtprx3uibmni6jmhfvlgudh54n7inhwaq") %Deal_obj-3_map)
                           )
                           (ap ("timestamp" "2024-03-17T03:24:23.350Z") %Deal_obj-3_map)
                          )
                          (canon %init_peer_id% %Deal_obj-3_map  Deal_obj-3)
                         )
                        )
                        (xor
                         (ap Deal_obj-3 $option-inline-4)
                         (null)
                        )
                       )
                       (canon %init_peer_id% $option-inline-4  #option-inline-4-0)
                      )
                     )
                    )
                    (new $option-inline-5
                     (seq
                      (seq
                       (new %Deal_obj-4_map
                        (seq
                         (seq
                          (seq
                           (seq
                            (seq
                             (seq
                              (ap ("chainNetwork" "local") %Deal_obj-4_map)
                              (ap ("chainNetworkId" 31337) %Deal_obj-4_map)
                             )
                             (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %Deal_obj-4_map)
                            )
                            (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %Deal_obj-4_map)
                           )
                           (ap ("definition" "bafkreid5kfpzbz3rx4gyoysrho7z77a3nyd7cqc3c2a6sqfq4rvvphj674") %Deal_obj-4_map)
                          )
                          (ap ("timestamp" "2024-03-17T03:24:19.223Z") %Deal_obj-4_map)
                         )
                         (canon %init_peer_id% %Deal_obj-4_map  Deal_obj-4)
                        )
                       )
                       (xor
                        (ap Deal_obj-4 $option-inline-5)
                        (null)
                       )
                      )
                      (canon %init_peer_id% $option-inline-5  #option-inline-5-0)
                     )
                    )
                   )
                  )
                  (new %Deals_obj-0_map
                   (seq
                    (seq
                     (seq
                      (ap ("londonContentWorkerV0" #option-inline-3-0) %Deals_obj-0_map)
                      (ap ("londonDataWorkerV0" #option-inline-4-0) %Deals_obj-0_map)
                     )
                     (ap ("londonMembersWorkerV0" #option-inline-5-0) %Deals_obj-0_map)
                    )
                    (canon %init_peer_id% %Deals_obj-0_map  Deals_obj-0)
                   )
                  )
                 )
                 (ap Deals_obj-0.$.londonDataWorkerV0 Deals_obj-0_flat)
                )
                (ap Deals_obj-0_flat.$.[0].dealIdOriginal Deals_obj-0_flat_flat)
               )
               (xor
                (call -relay- ("subnet" "resolve") [Deals_obj-0_flat_flat] ret-3)
                (fail :error:)
               )
              )
              (new -if-error-
               (xor
                (match ret-3.$.success false
                 (seq
                  (new $array-inline-1
                   (seq
                    (seq
                     (ap "Failed to resolve subnet: " $array-inline-1)
                     (ap ret-3.$.error $array-inline-1)
                    )
                    (canon %init_peer_id% $array-inline-1  #array-inline-1-0)
                   )
                  )
                  (call %init_peer_id% ("run-console" "print") [#array-inline-1-0])
                 )
                )
                (seq
                 (ap :error: -if-error-)
                 (xor
                  (match :error:.$.error_code 10001
                   (null)
                  )
                  (fail -if-error-)
                 )
                )
               )
              )
             )
             (ap ret-3.$.workers ret-3_flat)
            )
            (call %init_peer_id% ("run-console" "print") [ret-3_flat.$.[0]])
           )
           (xor
            (seq
             (seq
              (seq
               (seq
                (seq
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon ret-3_flat.$.[0].host_id $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                )
                (call ret-3_flat.$.[0].worker_id.[0] ("memData" "add") [sub-0] ret-4)
               )
               (ap ret-4 $queue)
              )
              (new $-ephemeral-stream-
               (new #-ephemeral-canon-
                (canon ret-3_flat.$.[0].host_id $-ephemeral-stream-  #-ephemeral-canon-)
               )
              )
             )
             (new $-ephemeral-stream-
              (new #-ephemeral-canon-
               (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
              )
             )
            )
            (seq
             (seq
              (seq
               (new $-ephemeral-stream-
                (new #-ephemeral-canon-
                 (canon ret-3_flat.$.[0].host_id $-ephemeral-stream-  #-ephemeral-canon-)
                )
               )
               (new $-ephemeral-stream-
                (new #-ephemeral-canon-
                 (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                )
               )
              )
              (new $-ephemeral-stream-
               (new #-ephemeral-canon-
                (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
               )
              )
             )
             (fail :error:)
            )
           )
          )
          (next sub-0)
         )
         (null)
        )
       )
       (canon %init_peer_id% $queue  #queue_canon)
      )
      (fold #queue_canon qq-0
       (seq
        (fold qq-0 q-0
         (seq
          (seq
           (seq
            (seq
             (seq
              (seq
               (seq
                (seq
                 (seq
                  (seq
                   (call %init_peer_id% ("run-console" "print") [q-0])
                   (par
                    (par
                     (new $option-inline-6
                      (seq
                       (seq
                        (new %Deal_obj-5_map
                         (seq
                          (seq
                           (seq
                            (seq
                             (seq
                              (seq
                               (ap ("chainNetwork" "local") %Deal_obj-5_map)
                               (ap ("chainNetworkId" 31337) %Deal_obj-5_map)
                              )
                              (ap ("dealId" "2901bb75a1f4b0ac205cb2e68986a53e3480eb56") %Deal_obj-5_map)
                             )
                             (ap ("dealIdOriginal" "0x2901bb75a1f4B0ac205CB2e68986A53E3480eB56") %Deal_obj-5_map)
                            )
                            (ap ("definition" "bafkreigtqodqs2vcg56t7jymph7mo6cmmoex7de3kxdmpgi57hpwitp6o4") %Deal_obj-5_map)
                           )
                           (ap ("timestamp" "2024-03-17T03:24:27.502Z") %Deal_obj-5_map)
                          )
                          (canon %init_peer_id% %Deal_obj-5_map  Deal_obj-5)
                         )
                        )
                        (xor
                         (ap Deal_obj-5 $option-inline-6)
                         (null)
                        )
                       )
                       (canon %init_peer_id% $option-inline-6  #option-inline-6-0)
                      )
                     )
                     (new $option-inline-7
                      (seq
                       (seq
                        (new %Deal_obj-6_map
                         (seq
                          (seq
                           (seq
                            (seq
                             (seq
                              (seq
                               (ap ("chainNetwork" "local") %Deal_obj-6_map)
                               (ap ("chainNetworkId" 31337) %Deal_obj-6_map)
                              )
                              (ap ("dealId" "18998c7e38ede4df09ceec08e5372bf8fe5719ea") %Deal_obj-6_map)
                             )
                             (ap ("dealIdOriginal" "0x18998c7E38ede4dF09cEec08E5372Bf8fe5719ea") %Deal_obj-6_map)
                            )
                            (ap ("definition" "bafkreiafv5fjgtjrvhnnbaprdhtprx3uibmni6jmhfvlgudh54n7inhwaq") %Deal_obj-6_map)
                           )
                           (ap ("timestamp" "2024-03-17T03:24:23.350Z") %Deal_obj-6_map)
                          )
                          (canon %init_peer_id% %Deal_obj-6_map  Deal_obj-6)
                         )
                        )
                        (xor
                         (ap Deal_obj-6 $option-inline-7)
                         (null)
                        )
                       )
                       (canon %init_peer_id% $option-inline-7  #option-inline-7-0)
                      )
                     )
                    )
                    (new $option-inline-8
                     (seq
                      (seq
                       (new %Deal_obj-7_map
                        (seq
                         (seq
                          (seq
                           (seq
                            (seq
                             (seq
                              (ap ("chainNetwork" "local") %Deal_obj-7_map)
                              (ap ("chainNetworkId" 31337) %Deal_obj-7_map)
                             )
                             (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %Deal_obj-7_map)
                            )
                            (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %Deal_obj-7_map)
                           )
                           (ap ("definition" "bafkreid5kfpzbz3rx4gyoysrho7z77a3nyd7cqc3c2a6sqfq4rvvphj674") %Deal_obj-7_map)
                          )
                          (ap ("timestamp" "2024-03-17T03:24:19.223Z") %Deal_obj-7_map)
                         )
                         (canon %init_peer_id% %Deal_obj-7_map  Deal_obj-7)
                        )
                       )
                       (xor
                        (ap Deal_obj-7 $option-inline-8)
                        (null)
                       )
                      )
                      (canon %init_peer_id% $option-inline-8  #option-inline-8-0)
                     )
                    )
                   )
                  )
                  (new %Deals_obj-1_map
                   (seq
                    (seq
                     (seq
                      (ap ("londonContentWorkerV0" #option-inline-6-0) %Deals_obj-1_map)
                      (ap ("londonDataWorkerV0" #option-inline-7-0) %Deals_obj-1_map)
                     )
                     (ap ("londonMembersWorkerV0" #option-inline-8-0) %Deals_obj-1_map)
                    )
                    (canon %init_peer_id% %Deals_obj-1_map  Deals_obj-1)
                   )
                  )
                 )
                 (ap Deals_obj-1.$.londonContentWorkerV0 Deals_obj-1_flat)
                )
                (ap Deals_obj-1_flat.$.[0].dealIdOriginal Deals_obj-1_flat_flat)
               )
               (xor
                (call -relay- ("subnet" "resolve") [Deals_obj-1_flat_flat] ret-5)
                (fail :error:)
               )
              )
              (new -if-error-
               (xor
                (match ret-5.$.success false
                 (seq
                  (new $array-inline-2
                   (seq
                    (seq
                     (ap "Failed to resolve subnet: " $array-inline-2)
                     (ap ret-5.$.error $array-inline-2)
                    )
                    (canon %init_peer_id% $array-inline-2  #array-inline-2-0)
                   )
                  )
                  (call %init_peer_id% ("run-console" "print") [#array-inline-2-0])
                 )
                )
                (seq
                 (ap :error: -if-error-)
                 (xor
                  (match :error:.$.error_code 10001
                   (null)
                  )
                  (fail -if-error-)
                 )
                )
               )
              )
             )
             (ap ret-5.$.workers ret-5_flat)
            )
            (call %init_peer_id% ("run-console" "print") [ret-5_flat.$.[0]])
           )
           (xor
            (seq
             (seq
              (seq
               (seq
                (seq
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon ret-5_flat.$.[0].host_id $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                )
                (call ret-5_flat.$.[0].worker_id.[0] ("memContent" "create") [q-0] ret-6)
               )
               (new $-ephemeral-stream-
                (new #-ephemeral-canon-
                 (canon ret-5_flat.$.[0].host_id $-ephemeral-stream-  #-ephemeral-canon-)
                )
               )
              )
              (new $-ephemeral-stream-
               (new #-ephemeral-canon-
                (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
               )
              )
             )
             (call %init_peer_id% ("run-console" "print") [ret-6])
            )
            (seq
             (seq
              (seq
               (new $-ephemeral-stream-
                (new #-ephemeral-canon-
                 (canon ret-5_flat.$.[0].host_id $-ephemeral-stream-  #-ephemeral-canon-)
                )
               )
               (new $-ephemeral-stream-
                (new #-ephemeral-canon-
                 (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                )
               )
              )
              (new $-ephemeral-stream-
               (new #-ephemeral-canon-
                (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
               )
              )
             )
             (fail :error:)
            )
           )
          )
          (next q-0)
         )
         (null)
        )
        (next qq-0)
       )
       (null)
      )
     )
    )
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [true])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function run(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "run",
    "arrow": {
        "domain": {
            "fields": {
                "campaignCid": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "bool",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        run_script
    );
}
