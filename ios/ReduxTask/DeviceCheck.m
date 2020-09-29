//
//  DeviceCheck.m
//  ReduxTask
//
//  Created by Heli Shah on 21/09/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
@interface RCT_EXTERN_MODULE(DeviceCheck, NSObject)

RCT_EXTERN_METHOD(checkIsEmulator)
RCT_EXTERN_METHOD(getStatusDevice: (RCTResponseSenderBlock)callback)

@end
