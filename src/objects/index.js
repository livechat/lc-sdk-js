"use strict";
exports.__esModule = true;
exports.GroupStatus = exports.RoutingStatus = exports.SortOrder = void 0;
var SortOrder;
(function (SortOrder) {
    SortOrder["Asc"] = "asc";
    SortOrder["Desc"] = "desc";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var RoutingStatus;
(function (RoutingStatus) {
    RoutingStatus["AcceptingChats"] = "accepting_chats";
    RoutingStatus["NotAcceptingChats"] = "not_accepting_chats";
    RoutingStatus["Offline"] = "offline";
})(RoutingStatus = exports.RoutingStatus || (exports.RoutingStatus = {}));
var GroupStatus;
(function (GroupStatus) {
    GroupStatus["Online"] = "online";
    GroupStatus["Offline"] = "offline";
    GroupStatus["OnlineForQueue"] = "online_for_queue";
})(GroupStatus = exports.GroupStatus || (exports.GroupStatus = {}));
