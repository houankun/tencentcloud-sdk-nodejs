/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const AbstractModel = require("../../common/abstract_model");

/**
 * GetVodDrmLicense返回参数结构体
 * @class
 */
class GetVodDrmLicenseResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * base64 加密的license 二进制数据
         * @type {string || null}
         */
        this.License = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.License = params.License || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DeleteLiveRecord返回参数结构体
 * @class
 */
class DeleteLiveRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * AddDelayLiveStream返回参数结构体
 * @class
 */
class AddDelayLiveStreamResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * StopLiveRecord返回参数结构体
 * @class
 */
class StopLiveRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * ModifyPullStreamConfig请求参数结构体
 * @class
 */
class ModifyPullStreamConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置id。
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * 源Url。
         * @type {string || null}
         */
        this.FromUrl = null;

        /**
         * 目的Url。
         * @type {string || null}
         */
        this.ToUrl = null;

        /**
         * 区域id,1-深圳,2-上海，3-天津,4-香港。如有改动，需同时传入IspId。
         * @type {number || null}
         */
        this.AreaId = null;

        /**
         * 运营商id,1-电信,2-移动,3-联通,4-其他,AreaId为4的时候,IspId只能为其他。如有改动，需同时传入AreaId。
         * @type {number || null}
         */
        this.IspId = null;

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，注意：
1. 结束时间必须大于开始时间；
2. 结束时间和开始时间必须大于当前时间；
3. 结束时间 和 开始时间 间隔必须小于七天。
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = params.ConfigId || null;
        this.FromUrl = params.FromUrl || null;
        this.ToUrl = params.ToUrl || null;
        this.AreaId = params.AreaId || null;
        this.IspId = params.IspId || null;
        this.StartTime = params.StartTime || null;
        this.EndTime = params.EndTime || null;

    }
}

/**
 * 播放鉴权key信息
 * @class
 */
class PlayAuthKeyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 是否启用，0：关闭，1：启用。
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 鉴权key。
         * @type {string || null}
         */
        this.AuthKey = null;

        /**
         * 有效时间，单位：秒。
         * @type {number || null}
         */
        this.AuthDelta = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = params.DomainName || null;
        this.Enable = params.Enable || null;
        this.AuthKey = params.AuthKey || null;
        this.AuthDelta = params.AuthDelta || null;

    }
}

/**
 * DescribeLiveStreamOnlineList返回参数结构体
 * @class
 */
class DescribeLiveStreamOnlineListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的总个数。
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 总页数。
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * 分页的页码。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页显示的条数。
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 正在推送流的信息列表
         * @type {Array.<StreamOnlineInfo> || null}
         */
        this.OnlineInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalNum = params.TotalNum || null;
        this.TotalPage = params.TotalPage || null;
        this.PageNum = params.PageNum || null;
        this.PageSize = params.PageSize || null;

        if (params.OnlineInfo) {
            this.OnlineInfo = new Array();
            for (let z in params.OnlineInfo) {
                let obj = new StreamOnlineInfo();
                obj.deserialize(params.OnlineInfo[z]);
                this.OnlineInfo.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * CreateLiveRecord返回参数结构体
 * @class
 */
class CreateLiveRecordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID，全局唯一标识录制任务。
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = params.TaskId || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * GetVodDrmLicense请求参数结构体
 * @class
 */
class GetVodDrmLicenseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Drmlicense信息。
         * @type {DrmLicenseInfo || null}
         */
        this.DrmLicenseInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DrmLicenseInfo) {
            let obj = new DrmLicenseInfo();
            obj.deserialize(params.DrmLicenseInfo)
            this.DrmLicenseInfo = obj;
        }

    }
}

/**
 * UpdateLiveWatermark返回参数结构体
 * @class
 */
class UpdateLiveWatermarkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * ModifyLivePlayAuthKey返回参数结构体
 * @class
 */
class ModifyLivePlayAuthKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeDrmEncryptKeys返回参数结构体
 * @class
 */
class DescribeDrmEncryptKeysResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * base64加密后的EncryptKeys信息。
         * @type {string || null}
         */
        this.EncryptKeys = null;

        /**
         * 使用公钥加密的sessionkey，用来使用aes-128 ecb模式解码encryptkeys中key和iv。
         * @type {string || null}
         */
        this.SessionKey = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EncryptKeys = params.EncryptKeys || null;
        this.SessionKey = params.SessionKey || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeLiveWatermarks返回参数结构体
 * @class
 */
class DescribeLiveWatermarksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印总个数。
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 水印信息列表。
         * @type {Array.<WatermarkInfo> || null}
         */
        this.WatermarkList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalNum = params.TotalNum || null;

        if (params.WatermarkList) {
            this.WatermarkList = new Array();
            for (let z in params.WatermarkList) {
                let obj = new WatermarkInfo();
                obj.deserialize(params.WatermarkList[z]);
                this.WatermarkList.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 源对象
 * @class
 */
class DrmSourceObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输入的桶名称。
         * @type {string || null}
         */
        this.BucketName = null;

        /**
         * 输入对象名称。
         * @type {string || null}
         */
        this.ObjectName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BucketName = params.BucketName || null;
        this.ObjectName = params.ObjectName || null;

    }
}

/**
 * CreatePullStreamConfig返回参数结构体
 * @class
 */
class CreatePullStreamConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置成功后的id。
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = params.ConfigId || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * ResumeDelayLiveStream返回参数结构体
 * @class
 */
class ResumeDelayLiveStreamResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * ModifyPullStreamStatus返回参数结构体
 * @class
 */
class ModifyPullStreamStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 水印信息

 * @class
 */
class WatermarkInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印ID。
         * @type {number || null}
         */
        this.WatermarkId = null;

        /**
         * 水印图片url。
         * @type {string || null}
         */
        this.PictureUrl = null;

        /**
         * 显示位置，X轴偏移。
         * @type {number || null}
         */
        this.XPosition = null;

        /**
         * 显示位置，Y轴偏移。
         * @type {number || null}
         */
        this.YPosition = null;

        /**
         * 水印名称。
         * @type {string || null}
         */
        this.WatermarkName = null;

        /**
         * 当前状态。0：未使用，1:使用中。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 添加时间。
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WatermarkId = params.WatermarkId || null;
        this.PictureUrl = params.PictureUrl || null;
        this.XPosition = params.XPosition || null;
        this.YPosition = params.YPosition || null;
        this.WatermarkName = params.WatermarkName || null;
        this.Status = params.Status || null;
        this.CreateTime = params.CreateTime || null;

    }
}

/**
 * 推流鉴权key信息
 * @class
 */
class PushAuthKeyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 是否启用，0：关闭，1：启用。
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 主鉴权key。
         * @type {string || null}
         */
        this.MasterAuthKey = null;

        /**
         * 备鉴权key。
         * @type {string || null}
         */
        this.BackupAuthKey = null;

        /**
         * 有效时间，单位：秒。
         * @type {number || null}
         */
        this.AuthDelta = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = params.DomainName || null;
        this.Enable = params.Enable || null;
        this.MasterAuthKey = params.MasterAuthKey || null;
        this.BackupAuthKey = params.BackupAuthKey || null;
        this.AuthDelta = params.AuthDelta || null;

    }
}

/**
 * ForbidLiveStream返回参数结构体
 * @class
 */
class ForbidLiveStreamResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeLiveStreamOnlineInfo返回参数结构体
 * @class
 */
class DescribeLiveStreamOnlineInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分页的页码。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 符合条件的总个数。
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 总页数。
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * 流信息列表
         * @type {Array.<StreamInfo> || null}
         */
        this.StreamInfoList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNum = params.PageNum || null;
        this.PageSize = params.PageSize || null;
        this.TotalNum = params.TotalNum || null;
        this.TotalPage = params.TotalPage || null;

        if (params.StreamInfoList) {
            this.StreamInfoList = new Array();
            for (let z in params.StreamInfoList) {
                let obj = new StreamInfo();
                obj.deserialize(params.StreamInfoList[z]);
                this.StreamInfoList.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeLivePlayAuthKey请求参数结构体
 * @class
 */
class DescribeLivePlayAuthKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名。
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = params.DomainName || null;

    }
}

/**
 * 推流时间
 * @class
 */
class PublishTime extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流时间
UTC 格式，例如：2018-06-29T19:00:00Z。
         * @type {string || null}
         */
        this.PublishTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PublishTime = params.PublishTime || null;

    }
}

/**
 * DescribeDrmEncryptKeys请求参数结构体
 * @class
 */
class DescribeDrmEncryptKeysRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 获取key所需要的参数。
         * @type {DrmGetKeyPara || null}
         */
        this.DrmGetKeyPara = null;

        /**
         * base64 编码的DrmGetKeyPara参数数字签名。
         * @type {string || null}
         */
        this.RsaSignature = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DrmGetKeyPara) {
            let obj = new DrmGetKeyPara();
            obj.deserialize(params.DrmGetKeyPara)
            this.DrmGetKeyPara = obj;
        }
        this.RsaSignature = params.RsaSignature || null;

    }
}

/**
 * ResumeDelayLiveStream请求参数结构体
 * @class
 */
class ResumeDelayLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 您的加速域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = params.AppName || null;
        this.DomainName = params.DomainName || null;
        this.StreamName = params.StreamName || null;

    }
}

