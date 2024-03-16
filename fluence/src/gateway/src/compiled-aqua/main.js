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
                   (ap ("definition" "bafkreiccejrvu52iid7etblg4rscfhpiw3v64ycbf3igcoew26ycaytgnq") %Deal_obj_map)
                  )
                  (ap ("timestamp" "2024-03-16T17:11:40.093Z") %Deal_obj_map)
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
                   (ap ("definition" "bafkreiedbr75ux3kxo2hpuqh7vwv7cyha2enbcrhqg4l7lawocz54d72cm") %Deal_obj-0_map)
                  )
                  (ap ("timestamp" "2024-03-16T17:11:27.515Z") %Deal_obj-0_map)
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
                  (ap ("definition" "bafkreihh755vtjwm2emat2rcr7yh3ocvlnswise4eu6qlbj6nfshxravba") %Deal_obj-1_map)
                 )
                 (ap ("timestamp" "2024-03-16T17:11:14.829Z") %Deal_obj-1_map)
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
   (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
   (new $queue
    (new $subscriptions
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
                           (ap ("definition" "bafkreiccejrvu52iid7etblg4rscfhpiw3v64ycbf3igcoew26ycaytgnq") %Deal_obj_map)
                          )
                          (ap ("timestamp" "2024-03-16T17:11:40.093Z") %Deal_obj_map)
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
                           (ap ("definition" "bafkreiedbr75ux3kxo2hpuqh7vwv7cyha2enbcrhqg4l7lawocz54d72cm") %Deal_obj-0_map)
                          )
                          (ap ("timestamp" "2024-03-16T17:11:27.515Z") %Deal_obj-0_map)
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
                          (ap ("definition" "bafkreihh755vtjwm2emat2rcr7yh3ocvlnswise4eu6qlbj6nfshxravba") %Deal_obj-1_map)
                         )
                         (ap ("timestamp" "2024-03-16T17:11:14.829Z") %Deal_obj-1_map)
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
                           (call %init_peer_id% ("run-console" "print") [cid-0])
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
                            (ap ("definition" "bafkreiccejrvu52iid7etblg4rscfhpiw3v64ycbf3igcoew26ycaytgnq") %Deal_obj-2_map)
                           )
                           (ap ("timestamp" "2024-03-16T17:11:40.093Z") %Deal_obj-2_map)
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
                            (ap ("definition" "bafkreiedbr75ux3kxo2hpuqh7vwv7cyha2enbcrhqg4l7lawocz54d72cm") %Deal_obj-3_map)
                           )
                           (ap ("timestamp" "2024-03-16T17:11:27.515Z") %Deal_obj-3_map)
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
                           (ap ("definition" "bafkreihh755vtjwm2emat2rcr7yh3ocvlnswise4eu6qlbj6nfshxravba") %Deal_obj-4_map)
                          )
                          (ap ("timestamp" "2024-03-16T17:11:14.829Z") %Deal_obj-4_map)
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
                 (call ret-3_flat.$.[0].worker_id.[0] ("memData" "add") [sub-0] $ret)
                )
                (canon ret-3_flat.$.[0].worker_id.[0] $ret  #push-to-stream-197)
               )
               (ap #push-to-stream-197 $queue)
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
      (fold #queue_canon q-0
       (seq
        (fold q-0 obj-0
         (seq
          (call %init_peer_id% ("run-console" "print") [obj-0])
          (next obj-0)
         )
         (null)
        )
        (next q-0)
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
        run_script
    );
}
