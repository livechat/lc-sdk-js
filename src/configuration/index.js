"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var internal_1 = require("../internal");
var ConfigurationAPI = /** @class */ (function (_super) {
    __extends(ConfigurationAPI, _super);
    function ConfigurationAPI(clientID, tokenGetter, options) {
        return _super.call(this, clientID, tokenGetter, "configuration", options) || this;
    }
    /**
     * Creates a new Agent with specified parameters within a license.
     * @param id - ID of an agent to create
     * @param fields - agent properties
     */
    ConfigurationAPI.prototype.createAgent = function (id, fields) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("create_agent", __assign({ id: id }, fields))];
            });
        });
    };
    /**
     * It returns the info about an Agent specified by id.
     * @param id - IF of agent to get
     * @param fields - additional fields to include
     */
    ConfigurationAPI.prototype.getAgent = function (id, fields) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("get_agent", { id: id, fields: fields })];
            });
        });
    };
    /**
     * Returns all Agents within a license.
     * @param group_ids - groups to list agents from
     * @param fields - additional fields to include
     */
    ConfigurationAPI.prototype.listAgents = function (group_ids, fields) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("list_agents", { fields: fields, filters: { group_ids: group_ids } })];
            });
        });
    };
    /**
     * Updates the properties of an Agent specified by id.
     * @param id - ID of agent to update
     * @param fields - properties to update
     */
    ConfigurationAPI.prototype.updateAgent = function (id, fields) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("update_agent", __assign({ id: id }, fields))];
            });
        });
    };
    /**
     * Deletes an Agent specified by id.
     * @param id - ID of agent to delete
     */
    ConfigurationAPI.prototype.deleteAgent = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("delete_agent", { id: id })];
            });
        });
    };
    /**
     * Suspends an Agent specified by id.
     * @param id - ID of agent to suspend
     */
    ConfigurationAPI.prototype.suspendAgent = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("suspend_agent", { id: id })];
            });
        });
    };
    /**
     * Unsuspends an Agent specified by id.
     * @param id - ID of agent to unsuspend
     */
    ConfigurationAPI.prototype.unsuspendAgent = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("unsuspend_agent", { id: id })];
            });
        });
    };
    /**
     * A suspended Agent can send emails to license owners and vice owners with an unsuspension request.
     */
    ConfigurationAPI.prototype.requestAgentUnsuspension = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("request_agent_unsuspension", {})];
            });
        });
    };
    /**
     * Approves an Agent thus allowing the Agent to use the application.
     * @param id - ID of agent to approve
     */
    ConfigurationAPI.prototype.approveAgent = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("approve_agent", { id: id })];
            });
        });
    };
    /**
     * Creates a new Bot with specified parameters within a license.
     * @param fields - bot properties
     */
    ConfigurationAPI.prototype.createBot = function (fields) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("create_bot", fields || {})];
            });
        });
    };
    /**
     * Deletes bot specified by id.
     * @param id - ID of bot to delete
     */
    ConfigurationAPI.prototype.deleteBot = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("delete_bot", { id: id })];
            });
        });
    };
    /**
     * Updates the properties of Bot specified by id.
     * @param id - ID of bot to update
     * @param fields - properties to update
     */
    ConfigurationAPI.prototype.updateBot = function (id, fields) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("update_bot", __assign({ id: id }, fields))];
            });
        });
    };
    /**
     * Lists all bots within license.
     * @param all - switch if should return all bots or only caller's bots
     * @param fields - additional fields to include
     */
    ConfigurationAPI.prototype.listBots = function (all, fields) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("list_bots", __assign({ all: all }, fields))];
            });
        });
    };
    /**
     * Gets info about Bot.
     * @param id - bot ID to get info about
     * @param fields - additional fields to include
     */
    ConfigurationAPI.prototype.getBot = function (id, fields) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("get_bot", __assign({ id: id }, fields))];
            });
        });
    };
    /**
     * Creates new group.
     * @param name - group name
     * @param agent_priorities - agents priorities within a group
     * @param language_code - groups language
     */
    ConfigurationAPI.prototype.createGroup = function (name, agent_priorities, language_code) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("create_group", {
                        name: name,
                        agent_priorities: agent_priorities,
                        language_code: language_code
                    })];
            });
        });
    };
    /**
     * Updates an existing group.
     * @param id - group id
     * @param name - group name
     * @param agent_priorities - agents priorities within a group
     * @param language_code - groups language
     */
    ConfigurationAPI.prototype.updateGroup = function (id, name, agent_priorities, language_code) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("create_group", {
                        id: id,
                        name: name,
                        agent_priorities: agent_priorities,
                        language_code: language_code
                    })];
            });
        });
    };
    /**
     * Deletes group specified by id.
     * @param id - ID of group to delete
     */
    ConfigurationAPI.prototype.deleteGroup = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("delete_group", { id: id })];
            });
        });
    };
    /**
     * Lists all existing groups.
     * @param fields - additional fields to include
     */
    ConfigurationAPI.prototype.listGroups = function (fields) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("list_groups", { fields: fields })];
            });
        });
    };
    /**
     * Returns details about a group specified by its id.
     * @param id - group ID to get info about
     * @param fields - additiona fields to include
     */
    ConfigurationAPI.prototype.getGroup = function (id, fields) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("get_group", { id: id, fields: fields })];
            });
        });
    };
    /**
     * Registers private property.
     * @param property - property to register
     */
    ConfigurationAPI.prototype.registerProperty = function (property) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("register_property", property)];
            });
        });
    };
    /**
     * Unregisters private property.
     * @param name - property name
     * @param owner_client_id - clientID of property owner
     */
    ConfigurationAPI.prototype.unregisterProperty = function (name, owner_client_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("unregister_property", { name: name, owner_client_id: owner_client_id })];
            });
        });
    };
    /**
     * Publishes private property.
     * @param name - property name
     * @param owner_client_id - clientID of property owner
     * @param read - determines whether non-owners can read the property
     * @param write - determines whether non-owners can write the property
     */
    ConfigurationAPI.prototype.publishProperty = function (name, owner_client_id, read, write) {
        return __awaiter(this, void 0, void 0, function () {
            var access_type;
            return __generator(this, function (_a) {
                access_type = new Array();
                if (read) {
                    access_type.push("read");
                }
                if (write) {
                    access_type.push("write");
                }
                return [2 /*return*/, this.send("publish_property", { name: name, owner_client_id: owner_client_id, access_type: access_type })];
            });
        });
    };
    /**
     * Lists properties for given client_id.
     * @param owner_client_id - client_id of property owner
     */
    ConfigurationAPI.prototype.listProperties = function (owner_client_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("list_properties", { owner_client_id: owner_client_id })];
            });
        });
    };
    /**
     * Updates a property value within a license. This operation doesn't overwrite the existing values.
     * @param properties - properties to update
     */
    ConfigurationAPI.prototype.updateLicenseProperties = function (properties) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("update_license_properties", { properties: properties })];
            });
        });
    };
    /**
     * Returns the properties set within a license.
     * @param namespace_prefix - namsepace prefix
     * @param name_prefix - name prefix
     */
    ConfigurationAPI.prototype.listLicenseProperties = function (namespace_prefix, name_prefix) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("list_license_properties", {
                        namespace_prefix: namespace_prefix,
                        name_prefix: name_prefix
                    })];
            });
        });
    };
    /**
     * Deletes the properties set within a license.
     * @param properties - properties to delete
     */
    ConfigurationAPI.prototype.deleteLicenseProperties = function (properties) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("delete_license_properties", { properties: properties })];
            });
        });
    };
    /**
     * Updates a property value within a group as the property location. This operation doesn't overwrite the existing values.
     * @param group_id - group ID to update properties
     * @param properties - properties to update
     */
    ConfigurationAPI.prototype.updateGroupProperties = function (group_id, properties) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("update_group_properties", {
                        group_id: group_id,
                        properties: properties
                    })];
            });
        });
    };
    /**
     * Returns the properties set within a group.
     * @param id - group ID to get properties from
     * @param namespace_prefix - namespace prefix
     * @param name_prefix - name prefix
     */
    ConfigurationAPI.prototype.listGroupProperties = function (id, namespace_prefix, name_prefix) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("list_group_properties", {
                        id: id,
                        namespace_prefix: namespace_prefix,
                        name_prefix: name_prefix
                    })];
            });
        });
    };
    /**
     * Deletes the properties set within a group.
     * @param id - group ID to delete properties from
     * @param properties - properties to delete
     */
    ConfigurationAPI.prototype.deleteGroupProperties = function (id, properties) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("delete_group_properties", {
                        id: id,
                        properties: properties
                    })];
            });
        });
    };
    /**
     * Registers webhook on a license.
     * @param webhook - webhook to register
     * @param owner_client_id - must be provided when authorizing with Personal Access Token
     */
    ConfigurationAPI.prototype.registerWebhook = function (webhook, owner_client_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("register_webhook", __assign(__assign({}, webhook), { owner_client_id: owner_client_id }))];
            });
        });
    };
    /**
     * Lists registered webhooks.
     * @param owner_client_id - must be provided when authorizing with Personal Access Token
     */
    ConfigurationAPI.prototype.listWebhooks = function (owner_client_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("list_webhooks", { owner_client_id: owner_client_id })];
            });
        });
    };
    /**
     * Removes webhook from license.
     * @param id - ID of webhook to unregister
     * @param owner_client_id - must be provided when authorizing with Personal Access Token
     */
    ConfigurationAPI.prototype.unregisterWebhook = function (id, owner_client_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("unregister_webhook", { id: id, owner_client_id: owner_client_id })];
            });
        });
    };
    /**
     * Lists webhooks available in given API version
     * @param version - version of API for webhooks
     */
    ConfigurationAPI.prototype.listWebhookNames = function (version) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("list_webhook_names", { version: version })];
            });
        });
    };
    /**
     * Enables license webhooks for authorization token's clientID
     * @param clientID - clientID when authorizing via Personal Access Token
     */
    ConfigurationAPI.prototype.enableLicenseWebhooks = function (client_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("enable_license_webhooks", { client_id: client_id })];
            });
        });
    };
    /**
     * Disables license webhooks for authorization token's clientID
     * @param clientID - clientID when authorizing via Personal Access Token
     */
    ConfigurationAPI.prototype.disableLicenseWebhooks = function (client_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("disable_license_webhooks", { client_id: client_id })];
            });
        });
    };
    /**
     * Gets license webhooks' state for authorization token's clientID
     * @param clientID - clientID when authorizing via Personal Access Token
     */
    ConfigurationAPI.prototype.getLicenseWebhooksState = function (client_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("get_license_webhooks_state", { client_id: client_id })];
            });
        });
    };
    /**
     * Creates an auto access data structure, which is a set of conditions for the tracking URL and geolocation of a customer.
     * @param opts - options for auto access like conditions
     */
    ConfigurationAPI.prototype.addAutoAccess = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("add_auto_access", opts)];
            });
        });
    };
    /**
     * Returns all existing auto access data structures.
     */
    ConfigurationAPI.prototype.listAutoAccesses = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("list_auto_accesses", {})];
            });
        });
    };
    /**
     * Deletes an existing auto access data structure specified by its ID.
     * @param id - ID of the auto access to remove
     */
    ConfigurationAPI.prototype.deleteAutoAccess = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("delete_auto_access", { id: id })];
            });
        });
    };
    /**
     * Updates an existing auto access. Only specified fields are updated (overwritten), leaving unspecified fields unchanged.
     * @param id - ID of the auto access to modify
     * @param access - fields of auto access you want to overwrite
     */
    ConfigurationAPI.prototype.updateAutoAccess = function (id, access) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("update_auto_access", __assign({ id: id }, access))];
            });
        });
    };
    return ConfigurationAPI;
}(internal_1.WebAPI));
exports["default"] = ConfigurationAPI;
