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
var RTM = /** @class */ (function (_super) {
    __extends(RTM, _super);
    function RTM(license, options) {
        return _super.call(this, "customer", license, options) || this;
    }
    /**
     * Allows to subscribe a handler for a given push. Returns function to unsubscribe.
     * Note: multiple subscriptions for the same push are not allowed in sigle websocket connection.
     * @param push - push name to subscribe to
     * @param handler - function receiving push payload
     */
    RTM.prototype.on = function (push, handler) {
        this.subscribePush(push, handler);
        return this.unsubscribePush.bind(this, push);
    };
    /**
     * It returns the initial state of the current Customer.
     * @param loginData - OAuth token form the Customer's account or full object with login parameters
     */
    RTM.prototype.login = function (loginData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (typeof loginData === "string") {
                    return [2 /*return*/, this.send("login", { token: loginData })];
                }
                return [2 /*return*/, this.send("login", loginData)];
            });
        });
    };
    /**
     * It returns summaries of the chats a Customer participated in.
     * @param opts - set of filters and pagination to limit returned entries
     */
    RTM.prototype.listChats = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("list_chats", opts || {})];
            });
        });
    };
    /**
     * Returns threads that the current Customer has access to in a given chat.
     * @param chat_id - chat ID to get threads from
     * @param opts - additional options like pagination and sorting
     */
    RTM.prototype.listThreads = function (chat_id, opts) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("list_threads", __assign({ chat_id: chat_id }, opts))];
            });
        });
    };
    /**
     * It returns a thread that the current Customer has access to in a given chat.
     * @param chat_id - ID of a chat to get
     * @param thread_id - thread ID to get (if not provided, last thread is returned)
     */
    RTM.prototype.getChat = function (chat_id, thread_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("get_chat", { chat_id: chat_id, thread_id: thread_id })];
            });
        });
    };
    /**
     * Starts a chat
     * @param opts - options like initial chat data or continuous switch
     */
    RTM.prototype.startChat = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("start_chat", opts || {})];
            });
        });
    };
    /**
     * Restarts an archived chat
     * @param param - either string ID of a chat to activate or full initial chat object
     */
    RTM.prototype.resumeChat = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (typeof param === "string")
                    return [2 /*return*/, this.send("resume_chat", { chat: { id: param } })];
                return [2 /*return*/, this.send("resume_chat", param || {})];
            });
        });
    };
    /**
     * Deactivates a chat by closing the currently open thread. Sending messages to this thread will no longer be possible.
     * @param id - chat ID to deactivate
     */
    RTM.prototype.deactivateChat = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("deactivate_chat", { id: id })];
            });
        });
    };
    /**
     * Sends an Event object. Use this method to send a message by specifing the Message event type in the request.
     * It's possible to write to a chat without joining it. The user sending an event will be automatically added to the chat
     * with the present parameter set to false.
     * @param chat_id - chat to send event to
     * @param event - Event object
     * @param attach_to_last_thread - if true, adds event to last inactive thread
     */
    RTM.prototype.sendEvent = function (chat_id, event, attach_to_last_thread) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("send_event", {
                        chat_id: chat_id,
                        event: event,
                        attach_to_last_thread: attach_to_last_thread
                    })];
            });
        });
    };
    /**
     * Sends postback for rich message
     * @param opts - postback data
     */
    RTM.prototype.sendRichMessagePostback = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("send_rich_message_postback", __assign({}, opts))];
            });
        });
    };
    /**
     * Sends a sneak peek to a chat.
     * @param chat_id - chat to send sneak peek to
     * @param sneak_peek_text - text to sneak peek
     */
    RTM.prototype.sendSneakPeek = function (chat_id, sneak_peek_text) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("send_sneak_peek", { chat_id: chat_id, sneak_peek_text: sneak_peek_text })];
            });
        });
    };
    /**
     * Updates chat properties
     * @param id - chat to update properties
     * @param properties - properties to update
     */
    RTM.prototype.updateChatProperties = function (id, properties) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("update_chat_properties", { id: id, properties: properties })];
            });
        });
    };
    /**
     * Deletes chat properties
     * @param id - chat to delete properties
     * @param properties - properties to delete
     */
    RTM.prototype.deleteChatProperties = function (id, properties) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("delete_chat_properties", { id: id, properties: properties })];
            });
        });
    };
    /**
     * Updates thread properties
     * @param chat_id - chat ID of thread to update
     * @param thread_id - thread to update properties
     * @param properties - properties to update
     */
    RTM.prototype.updateThreadProperties = function (chat_id, thread_id, properties) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("update_thread_properties", {
                        chat_id: chat_id,
                        thread_id: thread_id,
                        properties: properties
                    })];
            });
        });
    };
    /**
     * Deletes thread properties
     * @param chat_id - chat ID of thread to delete
     * @param thread_id - thread to delete properties
     * @param properties - properties to delete
     */
    RTM.prototype.deleteThreadProperties = function (chat_id, thread_id, properties) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("delete_thread_properties", {
                        chat_id: chat_id,
                        thread_id: thread_id,
                        properties: properties
                    })];
            });
        });
    };
    /**
     * Updates event properties
     * @param chat_id - chat ID of event to update
     * @param thread_id - thread ID of event to update
     * @param event_id - event to update properties
     * @param properties - properties to update
     */
    RTM.prototype.updateEventProperties = function (chat_id, thread_id, event_id, properties) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("update_event_properties", {
                        chat_id: chat_id,
                        thread_id: thread_id,
                        event_id: event_id,
                        properties: properties
                    })];
            });
        });
    };
    /**
     * Deletes event properties
     * @param chat_id - chat ID of event to delete
     * @param thread_id - thread ID of event to delete
     * @param event_id - event to delete properties
     * @param properties - properties to delete
     */
    RTM.prototype.deleteEventProperties = function (chat_id, thread_id, event_id, properties) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("delete_event_properties", {
                        chat_id: chat_id,
                        thread_id: thread_id,
                        event_id: event_id,
                        properties: properties
                    })];
            });
        });
    };
    /**
     * Returns the properties of a given license. It only returns the properties a Customer has access to.
     * @param namespace - property namespace
     * @param name - property name
     */
    RTM.prototype.listLicenseProperties = function (namespace, name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("list_license_properties", {
                        namespace: namespace,
                        name: name
                    })];
            });
        });
    };
    /**
     * Returns the properties of a given group. It only returns the properties a Customer has access to.
     * @param id - ID of group to return properties of
     * @param namespace - property namespace
     * @param name - property name
     */
    RTM.prototype.listGroupProperties = function (id, namespace, name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("list_group_properties", {
                        id: id,
                        namespace: namespace,
                        name: name
                    })];
            });
        });
    };
    /**
     * Updates Customer's properties.
     * @param opts - properties to update
     */
    RTM.prototype.updateCustomer = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("update_customer", opts || {})];
            });
        });
    };
    /**
     * Sets session fields for Customer.
     * @param session_fields - fields to set in form of object enclosed key:value pairs
     */
    RTM.prototype.setCustomerSessionFields = function (session_fields) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("set_customer_session_fields", { session_fields: session_fields })];
            });
        });
    };
    /**
     * Returns the info about the Customer requesting it.
     */
    RTM.prototype.getCustomer = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("get_customer", {})];
            });
        });
    };
    /**
     * Lists statuses of groups.
     * @param param - either boolean switch for all groups or list of group ID's to check
     */
    RTM.prototype.listGroupStatuses = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = typeof param === "boolean" ? { all: param } : { group_ids: param };
                return [2 /*return*/, this.send("list_group_statuses", req)];
            });
        });
    };
    /**
     * Customer can use this method to trigger checking if goals were achieved.
     * Then, Agents receive the information. You should call this method to provide goals
     * parameters for the server when the customers limit is reached. Works only for offline Customers.
     * @param session_fields - object enclosed key:value pairs
     * @param group_id - group id to check goals in
     * @param page_url - page URL
     */
    RTM.prototype.checkGoals = function (session_fields, group_id, page_url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("check_goals", {
                        session_fields: session_fields,
                        group_id: group_id,
                        page_url: page_url
                    })];
            });
        });
    };
    /**
     * Returns an empty ticket form of a prechat or postchat survey.
     * @param group_id = group id to get form for
     * @param type - prechat or postchat
     */
    RTM.prototype.getForm = function (group_id, type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("get_form", { group_id: group_id, type: type })];
            });
        });
    };
    /**
     * Gets the predicted Agent - the one the Customer will chat with when the chat starts.
     * To use this method, the Customer needs to be logged in, which can be done via the login method.
     */
    RTM.prototype.getPredictedAgent = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("get_predicted_agent", {})];
            });
        });
    };
    /**
     * It returns the info on a given URL.
     * @param url - URL to get info about
     */
    RTM.prototype.getURLInfo = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("get_url_info", { url: url })];
            });
        });
    };
    /**
     * Marks events as seen by Agent.
     * @param chat_id - chat to mark events
     * @param seen_up_to - date up to which mark events
     */
    RTM.prototype.markEventsAsSeen = function (chat_id, seen_up_to) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("mark_events_as_seen", { chat_id: chat_id, seen_up_to: seen_up_to })];
            });
        });
    };
    /**
     * Marks an incoming greeting as seen.
     * @param greeting_id - number representing type of a greeting
     * @param unique_id - specific greeting event ID
     */
    RTM.prototype.acceptGreeting = function (greeting_id, unique_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("accept_greeting", { greeting_id: greeting_id, unique_id: unique_id })];
            });
        });
    };
    /**
     * Cancels a greeting (an invitation to the chat).
     * For example, Customers could cancel greetings by minimalizing the chat widget with a greeting.
     * @param unique_id - specific greeting ID
     */
    RTM.prototype.cancelGreeting = function (unique_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("cancel_greeting", { unique_id: unique_id })];
            });
        });
    };
    return RTM;
}(internal_1.RTMAPI));
exports["default"] = RTM;
