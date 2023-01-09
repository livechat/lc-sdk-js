"use strict";
exports.__esModule = true;
exports.Pushes = void 0;
var constants_1 = require("../internal/constants");
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
     * Informs that Customer's data was updated.
     */
    Pushes["CustomerUpdated"] = "customer_updated";
    /**
     * Informs that a Customer moved to another page of the website.
     */
    Pushes["CustomerPageUpdated"] = "customer_page_updated";
    /**
     * Informs that a Customer updated the data stored on their side.
     */
    Pushes["CustomerSideStorageUpdated"] = "customer_side_storage_updated";
    /**
     * Informs that a Customer was disconnected. The payload contains the reason of Customer's disconnection.
     */
    Pushes["CustomerDisconnected"] = "customer_disconnected";
    /**
     * Informs that one of the chat users is currently typing a message. The message hasn't been sent yet.
     * The push payload contains the typing indicator object.
     * @param cb - callback
     */
    Pushes["IncomingTypingIndicator"] = "incoming_typing_indicator";
    /**
     * Informs that a user has seen events up to a specific time.
     */
    Pushes["EventsMarkedAsSeen"] = "events_marked_as_seen";
    /**
     * Informs about messages sent via the multicast method or by the system.
     */
    Pushes["IncomingMulticast"] = "incoming_multicast";
    /**
     * Informs about an incoming greeting.
     */
    Pushes["IncomingGreeting"] = "incoming_greeting";
    /**
     * Informs about a greeting accepted by the Customer.
     */
    Pushes["GreetingAccepted"] = "greeting_accepted";
    /**
     * Informs about a greeting rejected by the Customer.
     * Also, the push is sent when a new greeting automatically cancels the currently displayed one.
     */
    Pushes["GreetingCancelled"] = "greeting_cancelled";
    /**
     * Informs about an updated position in the queue and about the wait time.
     */
    Pushes["QueuePostitionUpdated"] = "queue_postition_updated";
})(Pushes = exports.Pushes || (exports.Pushes = {}));