/**
 * ModifyLivePlayAuthKey请求参数结构体
 * @class
 */
class ModifyLivePlayAuthKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 是否启用，0：关闭，1：启用。
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 鉴权key。
         * @type {string || null}
         */
        this.AuthKey = null;

        /**
         * 有效时间，单位：秒。
         * @type {number || null}
         */
        this.AuthDelta = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = params.DomainName || null;
        this.Enable = params.Enable || null;
        this.AuthKey = params.AuthKey || null;
        this.AuthDelta = params.AuthDelta || null;

    }
}

/**
 * SetLiveWatermarkStatus请求参数结构体
 * @class
 */
class SetLiveWatermarkStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印ID。
         * @type {number || null}
         */
        this.WatermarkId = null;

        /**
         * 状态。0：停用，1:启用
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WatermarkId = params.WatermarkId || null;
        this.Status = params.Status || null;

    }
}

/**
 * DescribeLiveStreamOnlineList请求参数结构体
 * @class
 */
class DescribeLiveStreamOnlineListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 您的加速域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 取得第几页，默认1。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页大小，最大100。 
取值：1~100之前的任意整数。
默认值：10
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = params.DomainName || null;
        this.AppName = params.AppName || null;
        this.PageNum = params.PageNum || null;
        this.PageSize = params.PageSize || null;

    }
}

/**
 * Drm获取key入参
 * @class
 */
class DrmGetKeyPara extends  AbstractModel {
    constructor(){
        super();

        /**
         * drm类型，widevine或fairplay
         * @type {string || null}
         */
        this.DrmType = null;

        /**
         * Tracks，audio,video
         * @type {Array.<string> || null}
         */
        this.Tracks = null;

        /**
         * rsa 公钥的base64 编码数据
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * 内容id，标识唯一一个加密内容
         * @type {string || null}
         */
        this.ContentID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DrmType = params.DrmType || null;
        this.Tracks = params.Tracks || null;
        this.PublicKey = params.PublicKey || null;
        this.ContentID = params.ContentID || null;

    }
}

/**
 * UpdateLiveWatermark请求参数结构体
 * @class
 */
class UpdateLiveWatermarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印ID。
         * @type {number || null}
         */
        this.WatermarkId = null;

        /**
         * 水印图片url。
         * @type {string || null}
         */
        this.PictureUrl = null;

        /**
         * 显示位置，X轴偏移。
         * @type {number || null}
         */
        this.XPosition = null;

        /**
         * 显示位置，Y轴偏移。
         * @type {number || null}
         */
        this.YPosition = null;

        /**
         * 水印名称。
         * @type {string || null}
         */
        this.WatermarkName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WatermarkId = params.WatermarkId || null;
        this.PictureUrl = params.PictureUrl || null;
        this.XPosition = params.XPosition || null;
        this.YPosition = params.YPosition || null;
        this.WatermarkName = params.WatermarkName || null;

    }
}

/**
 * StartDrmEncryption请求参数结构体
 * @class
 */
class StartDrmEncryptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Drm加密所需要的信息。
         * @type {DrmEncryptInfo || null}
         */
        this.DrmEncryptInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DrmEncryptInfo) {
            let obj = new DrmEncryptInfo();
            obj.deserialize(params.DrmEncryptInfo)
            this.DrmEncryptInfo = obj;
        }

    }
}

/**
 * DeleteLiveWatermark请求参数结构体
 * @class
 */
class DeleteLiveWatermarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印ID。
         * @type {number || null}
         */
        this.WatermarkId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WatermarkId = params.WatermarkId || null;

    }
}

/**
 * CreateLiveRecord请求参数结构体
 * @class
 */
class CreateLiveRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 直播流所属应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 推流域名。多域名推流必须设置。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 任务起始时间，录制视频为精彩视频时，忽略此字段。如 2017-01-01 10:10:01。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 任务结束时间。若指定精彩视频录制，结束时间不超过当前时间+30分钟，如果超过或小于起始时间，则实际结束时间为当前时间+30分钟。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 录制类型。不区分大小写。
“video” : 音视频录制【默认】。
“audio” : 纯音频录制。
         * @type {string || null}
         */
        this.RecordType = null;

        /**
         * 录制文件格式。不区分大小写。其值为：
“flv”,“hls”,”mp4”,“aac”,”mp3”，默认“flv”。
         * @type {string || null}
         */
        this.FileFormat = null;

        /**
         * 精彩视频标志。0：普通视频【默认】；1：精彩视频。
         * @type {number || null}
         */
        this.Highlight = null;

        /**
         * A+B=C混流标志。0：非A+B=C混流录制【默认】；1：标示为A+B=C混流录制。
         * @type {number || null}
         */
        this.MixStream = null;

        /**
         * 录制流参数，当前支持以下参数： 
interval 录制分片时长，单位 秒，0 - 7200
storage_time 录制文件存储时长，单位 秒
eg. interval=3600&storage_time=7200
注：参数需要url encode。
         * @type {string || null}
         */
        this.StreamParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = params.StreamName || null;
        this.AppName = params.AppName || null;
        this.DomainName = params.DomainName || null;
        this.StartTime = params.StartTime || null;
        this.EndTime = params.EndTime || null;
        this.RecordType = params.RecordType || null;
        this.FileFormat = params.FileFormat || null;
        this.Highlight = params.Highlight || null;
        this.MixStream = params.MixStream || null;
        this.StreamParam = params.StreamParam || null;

    }
}

