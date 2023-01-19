export interface Push<P = unknown> {
  version: string;
  request_id?: string;
  action: string;
  type: string;
  payload: P;
}

export enum Pushes {
  /**
   * Informs about a chat coming with a new thread. The push payload contains the whole chat data structure.
   * If the chat was started with some initial events, the thread object contains them.
   */
  IncomingChat = "incoming_chat",

  /**
   * Informs that a chat was deactivated by closing the currently open thread.
   */
  ChatDeactivated = "chat_deactivated",

  /**
   * Informs that new, single access to a chat was granted. The existing access isn't overwritten.
   */
  ChatAccessGranted = "chat_access_granted",

  /**
   * Informs that access to a certain chat was revoked.
   */
  ChatAccessRevoked = "chat_access_revoked",

  /**
   * Informs that a chat was transferred to a different group or to an Agent.
   */
  ChatTransferred = "chat_transferred",

  /**
   * Informs that a user (Customer or Agent) was added to a chat.
   * This push can be emitted with user.present set to false when a user writes to a chat without joining it
   * You can achieve that via the Send Event method.
   */
  UserAddedToChat = "user_added_to_chat",

  /**
   * Informs that a user (Customer or Agent) was removed from a chat.
   */
  UserRemovedFromChat = "user_removed_from_chat",

  /**
   * Informs about an incoming event sent to a chat.
   */
  IncomingEvent = "incoming_event",

  /**
   * Informs that an event was updated.
   */
  EventUpdated = "event_updated",

  /**
   * Informs about an incoming rich message postback. The push payload contains the info on the postback itself,
   * as well as the chat it was sent in.
   */
  IncomingRichMessagePostback = "incoming_rich_message_postback",

  /**
   * Informs about those chat properties that were updated.
   */
  ChatPropertiesUpdated = "chat_properties_updated",

  /**
   * Informs about those chat properties that were deleted.
   */
  ChatPropertiesDeleted = "chat_properties_deleted",

  /**
   * Informs about those thread properties that were updated.
   */
  ThreadPropertiesUpdated = "thread_properties_updated",

  /**
   * Informs about those thread properties that were deleted.
   */
  ThreadPropertiesDeleted = "thread_properties_deleted",

  /**
   * Informs about those event properties that were updated.
   */
  EventPropertiesUpdated = "event_properties_updated",

  /**
   * Informs about those event properties that were deleted.
   */
  EventPropertiesDeleted = "event_properties_deleted",

  /**
   * Informs that a chat thread was tagged.
   */
  ThreadTagged = "thread_tagged",

  /**
   * Informs that a chat thread was untagged.
   */
  ThreadUntagged = "thread_untagged",

  /**
   * Informs that a Customer entered the tracked website.
   */
  CustomerVisitStarted = "customer_visit_started",

  /**
   * Informs that a new Customer registered.
   */
  CustomerCreated = "customer_created",

  /**
   * Informs that Customer's data was updated.
   */
  CustomerUpdated = "customer_updated",

  /**
   * Informs that a Customer moved to another page of the website.
   */
  CustomerPageUpdated = "customer_page_updated",

  /**
   * Informs that a Customer was banned for a specified number of days.
   */
  CustomerBanned = "customer_banned",

  /**
   * Informs that a Customer left the tracked website.
   */
  CustomerVisitEnded = "customer_visit_ended",

  /**
   * Informs that an Agent's or Bot Agent's status was changed.
   */
  RoutingStatusSet = "routing_status_set",

  /**
   * Informs that an Agent was disconnected. The payload contains the reason of Customer's disconnection.
   */
  AgentDisconnected = "agent_disconnected",

  /**
   * Informs that one of the chat users is currently typing a message. The message hasn't been sent yet.
   * The push payload contains the typing indicator object.
   */
  IncomingTypingIndicator = "incoming_typing_indicator",

  /**
   * Informs about the message a Customer is currently typing. The push payload contains the sneak peek object.
   */
  IncomingSneakPeek = "incoming_sneak_peek",

  /**
   * Informs that a user has seen events up to a specific time.
   */
  EventsMarkedAsSeen = "events_marked_as_seen",

  /**
   * Informs about messages sent via the multicast method or by the system.
   */
  IncomingMulticast = "incoming_multicast",

  /**
   * Informs that a chat has been unfollowed. Useful in multiple connection scenarios,
   * where one app/integration needs to know that another one unfollowed the chat.
   */
  ChatUnfollowed = "chat_unfollowed",

  /**
   * New positions and wait times for queued chats.
   */
  QueuePositionsUpdated = "queue_positions_updated",

  /**
   * Informs about customers the agent should be aware of.
   */
  IncomingCustomers = "incoming_customers",

  /**
   * Informs that a new or returning customer is available to the agent.
   */
  IncomingCustomer = "incoming_customer",

  /**
   * Informs that a Customer left the tracked website.
   */
  CustomerLeft = "customer_left",

  /**
   * Informs that a customer was unfollowed.
   */
  CustomerUnfollowed = "customer_unfollowed",
}
