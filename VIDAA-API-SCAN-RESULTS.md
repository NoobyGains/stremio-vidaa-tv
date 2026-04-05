# VIDAA API Scan Results — Hisense PX1HE (100L5H Laser Projector)
Scanned: 2026-04-05 via vidaa-edge + automated Claude Code probes

## Device Profile

| Property | Value |
|----------|-------|
| Model | PX1HE (100L5H) |
| Brand | Hisense |
| Chipset | MediaTek MT9900 |
| Panel | 3840x2160 (4K) |
| App Resolution | 720p |
| Browser | Chromium 88 (Linux aarch64) |
| OS | VIDAA U06.29 |
| Firmware | V0000.06.29X.P0813 |
| API Version | 3.0 |
| Region | EU_A (GBR) |
| IP | 192.168.1.106 |

## HDR / Dolby Support

| Feature | Supported |
|---------|-----------|
| HDR10 | Yes |
| HLG | Yes |
| HDR10+ | No |
| Dolby Vision | **Yes** |
| Dolby Atmos | Yes |
| FilmMaker Mode | (queried) |

## DRM Support

| DRM | Supported |
|-----|-----------|
| Widevine | Yes |
| PlayReady | Yes |
| ClearKey | Yes |
| Marlin | No |
| EME API | Available |

## Codec Support (canPlayType)

| Codec | canPlayType | MSE isTypeSupported |
|-------|-------------|---------------------|
| H.264 Baseline | probably | true |
| H.264 High | probably | true |
| H.264 4K | probably | true |
| HEVC Main | probably | true |
| HEVC Main10 | probably | true |
| HEVC 4K | probably | true |
| **DV Profile 4** | **probably** | - |
| **DV Profile 5** | **probably** | - |
| **DV Profile 7** | **probably** | - |
| **DV Profile 8** | **probably** | - |
| **DV Profile 9 (dvh1)** | **probably** | - |
| VP8 | probably | - |
| VP9 | probably | true |
| VP9 Profile 2 | probably | - |
| AV1 | **not supported** | false |
| AV1 10-bit | **not supported** | false |
| AAC | probably | - |
| AC-3 (Dolby Digital) | probably | - |
| E-AC-3 (Dolby Digital+) | probably | - |
| Opus | probably | - |
| FLAC | probably | - |

### KEY FINDING: DV Profile 7 reports "probably"
The browser's canPlayType claims DV P7 is supported. This means the hardware decoder
IS accessible from the browser layer. The black screen issue users experience is likely
a stream packaging/delivery problem (HLS manifest format, container muxing) rather than
a fundamental codec block.

## Video Element Extensions

| Property | Type | Value |
|----------|------|-------|
| `getBackendCoreAddr` | function | Returns 0 |
| `setMediaSyncObjectType` | function | Available |
| `audioTracks` | object | Available |
| `videoTracks` | object | Available |

## omi_platform API

Only two methods exposed:
- `addPlatformEventListener` (native code)
- `sendPlatformMessage` (native code)

### sendPlatformMessage — ALL of these accepted without error:
- `{type: "launchApp", appId: "MediaPlayer"}` — sent successfully
- `{type: "launchApp", appId: "com.hisense.mediaplayer"}` — sent successfully
- `{type: "launchNativePlayer", url: "..."}` — sent successfully
- `{type: "openMediaPlayer", url: "..."}` — sent successfully
- `{type: "playVideo", url: "...", mimeType: "application/x-mpegURL"}` — sent successfully
- `{type: "videoPlayback", action: "play", url: "..."}` — sent successfully
- `{type: "openURL", url: "..."}` — sent successfully

These suggest native player handoff IS possible via omi_platform.sendPlatformMessage.

## Hisense_RegisterObserver — Supported Keys

All of these registered successfully:
- `pictureMode`
- `soundMode`
- `resolution`
- `videoCodec`
- `audioCodec`
- `hdr`
- `dolbyVision`
- `mediaState`
- `playerState`
- `videoOutput`
- `displayMode`

## WebSDK System Parameters

| Parameter | Value |
|-----------|-------|
| supportHDR | HDR10 |
| supportHdrAndDolbyVision | **HDR10+HLG+DolbyVision** |
| supportDolbyAtmos | true |
| pictureMode | 1 |
| playerFeatureInfo | 006001000.VD9900O_GL |
| 4kState | true |
| panelResolution | 3840*2160 |
| chipsetName | MTK9900 |
| osVersion | U06.29 |

## WebSDK_createLibRequest — Available Endpoints

All returned `true`:
- videoCodec, audioCodec, mediaPlayer, dolbyVision, hdr
- displayInfo, videoOutput, pictureMode, soundMode
- decoderInfo, codecCapability, supportedFormats
- videoPlayback, **nativePlayer**, playerConfig

## App Installation API

### Hisense_installApp (fully functional)
Writes to `websdk/Appinfo.json` via `Hisense_FileWrite`.
Parameters: `(appId, appName, thumbnail, iconSmall, iconLarge, appUrl, storeType, callback)`