/**
 * DropLiveStream返回参数结构体
 * @class
 */
class DropLiveStreamResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeLiveStreamState返回参数结构体
 * @class
 */
class DescribeLiveStreamStateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流状态
         * @type {string || null}
         */
        this.StreamState = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamState = params.StreamState || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * StopLiveRecord请求参数结构体
 * @class
 */
class StopLiveRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 任务ID，全局唯一标识录制任务。
         * @type {number || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = params.StreamName || null;
        this.TaskId = params.TaskId || null;

    }
}

/**
 * Drm加密请求信息
 * @class
 */
class DrmEncryptInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * cos的end point。
         * @type {string || null}
         */
        this.CosEndPoint = null;

        /**
         * cos api密钥id。
         * @type {string || null}
         */
        this.SecretId = null;

        /**
         * cos api密钥。
         * @type {string || null}
         */
        this.SecretKey = null;

        /**
         * drm类型，widevine或fairplay
         * @type {string || null}
         */
        this.DrmType = null;

        /**
         * cos上的原始视频。
         * @type {DrmSourceObject || null}
         */
        this.SourceObject = null;

        /**
         * 加密的视频传输到cos位置。
         * @type {Array.<DrmOutputObject> || null}
         */
        this.OutputObjects = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CosEndPoint = params.CosEndPoint || null;
        this.SecretId = params.SecretId || null;
        this.SecretKey = params.SecretKey || null;
        this.DrmType = params.DrmType || null;

        if (params.SourceObject) {
            let obj = new DrmSourceObject();
            obj.deserialize(params.SourceObject)
            this.SourceObject = obj;
        }

        if (params.OutputObjects) {
            this.OutputObjects = new Array();
            for (let z in params.OutputObjects) {
                let obj = new DrmOutputObject();
                obj.deserialize(params.OutputObjects[z]);
                this.OutputObjects.push(obj);
            }
        }

    }
}

/**
 * ModifyLivePushAuthKey请求参数结构体
 * @class
 */
class ModifyLivePushAuthKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 是否启用，0：关闭，1：启用。
         * @type {number || null}
         */
        this.Enable = null;

        /**
         * 主鉴权key。
         * @type {string || null}
         */
        this.MasterAuthKey = null;

        /**
         * 备鉴权key。
         * @type {string || null}
         */
        this.BackupAuthKey = null;

        /**
         * 有效时间，单位：秒。
         * @type {number || null}
         */
        this.AuthDelta = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = params.DomainName || null;
        this.Enable = params.Enable || null;
        this.MasterAuthKey = params.MasterAuthKey || null;
        this.BackupAuthKey = params.BackupAuthKey || null;
        this.AuthDelta = params.AuthDelta || null;

    }
}

/**
 * 推流信息
 * @class
 */
class StreamInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 直播流所属应用名称
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 创建模式
         * @type {string || null}
         */
        this.CreateMode = null;

        /**
         * 创建时间，如: 2018-07-13 14:48:23
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 流状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 流id
         * @type {string || null}
         */
        this.StreamId = null;

        /**
         * 流名称
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 水印id
         * @type {string || null}
         */
        this.WaterMarkId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = params.AppName || null;
        this.CreateMode = params.CreateMode || null;
        this.CreateTime = params.CreateTime || null;
        this.Status = params.Status || null;
        this.StreamId = params.StreamId || null;
        this.StreamName = params.StreamName || null;
        this.WaterMarkId = params.WaterMarkId || null;

    }
}

/**
 * Drm加密接口入参
 * @class
 */
class DrmOutputObject extends  AbstractModel {
    constructor(){
        super();

        /**
         * 输出的桶名称。
         * @type {string || null}
         */
        this.BucketName = null;

        /**
         * 输出的对象名称。
         * @type {string || null}
         */
        this.ObjectName = null;

        /**
         * 输出对象参数。
         * @type {DrmOutputPara || null}
         */
        this.Para = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BucketName = params.BucketName || null;
        this.ObjectName = params.ObjectName || null;

        if (params.Para) {
            let obj = new DrmOutputPara();
            obj.deserialize(params.Para)
            this.Para = obj;
        }

    }
}

