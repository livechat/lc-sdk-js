"use strict";
exports.__esModule = true;
exports.Configuration = exports.Customer = exports.Agent = void 0;
var web_1 = require("./src/agent/web");
var rtm_1 = require("./src/agent/rtm");
var AgentObjects = require("./src/agent/structures");
var web_2 = require("./src/customer/web");
var rtm_2 = require("./src/customer/rtm");
var CustomerObjects = require("./src/customer/structures");
var configuration_1 = require("./src/configuration");
var ConfigurationObjects = require("./src/configuration/structures");
exports.Agent = {
    Web: web_1["default"],
    RTM: rtm_1["default"],
    Objects: AgentObjects
};
exports.Customer = {
    Web: web_2["default"],
    RTM: rtm_2["default"],
    Objects: CustomerObjects
};
exports.Configuration = {
    Web: configuration_1["default"],
    Objects: ConfigurationObjects
};
exports.Webhooks = require("./src/webhooks");
exports.Auth = require("./src/authorization");
