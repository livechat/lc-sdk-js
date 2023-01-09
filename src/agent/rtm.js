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
var index_1 = require("../internal/index");
var RTM = /** @class */ (function (_super) {
    __extends(RTM, _super);
    function RTM(options) {
        return _super.call(this, "agent", undefined, options) || this;
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
     * It returns the initial state of the current Agent.
     * @param loginData - OAuth token from Agent's account or full object with login options
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
     * Change the firebase push notifications properties.
     * @param change - properties to change
     */
    RTM.prototype.changePushNotifications = function (change) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("change_push_notifications", change)];
            });
        });
    };
    /**
     * Sets an Agent's connection to the away state. You can use this method to manipulate the Agent's status.
     * The method works per connection - all connections an Agent has (desktop, mobile, etc) must be in the away state
     * for the Agent's status to be changed to not_accepting_chats.
     * @param away - away status
     */
    RTM.prototype.setAwayStatus = function (away) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("set_away_status", { away: away })];
            });
        });
    };
    /**
     * Logs the Agent out.
     */
    RTM.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("logout", {})];
            });
        });
    };
    /**
     * It returns summaries of the chats an Agent has access to.
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
     * Returns threads that the current Agent has access to in a given chat.
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
     * It returns a thread that the current Agent has access to in a given chat.
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
     * It returns a list of the chats an Agent has access to. Together with a chat, the events of one thread from this chat are returned.
     *
     * The list classification is based on threads; 1 chat per 1 thread. Thus, the same chat object may appear on the list several times,
     * but each time with a different thread. The returned chat is a complete object, not only a chat summary.
     * @param opts - options like filters or pagination
     */
    RTM.prototype.listArchives = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("list_archives", opts || {})];
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
     * Marks a chat as followed. All changes to the chat will be sent to the requester until the chat is reactivated or unfollowed.
     * Chat members don't need to follow their chats. They receive all chat pushes regardless of their follower status.
     * @param id - chat ID to follow
     */
    RTM.prototype.followChat = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("follow_chat", { id: id })];
            });
        });
    };
    /**
     * Removes the requester from the chat followers. After that, only key changes to the chat (like transfer_chat or close_active_thread)
     * will be sent to the requester. Chat members cannot unfollow the chat.
     * @param id - chat ID to unfollow
     */
    RTM.prototype.unfollowChat = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("unfollow_chat", { id: id })];
            });
        });
    };
    /**
     * Grants access to a new chat without overwriting the existing ones.
     * @param chat_id - chat ID to grant access to
     * @param access - access to grant
     */
    RTM.prototype.grantChatAccess = function (chat_id, access) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("grant_chat_access", { chat_id: chat_id, access: access })];
            });
        });
    };
    /**
     * Revokes access to chat
     * @param chat_id - chat ID to grant access to
     * @param access - access to revoke
     */
    RTM.prototype.revokeChatAccess = function (chat_id, access) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("revoke_chat_access", { chat_id: chat_id, access: access })];
            });
        });
    };
    /**
     * Transfers a chat to an Agent or a group.
     * @param id - chat to transfer
     * @param opts - specific target or force flag
     */
    RTM.prototype.transferChat = function (id, opts) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("transfer_chat", __assign({ id: id }, opts))];
            });
        });
    };
    /**
     * Adds a user to the chat. You can't add more than one customer user type to the chat.
     * @param chat_id - chat to add user to
     * @param user_id - user to add
     * @param user_type - customer or agent
     * @param require_active_thread - if true, adds user only if chat has an active thread
     */
    RTM.prototype.addUserToChat = function (chat_id, user_id, user_type, require_active_thread) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("add_user_to_chat", {
                        chat_id: chat_id,
                        user_id: user_id,
                        user_type: user_type,
                        require_active_thread: require_active_thread
                    })];
            });
        });
    };
    /**
     * Removes a user from chat. Removing customer user type is not allowed. It's always possible to remove the requester from the chat.
     * @param chat_id - chat to remove user from
     * @param user_id - user to remove
     */
    RTM.prototype.removeUserFromChat = function (chat_id, user_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("remove_user_from_chat", {
                        chat_id: chat_id,
                        user_id: user_id,
                        user_type: "agent"
                    })];
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
                return [2 /*return*/, this.send("send_rich_message_postback", opts)];
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
     * Tags thread with given tag
     * @param chat_id - chat ID of thread to tag
     * @param thread_id - thread to tag
     * @param tag - tag to add
     */
    RTM.prototype.tagThread = function (chat_id, thread_id, tag) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("tag_thread", { chat_id: chat_id, thread_id: thread_id, tag: tag })];
            });
        });
    };
    /**
     * Removes tag from thread
     * @param chat_id - chat ID of thread to untag
     * @param thread_id - thread to untag
     * @param tag - tag to remove
     */
    RTM.prototype.untagThread = function (chat_id, thread_id, tag) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("untag_thread", { chat_id: chat_id, thread_id: thread_id, tag: tag })];
            });
        });
    };
    /**
     * Returns the info about the Customer with a given id.
     * @param id - customer ID to get
     */
    RTM.prototype.getCustomer = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("get_customer", { id: id })];
            });
        });
    };
    /**
     * It returns the list of Customers.
     * @param opts - options like filters or pagination
     */
    RTM.prototype.listCustomers = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("list_customers", opts || {})];
            });
        });
    };
    /**
     * Creates a new Customer user type.
     * @param opts - customer data
     */
    RTM.prototype.createCustomer = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("create_customer", opts || {})];
            });
        });
    };
    /**
     * Updates Customer's properties.
     * @param id - ID of a customer to update
     * @param opts - properties to update
     */
    RTM.prototype.updateCustomer = function (id, opts) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("update_customer", __assign({ id: id }, opts))];
            });
        });
    };
    /**
     * Bans the customer for a specific period of time. It immediately disconnects all active sessions of this customer
     * and does not accept new ones during the ban lifespan.
     * @param id - ID of customer to ban
     * @param days - ban duration in days
     */
    RTM.prototype.banCustomer = function (id, days) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("ban_customer", { id: id, ban: { days: days } })];
            });
        });
    };
    /**
     * Changes the status of an Agent or a Bot Agent.
     * @param status - status to set
     * @param agent_id - ID of agent to update status
     */
    RTM.prototype.setRoutingStatus = function (status, agent_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("set_routing_status", { status: status, agent_id: agent_id })];
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
     * Sends typing indicator
     * @param chat_id - chat for typing indicator
     * @param is_typing - status of typing
     * @param recipients - possible values: all, agents
     */
    RTM.prototype.sendTypingIndicator = function (chat_id, is_typing, recipients) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("send_typing_indicator", {
                        chat_id: chat_id,
                        is_typing: is_typing,
                        recipients: recipients
                    })];
            });
        });
    };
    /**
     * This method serves for the chat-unrelated communication. Messages sent using multicast are not being saved.
     * For example, it could be used in an app that sends notifications to Agents or Customers,
     * when a certain condition is met (e.g. an important Customer started the chat).
     * @param recipients - who should receive multicast
     * @param content = JSON content to send
     * @param type - message type
     */
    RTM.prototype.multicast = function (recipients, content, type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("multicast", { recipients: recipients, content: content, type: type })];
            });
        });
    };
    /**
     * It returns the Agents you can transfer a chat to. Agents are sorted ascendingly by the total number of active chats they have. Note that:
     * - The method only returns Agents with statuses online and not accepting chats. Offline Agents aren't returned.
     * - Only chats with Customers are taken into account in total_active_chats.
     * @param chat_id - chat ID you want to transfer
     */
    RTM.prototype.listAgentsForTransfer = function (chat_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("list_agents_for_transfer", { chat_id: chat_id })];
            });
        });
    };
    /**
     * Marks a customer as followed. As a result, the requester (an agent) will receive
     * the info about all the changes related to that customer via pushes.
     * @param id - ID of customer to follow
     */
    RTM.prototype.followCustomer = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("follow_customer", { id: id })];
            });
        });
    };
    /**
     * Removes the agent from the list of customer's followers.
     * @param id - ID of customer to unfollow
     */
    RTM.prototype.unfollowCustomer = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("unfollow_customer", { id: id })];
            });
        });
    };
    /**
     * Returns the current routing status of each agent.
     * @param group_ids - groups to list agent routing statuses from
     */
    RTM.prototype.listRoutingStatuses = function (group_ids) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.send("list_routing_statuses", { filters: { group_ids: group_ids } })];
            });
        });
    };
    return RTM;
}(index_1.RTMAPI));
exports["default"] = RTM;