/**
 * DescribeLiveWatermarks请求参数结构体
 * @class
 */
class DescribeLiveWatermarksRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * PlaybackPolicy参数
 * @class
 */
class PlaybackPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 播放license有效时长
         * @type {number || null}
         */
        this.LicenseDurationSeconds = null;

        /**
         * 开始播放后，license的有效时长
         * @type {number || null}
         */
        this.PlaybackDurationSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LicenseDurationSeconds = params.LicenseDurationSeconds || null;
        this.PlaybackDurationSeconds = params.PlaybackDurationSeconds || null;

    }
}

/**
 * DescribeLivePlayAuthKey返回参数结构体
 * @class
 */
class DescribeLivePlayAuthKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 播放鉴权key信息。
         * @type {PlayAuthKeyInfo || null}
         */
        this.PlayAuthKeyInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PlayAuthKeyInfo) {
            let obj = new PlayAuthKeyInfo();
            obj.deserialize(params.PlayAuthKeyInfo)
            this.PlayAuthKeyInfo = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DeleteLiveWatermark返回参数结构体
 * @class
 */
class DeleteLiveWatermarkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeLivePushAuthKey返回参数结构体
 * @class
 */
class DescribeLivePushAuthKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流鉴权key信息。
         * @type {PushAuthKeyInfo || null}
         */
        this.PushAuthKeyInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PushAuthKeyInfo) {
            let obj = new PushAuthKeyInfo();
            obj.deserialize(params.PushAuthKeyInfo)
            this.PushAuthKeyInfo = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DropLiveStream请求参数结构体
 * @class
 */
class DropLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 您的加速域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = params.StreamName || null;
        this.DomainName = params.DomainName || null;
        this.AppName = params.AppName || null;

    }
}

/**
 * GetLiveDrmLicense请求参数结构体
 * @class
 */
class GetLiveDrmLicenseRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * DRMlicense信息。
         * @type {DrmLicenseInfo || null}
         */
        this.DrmLicenseInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DrmLicenseInfo) {
            let obj = new DrmLicenseInfo();
            obj.deserialize(params.DrmLicenseInfo)
            this.DrmLicenseInfo = obj;
        }

    }
}

/**
 * ResumeLiveStream返回参数结构体
 * @class
 */
class ResumeLiveStreamResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * ResumeLiveStream请求参数结构体
 * @class
 */
class ResumeLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 您的加速域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = params.AppName || null;
        this.DomainName = params.DomainName || null;
        this.StreamName = params.StreamName || null;

    }
}

/**
 * DescribeLiveStreamPublishedList请求参数结构体
 * @class
 */
class DescribeLiveStreamPublishedListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 您的域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 结束时间。
UTC 格式，例如：2016-06-30T19:00:00Z。
不超过当前时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 起始时间。 
UTC 格式，例如：2016-06-29T19:00:00Z。
和当前时间相隔不超过7天。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 直播流所属应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 取得第几页。
默认值：1
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 分页大小。

最大值：100。
取值范围：1~100 之前的任意整数。
默认值：10
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = params.DomainName || null;
        this.EndTime = params.EndTime || null;
        this.StartTime = params.StartTime || null;
        this.AppName = params.AppName || null;
        this.PageNum = params.PageNum || null;
        this.PageSize = params.PageSize || null;

    }
}

/**
 * 拉流配置
 * @class
 */
class PullStreamConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拉流配置Id。
         * @type {string || null}
         */
        this.ConfigId = null;

        /**
         * 源Url。
         * @type {string || null}
         */
        this.FromUrl = null;

        /**
         * 目的Url。
         * @type {string || null}
         */
        this.ToUrl = null;

        /**
         * 区域名。
         * @type {string || null}
         */
        this.AreaName = null;

        /**
         * 运营商名。
         * @type {string || null}
         */
        this.IspName = null;

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 0无效，1初始状态，2正在运行，3拉起失败，4暂停。
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = params.ConfigId || null;
        this.FromUrl = params.FromUrl || null;
        this.ToUrl = params.ToUrl || null;
        this.AreaName = params.AreaName || null;
        this.IspName = params.IspName || null;
        this.StartTime = params.StartTime || null;
        this.EndTime = params.EndTime || null;
        this.Status = params.Status || null;

    }
}

/**
 * ModifyPullStreamConfig返回参数结构体
 * @class
 */
class ModifyPullStreamConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * ModifyLivePushAuthKey返回参数结构体
 * @class
 */
class ModifyLivePushAuthKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeLiveStreamState请求参数结构体
 * @class
 */
class DescribeLiveStreamStateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 您的加速域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = params.AppName || null;
        this.DomainName = params.DomainName || null;
        this.StreamName = params.StreamName || null;

    }
}

/**
 * AddLiveWatermark返回参数结构体
 * @class
 */
class AddLiveWatermarkResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印ID。
         * @type {number || null}
         */
        this.WatermarkId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WatermarkId = params.WatermarkId || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribePullStreamConfigs返回参数结构体
 * @class
 */
class DescribePullStreamConfigsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拉流配置。
         * @type {Array.<PullStreamConfig> || null}
         */
        this.PullStreamConfigs = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PullStreamConfigs) {
            this.PullStreamConfigs = new Array();
            for (let z in params.PullStreamConfigs) {
                let obj = new PullStreamConfig();
                obj.deserialize(params.PullStreamConfigs[z]);
                this.PullStreamConfigs.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DrmLicense信息
 * @class
 */
class DrmLicenseInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * drm类型，widevine或fairplay
         * @type {string || null}
         */
        this.DrmType = null;

        /**
         * base64编码后的License请求。
         * @type {string || null}
         */
        this.LicenseReq = null;

        /**
         * 播放策略参数
         * @type {PlaybackPolicy || null}
         */
        this.PlaybackPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DrmType = params.DrmType || null;
        this.LicenseReq = params.LicenseReq || null;

        if (params.PlaybackPolicy) {
            let obj = new PlaybackPolicy();
            obj.deserialize(params.PlaybackPolicy)
            this.PlaybackPolicy = obj;
        }

    }
}

/**
 * StartDrmEncryption返回参数结构体
 * @class
 */
class StartDrmEncryptionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 流名称列表
 * @class
 */
class StreamName extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = params.StreamName || null;

    }
}

/**
 * ForbidLiveStream请求参数结构体
 * @class
 */
class ForbidLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 您的加速域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 恢复流的时间。UTC 格式，例如：2018-11-29T19:00:00Z。

UTC 时间，格式：2018-08-08T17:37:00Z。
         * @type {string || null}
         */
        this.ResumeTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = params.AppName || null;
        this.DomainName = params.DomainName || null;
        this.StreamName = params.StreamName || null;
        this.ResumeTime = params.ResumeTime || null;

    }
}

/**
 * 查询当前正在推流的信息
 * @class
 */
class StreamOnlineInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 推流时间列表
         * @type {Array.<PublishTime> || null}
         */
        this.PublishTimeList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = params.StreamName || null;

        if (params.PublishTimeList) {
            this.PublishTimeList = new Array();
            for (let z in params.PublishTimeList) {
                let obj = new PublishTime();
                obj.deserialize(params.PublishTimeList[z]);
                this.PublishTimeList.push(obj);
            }
        }

    }
}

/**
 * GetLiveDrmLicense返回参数结构体
 * @class
 */
class GetLiveDrmLicenseResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * base64加密后的二进制License信息
         * @type {string || null}
         */
        this.License = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.License = params.License || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * CreatePullStreamConfig请求参数结构体
 * @class
 */
class CreatePullStreamConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源Url。
         * @type {string || null}
         */
        this.FromUrl = null;

        /**
         * 目的Url。
         * @type {string || null}
         */
        this.ToUrl = null;

        /**
         * 区域id,1-深圳,2-上海，3-天津,4-香港。
         * @type {number || null}
         */
        this.AreaId = null;

        /**
         * 运营商id,1-电信,2-移动,3-联通,4-其他,AreaId为4的时候,IspId只能为其他。
         * @type {number || null}
         */
        this.IspId = null;

        /**
         * 开始时间。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间，注意：
1. 结束时间必须大于开始时间；
2. 结束时间和开始时间必须大于当前时间；
3. 结束时间 和 开始时间 间隔必须小于七天。
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FromUrl = params.FromUrl || null;
        this.ToUrl = params.ToUrl || null;
        this.AreaId = params.AreaId || null;
        this.IspId = params.IspId || null;
        this.StartTime = params.StartTime || null;
        this.EndTime = params.EndTime || null;

    }
}

/**
 * DescribeLiveStreamOnlineInfo请求参数结构体
 * @class
 */
class DescribeLiveStreamOnlineInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 取得第几页。
默认值：1
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 分页大小。

最大值：100。
取值范围：1~100 之前的任意整数。
默认值：10
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 0:未开始推流 1:正在推流 2:服务出错 3:已关闭。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNum = params.PageNum || null;
        this.PageSize = params.PageSize || null;
        this.Status = params.Status || null;
        this.StreamName = params.StreamName || null;

    }
}

