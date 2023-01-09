"use strict";
exports.__esModule = true;
exports.Pushes = exports.CustomerMonitoringLevel = exports.CustomerSortBy = exports.SurveyType = void 0;
var constants_1 = require("../internal/constants");
var SurveyType;
(function (SurveyType) {
    SurveyType["PreChat"] = "pre_chat";
    SurveyType["PostChat"] = "post_chat";
})(SurveyType = exports.SurveyType || (exports.SurveyType = {}));
var CustomerSortBy;
(function (CustomerSortBy) {
    CustomerSortBy["CreateAt"] = "created_at";
    CustomerSortBy["ThreadsCount"] = "threads_count";
    CustomerSortBy["VisitsCount"] = "visits_count";
    CustomerSortBy["AgentLastEvent"] = "agent_last_event";
    CustomerSortBy["CustomerLastEvent"] = "customer_last_event";
})(CustomerSortBy = exports.CustomerSortBy || (exports.CustomerSortBy = {}));
var CustomerMonitoringLevel;
(function (CustomerMonitoringLevel) {
    CustomerMonitoringLevel["My"] = "my";
    CustomerMonitoringLevel["Chatting"] = "chatting";
    CustomerMonitoringLevel["Invited"] = "invited";
    CustomerMonitoringLevel["Online"] = "online";
})(CustomerMonitoringLevel = exports.CustomerMonitoringLevel || (exports.CustomerMonitoringLevel = {}));
var Pushes;
(function (Pushes) {
    /**
     * Informs about a chat coming with a new thread. The push payload contains the whole chat data structure.
     * If the chat was started with some initial events, the thread object contains them.
     */
    Pushes["IncomingChat"] = "incoming_chat";
    /**
     * Informs that a chat was deactivated by closing the currently open thread.
     */
    Pushes["ChatDeactivated"] = "chat_deactivated";
    /**
     * Informs that new, single access to a chat was granted. The existing access isn't overwritten.
     */
    Pushes["ChatAccessGranted"] = "chat_access_granted";
    /**
     * Informs that access to a certain chat was revoked.
     */
    Pushes["ChatAccessRevoked"] = "chat_access_revoked";
    /**
     * Informs that a chat was transferred to a different group or to an Agent.
     */
    Pushes["ChatTransferred"] = "chat_transferred";
    /**
     * Informs that a user (Customer or Agent) was added to a chat.
     * This push can be emitted with user.present set to false when a user writes to a chat without joining it
     * You can achieve that via the Send Event method.
     */
    Pushes["UserAddedToChat"] = "user_added_to_chat";
    /**
     * Informs that a user (Customer or Agent) was removed from a chat.
     */
    Pushes["UserRemovedFromChat"] = "user_removed_from_chat";
    /**
     * Informs about an incoming event sent to a chat.
     */
    Pushes["IncomingEvent"] = "incoming_event";
    /**
     * Informs that an event was updated.
     */
    Pushes["EventUpdated"] = "event_updated";
    /**
     * Informs about an incoming rich message postback. The push payload contains the info on the postback itself,
     * as well as the chat it was sent in.
     */
    Pushes["IncomingRichMessagePostback"] = "incoming_rich_message_postback";
    /**
     * Informs about those chat properties that were updated.
     */
    Pushes["ChatPropertiesUpdated"] = "chat_properties_updated";
    /**
     * Informs about those chat properties that were deleted.
     */
    Pushes["ChatPropertiesDeleted"] = "chat_properties_deleted";
    /**
     * Informs about those thread properties that were updated.
     */
    Pushes["ThreadPropertiesUpdated"] = "thread_properties_updated";
    /**
     * Informs about those thread properties that were deleted.
     */
    Pushes["ThreadPropertiesDeleted"] = "thread_properties_deleted";
    /**
     * Informs about those event properties that were updated.
     */
    Pushes["EventPropertiesUpdated"] = "event_properties_updated";
    /**
     * Informs about those event properties that were deleted.
     */
    Pushes["EventPropertiesDeleted"] = "event_properties_deleted";
    /**
     * Informs that a chat thread was tagged.
     */
    Pushes["ThreadTagged"] = "thread_tagged";
    /**
     * Informs that a chat thread was untagged.
     */
    Pushes["ThreadUntagged"] = "thread_untagged";
    /**
     * Informs that a Customer entered the tracked website.
     */
    Pushes["CustomerVisitStarted"] = "customer_visit_started";
    /**
     * Informs that a new Customer registered.
     */
    Pushes["CustomerCreated"] = "customer_created";
    /**
     * Informs that Customer's data was updated.
     */
    Pushes["CustomerUpdated"] = "customer_updated";
    /**
     * Informs that a Customer moved to another page of the website.
     */
    Pushes["CustomerPageUpdated"] = "customer_page_updated";
    /**
     * Informs that a Customer was banned for a specified number of days.
     */
    Pushes["CustomerBanned"] = "customer_banned";
    /**
     * Informs that a Customer left the tracked website.
     */
    Pushes["CustomerVisitEnded"] = "customer_visit_ended";
    /**
     * Informs that an Agent's or Bot Agent's status was changed.
     */
    Pushes["RoutingStatusSet"] = "routing_status_set";
    /**
     * Informs that an Agent was disconnected. The payload contains the reason of Customer's disconnection.
     */
    Pushes["AgentDisconnected"] = "agent_disconnected";
    /**
     * Informs that one of the chat users is currently typing a message. The message hasn't been sent yet.
     * The push payload contains the typing indicator object.
     */
    Pushes["IncomingTypingIndicator"] = "incoming_typing_indicator";
    /**
     * Informs about the message a Customer is currently typing. The push payload contains the sneak peek object.
     */
    Pushes["IncomingSneakPeek"] = "incoming_sneak_peek";
    /**
     * Informs that a user has seen events up to a specific time.
     */
    Pushes["EventsMarkedAsSeen"] = "events_marked_as_seen";
    /**
     * Informs about messages sent via the multicast method or by the system.
     */
    Pushes["IncomingMulticast"] = "incoming_multicast";
    /**
     * Informs that a chat has been unfollowed. Useful in multiple connection scenarios,
     * where one app/integration needs to know that another one unfollowed the chat.
     */
    Pushes["ChatUnfollowed"] = "chat_unfollowed";
    /**
     * New positions and wait times for queued chats.
     */
    Pushes["QueuePositionsUpdated"] = "queue_position_updated";
    /**
     * New positions and wait times for queued chats.
     */
    Pushes["QueuePostitionsUpdated"] = "queue_position_updated";
    /**
     * Informs about customers the agent should be aware of.
     */
    Pushes["IncomingCustomers"] = "incoming_customers";
    /**
     * Informs that a new or returning customer is available to the agent.
     */
    Pushes["IncomingCustomer"] = "incoming_customer";
    /**
     * Informs that a Customer left the tracked website.
     */
    Pushes["CustomerLeft"] = "customer_left";
    /**
     * Informs that a customer was unfollowed.
     */
    Pushes["CustomerUnfollowed"] = "customer_unfollowed";
})(Pushes = exports.Pushes || (exports.Pushes = {}));
