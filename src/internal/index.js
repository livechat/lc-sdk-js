"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.RTMAPI = exports.WebAPI = void 0;
var axios_1 = require("axios");
var WebSocket = require("isomorphic-ws");
var uuid_1 = require("uuid");
var constants_1 = require("./constants");
var WebAPI = /** @class */ (function () {
    function WebAPI(clientID, tokenGetter, type, options) {
        this.APIURL = (options === null || options === void 0 ? void 0 : options.apiUrl) || constants_1.ApiURL;
        this.version = constants_1.ApiVersion;
        this.clientID = clientID;
        this.type = type;
        this.tokenGetter = tokenGetter;
    }
    WebAPI.prototype.send = function (name, req) {
        return __awaiter(this, void 0, void 0, function () {
            var response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.call(name, req || {})];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        e_1 = _a.sent();
                        return [2 /*return*/, Promise.reject(e_1.response.data.error)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    WebAPI.prototype.call = function (action, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var url, token, method, headers, params;
            return __generator(this, function (_a) {
                url = ["https:/", this.APIURL, "v" + this.version, this.type, "action", action].join("/");
                token = this.tokenGetter();
                method = action in
                    [
                        "list_license_properties",
                        "list_group_properties",
                        "get_dynamic_configuration",
                        "get_configuration",
                        "get_localization",
                    ]
                    ? "GET"
                    : "POST";
                headers = {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token.accessToken,
                    "X-Region": token.region
                };
                if (typeof window === "undefined") {
                    headers["User-Agent"] = "JS SDK Application " + this.clientID;
                }
                if (this.type === "customer") {
                    params = { license_id: token.licenseID };
                }
                return [2 /*return*/, axios_1["default"]({
                        method: method,
                        url: url,
                        data: payload,
                        params: params,
                        headers: headers
                    })];
            });
        });
    };
    return WebAPI;
}());
exports.WebAPI = WebAPI;
var RTMAPI = /** @class */ (function () {
    function RTMAPI(type, license, options) {
        this.requestsQueue = {};
        this.subscribedPushes = {};
        this.APIURL = (options === null || options === void 0 ? void 0 : options.apiUrl) || constants_1.ApiURL;
        this.version = constants_1.ApiVersion;
        this.type = type;
        if (license) {
            this.license = license;
        }
    }
    RTMAPI.prototype.connect = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var wsURL = "wss://" + _this.APIURL + "/v" + _this.version + "/" + _this.type + "/rtm/ws" +
                (_this.license ? "?license_id=" + _this.license : "");
            _this.socket = new WebSocket(wsURL);
            _this.socket.onopen = function () {
                _this.heartbeatInterval = setInterval(function () { return _this.send("ping", undefined); }, 10000);
                resolve();
            };
            _this.socket.onmessage = function (msg) {
                var parsedMessage;
                try {
                    parsedMessage = JSON.parse(msg.data.toString());
                }
                catch (e) {
                    return;
                }
                var request_id = parsedMessage.request_id, action = parsedMessage.action, success = parsedMessage.success, type = parsedMessage.type, payload = parsedMessage.payload;
                switch (type) {
                    case "response": {
                        return _this.handleResponse(request_id, success, payload);
                    }
                    case "push": {
                        return _this.handlePush(action, payload);
                    }
                }
            };
            _this.socket.onerror = reject;
        });
    };
    RTMAPI.prototype.handleResponse = function (request_id, success, payload) {
        var enqueuedRequest = this.requestsQueue[request_id];
        if (enqueuedRequest) {
            success ? enqueuedRequest.resolve(payload) : enqueuedRequest.reject(payload);
            delete this.requestsQueue[request_id];
        }
    };
    RTMAPI.prototype.handlePush = function (type, payload) {
        if (this.subscribedPushes[type]) {
            this.subscribedPushes[type](payload);
        }
    };
    RTMAPI.prototype.send = function (action, payload) {
        var _this = this;
        var _a;
        if (((_a = this.socket) === null || _a === void 0 ? void 0 : _a.readyState) !== 1) {
            return Promise.reject(new Error("socket not connected"));
        }
        var request_id = uuid_1.v4();
        var req = {
            request_id: request_id,
            action: action,
            payload: payload
        };
        return new Promise(function (resolve, reject) {
            var _a;
            (_a = _this.socket) === null || _a === void 0 ? void 0 : _a.send(JSON.stringify(req));
            _this.requestsQueue[request_id] = { resolve: resolve, reject: reject };
        });
    };
    RTMAPI.prototype.subscribePush = function (push, callback) {
        if (this.subscribedPushes[push]) {
            throw new Error("Push already subscribed");
        }
        this.subscribedPushes[push] = callback;
    };
    RTMAPI.prototype.unsubscribePush = function (push) {
        delete this.subscribedPushes[push];
    };
    return RTMAPI;
}());
exports.RTMAPI = RTMAPI;