/**
 * AddLiveWatermark请求参数结构体
 * @class
 */
class AddLiveWatermarkRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 水印图片url。
         * @type {string || null}
         */
        this.PictureUrl = null;

        /**
         * 水印名称。
         * @type {string || null}
         */
        this.WatermarkName = null;

        /**
         * 显示位置,X轴偏移。
         * @type {number || null}
         */
        this.XPosition = null;

        /**
         * 显示位置,Y轴偏移。
         * @type {number || null}
         */
        this.YPosition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PictureUrl = params.PictureUrl || null;
        this.WatermarkName = params.WatermarkName || null;
        this.XPosition = params.XPosition || null;
        this.YPosition = params.YPosition || null;

    }
}

/**
 * Drm加密接口入参
 * @class
 */
class DrmOutputPara extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内容类型。例:video
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 语言,例: en, zh-cn
         * @type {string || null}
         */
        this.Language = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = params.Type || null;
        this.Language = params.Language || null;

    }
}

/**
 * DeleteLiveRecord请求参数结构体
 * @class
 */
class DeleteLiveRecordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 任务ID，全局唯一标识录制任务。
         * @type {number || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StreamName = params.StreamName || null;
        this.TaskId = params.TaskId || null;

    }
}

/**
 * DescribeLivePushAuthKey请求参数结构体
 * @class
 */
class DescribeLivePushAuthKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流域名。
         * @type {string || null}
         */
        this.DomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = params.DomainName || null;

    }
}

/**
 * SetLiveWatermarkStatus返回参数结构体
 * @class
 */
class SetLiveWatermarkStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * ModifyPullStreamStatus请求参数结构体
 * @class
 */
class ModifyPullStreamStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置id列表。
         * @type {Array.<string> || null}
         */
        this.ConfigIds = null;

        /**
         * 目标状态。0无效，2正在运行，4暂停。
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigIds = params.ConfigIds || null;
        this.Status = params.Status || null;

    }
}

/**
 * AddDelayLiveStream请求参数结构体
 * @class
 */
class AddDelayLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 您的加速域名。
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * 流名称。
         * @type {string || null}
         */
        this.StreamName = null;

        /**
         * 延播时间，单位：秒，上限：600秒。
         * @type {number || null}
         */
        this.DelayTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppName = params.AppName || null;
        this.DomainName = params.DomainName || null;
        this.StreamName = params.StreamName || null;
        this.DelayTime = params.DelayTime || null;

    }
}

/**
 * DescribePullStreamConfigs请求参数结构体
 * @class
 */
class DescribePullStreamConfigsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 配置id。
         * @type {string || null}
         */
        this.ConfigId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConfigId = params.ConfigId || null;

    }
}

/**
 * DescribeLiveStreamPublishedList返回参数结构体
 * @class
 */
class DescribeLiveStreamPublishedListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推流记录信息。
         * @type {Array.<StreamName> || null}
         */
        this.PublishInfo = null;

        /**
         * 分页的页码。
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 每页大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 符合条件的总个数。
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 总页数。
         * @type {number || null}
         */
        this.TotalPage = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PublishInfo) {
            this.PublishInfo = new Array();
            for (let z in params.PublishInfo) {
                let obj = new StreamName();
                obj.deserialize(params.PublishInfo[z]);
                this.PublishInfo.push(obj);
            }
        }
        this.PageNum = params.PageNum || null;
        this.PageSize = params.PageSize || null;
        this.TotalNum = params.TotalNum || null;
        this.TotalPage = params.TotalPage || null;
        this.RequestId = params.RequestId || null;

    }
}