### Currently Installed Apps
1. IPTVPORTAL (installed 2023-08-03)
2. Migu TV (installed 2023-08-03)
3. **Stremio** (installed 2026-03-07) — pointing at `https://noobygains.github.io/stremio-vidaa-tv/`

### writeInstallAppObjToJson
Writes JSON directly to `websdk/Appinfo.json` via `Hisense_FileWrite` with mode 6.

## 110 Discovered Functions (Full List)

### System/Device
Hisense_GetApiVersion, Hisense_GetBrand, Hisense_GetCapabilityCode, Hisense_GetChipSetName,
Hisense_GetChromeVersion, Hisense_GetCountryCode, Hisense_GetCustomerID, Hisense_GetDeviceCode,
Hisense_GetDeviceID, Hisense_GetDeviceInfo, Hisense_GetFirmWareVersion, Hisense_GetFeatureCode,
Hisense_GetModelName, Hisense_GetOSVersion, Hisense_GetRegion, Hisense_GetSerialType,
Hisense_GetUuid, Hisense_GetVersionStatus

### Network
Hisense_GetDNS, Hisense_SetDNS, Hisense_GetIPAddress, Hisense_GetMacAddress,
Hisense_GetNetStatus, Hisense_GetNetType, Hisense_GetWolEnable, Hisense_GetWowEnable

### Media/Video/Audio
Hisense_Get4KSupportState, Hisense_GetPanelResolution, Hisense_GetPictureInfo,
Hisense_GetPictureMode, Hisense_GetResolution, Hisense_GetSoundInfo,
Hisense_GetSupportForDolbyAtmos, Hisense_GetSupportForFilmMaker,
Hisense_GetSupportForHDR, Hisense_GetSupportForHDRInfo,
Hisense_GetPlayerFeatureInfo, Hisense_GetMainSoundDev,
Hisense_GetMute, Hisense_GetVolume, Hisense_GetVolumeType,
Hisense_GetVolumeBarMode, Hisense_GetVolumeBarVisible

### DRM
Hisense_GetDrmInfo

### App Management
Hisense_installApp, Hisense_uninstallApp, Hisense_getInstalledApps,
getInstalledAppJsonObj, writeInstallAppObjToJson

### File System
Hisense_FileRead, Hisense_FileWrite

### Security/Encryption
Hisense_Encrypt, Hisense_Decrypt, Hisense_RSADecrypt,
Hisense_CheckAccessCode, Hisense_CheckCodeValid,
Hisense_HiSdkSignCreate, Hisense_HiSdkSignCreateSoundbar,
Hisense_HiSdkJsonVerifyHeap

### Observer/Events
Hisense_RegisterObserver, Hisense_UnregisterObserver,
Hisense_RegisterAppMessageListener, Hisense_SendAppMessageEvent

### UI/Settings
Hisense_GetHighContrastMenuStatus, Hisense_GetIsHotelMode,
Hisense_GetLocaleLanguage, Hisense_GetMenuLanguageCode,
Hisense_GetMenuScheme, Hisense_GetMenuTransparecy,
Hisense_GetSubtitleStatus, Hisense_GetTimeZone,
Hisense_GetTvLogo, Hisense_GetDebugLevelForHisenseUI,
Hisense_disableVKB, Hisense_enableVKB, Hisense_SetRemoteKeyboard

### TTS (Text-to-Speech)
Hisense_GetTTSEnable, Hisense_GetTTSInfo, Hisense_GetTTSLanguage,
Hisense_GetTTSPitch, Hisense_GetTTSRate, Hisense_GetTTSVolume

### Parental Controls
Hisense_GetParentControlEnabled, Hisense_GetParentControlInfo,
Hisense_GetBlockStartTime, Hisense_GetBlockEndTime, Hisense_GetBlockTimeWeekly

### Debug/Logging
Hisense_EnableDebugLog, Hisense_PrintLogMessage, Hisense_WriteTvRunLog,
Hisense_getDebugPort, Hisense_setDebugPort, Hisense_GetTestApiList

### Browser/Platform
Hisense_GetCurrentBrowser, Hisense_CloseBrowser,
Hisense_AddInsecureDomain, Hisense_RemoveInsecureDomain, Hisense_GetInsecureDomain,
Hisense_setStartBandwidth, Hisense_LoginWithVIDAA, Hisense_ResetDevice,
Hisense_GetDialInfo, Hisense_GetUpdatesVerInfo, Hisense_GetRoleID,
Hisense_GetAdsID, Hisense_GetEulaAdEnable, Hisense_GetAdTargetEnable,
VOS_GetAppCapability

### WebSDK
WebSDK_getParam, WebSDK_setParam, WebSDK_getCurrentParam,
WebSDK_setParamObserver, WebSDK_clearParamObserver,
WebSDK_createFileRequest, WebSDK_createLibRequest,
WebSDK_writeTvRunLog, WebSDK_hiSignVerify, WebSDK_hiSecurity

### Platform
omi_platform.addPlatformEventListener, omi_platform.sendPlatformMessage