module.exports = {
    GetVodDrmLicenseResponse: GetVodDrmLicenseResponse,
    DeleteLiveRecordResponse: DeleteLiveRecordResponse,
    AddDelayLiveStreamResponse: AddDelayLiveStreamResponse,
    StopLiveRecordResponse: StopLiveRecordResponse,
    ModifyPullStreamConfigRequest: ModifyPullStreamConfigRequest,
    PlayAuthKeyInfo: PlayAuthKeyInfo,
    DescribeLiveStreamOnlineListResponse: DescribeLiveStreamOnlineListResponse,
    CreateLiveRecordResponse: CreateLiveRecordResponse,
    GetVodDrmLicenseRequest: GetVodDrmLicenseRequest,
    UpdateLiveWatermarkResponse: UpdateLiveWatermarkResponse,
    ModifyLivePlayAuthKeyResponse: ModifyLivePlayAuthKeyResponse,
    DescribeDrmEncryptKeysResponse: DescribeDrmEncryptKeysResponse,
    DescribeLiveWatermarksResponse: DescribeLiveWatermarksResponse,
    DrmSourceObject: DrmSourceObject,
    CreatePullStreamConfigResponse: CreatePullStreamConfigResponse,
    ResumeDelayLiveStreamResponse: ResumeDelayLiveStreamResponse,
    ModifyPullStreamStatusResponse: ModifyPullStreamStatusResponse,
    WatermarkInfo: WatermarkInfo,
    PushAuthKeyInfo: PushAuthKeyInfo,
    ForbidLiveStreamResponse: ForbidLiveStreamResponse,
    DescribeLiveStreamOnlineInfoResponse: DescribeLiveStreamOnlineInfoResponse,
    DescribeLivePlayAuthKeyRequest: DescribeLivePlayAuthKeyRequest,
    PublishTime: PublishTime,
    DescribeDrmEncryptKeysRequest: DescribeDrmEncryptKeysRequest,
    ResumeDelayLiveStreamRequest: ResumeDelayLiveStreamRequest,
    ModifyLivePlayAuthKeyRequest: ModifyLivePlayAuthKeyRequest,
    SetLiveWatermarkStatusRequest: SetLiveWatermarkStatusRequest,
    DescribeLiveStreamOnlineListRequest: DescribeLiveStreamOnlineListRequest,
    DrmGetKeyPara: DrmGetKeyPara,
    UpdateLiveWatermarkRequest: UpdateLiveWatermarkRequest,
    StartDrmEncryptionRequest: StartDrmEncryptionRequest,
    DeleteLiveWatermarkRequest: DeleteLiveWatermarkRequest,
    CreateLiveRecordRequest: CreateLiveRecordRequest,
    DropLiveStreamResponse: DropLiveStreamResponse,
    DescribeLiveStreamStateResponse: DescribeLiveStreamStateResponse,
    StopLiveRecordRequest: StopLiveRecordRequest,
    DrmEncryptInfo: DrmEncryptInfo,
    ModifyLivePushAuthKeyRequest: ModifyLivePushAuthKeyRequest,
    StreamInfo: StreamInfo,
    DrmOutputObject: DrmOutputObject,
    DescribeLiveWatermarksRequest: DescribeLiveWatermarksRequest,
    PlaybackPolicy: PlaybackPolicy,
    DescribeLivePlayAuthKeyResponse: DescribeLivePlayAuthKeyResponse,
    DeleteLiveWatermarkResponse: DeleteLiveWatermarkResponse,
    DescribeLivePushAuthKeyResponse: DescribeLivePushAuthKeyResponse,
    DropLiveStreamRequest: DropLiveStreamRequest,
    GetLiveDrmLicenseRequest: GetLiveDrmLicenseRequest,
    ResumeLiveStreamResponse: ResumeLiveStreamResponse,
    ResumeLiveStreamRequest: ResumeLiveStreamRequest,
    DescribeLiveStreamPublishedListRequest: DescribeLiveStreamPublishedListRequest,
    PullStreamConfig: PullStreamConfig,
    ModifyPullStreamConfigResponse: ModifyPullStreamConfigResponse,
    ModifyLivePushAuthKeyResponse: ModifyLivePushAuthKeyResponse,
    DescribeLiveStreamStateRequest: DescribeLiveStreamStateRequest,
    AddLiveWatermarkResponse: AddLiveWatermarkResponse,
    DescribePullStreamConfigsResponse: DescribePullStreamConfigsResponse,
    DrmLicenseInfo: DrmLicenseInfo,
    StartDrmEncryptionResponse: StartDrmEncryptionResponse,
    StreamName: StreamName,
    ForbidLiveStreamRequest: ForbidLiveStreamRequest,
    StreamOnlineInfo: StreamOnlineInfo,
    GetLiveDrmLicenseResponse: GetLiveDrmLicenseResponse,
    CreatePullStreamConfigRequest: CreatePullStreamConfigRequest,
    DescribeLiveStreamOnlineInfoRequest: DescribeLiveStreamOnlineInfoRequest,
    AddLiveWatermarkRequest: AddLiveWatermarkRequest,
    DrmOutputPara: DrmOutputPara,
    DeleteLiveRecordRequest: DeleteLiveRecordRequest,
    DescribeLivePushAuthKeyRequest: DescribeLivePushAuthKeyRequest,
    SetLiveWatermarkStatusResponse: SetLiveWatermarkStatusResponse,
    ModifyPullStreamStatusRequest: ModifyPullStreamStatusRequest,
    AddDelayLiveStreamRequest: AddDelayLiveStreamRequest,
    DescribePullStreamConfigsRequest: DescribePullStreamConfigsRequest,
    DescribeLiveStreamPublishedListResponse: DescribeLiveStreamPublishedListResponse,

}
