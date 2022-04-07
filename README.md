# realtime-chat-app

Real-time Chat Application

## Requirement Analysis

- Login Page
  - from with username and password field
  - users collection
    - name
    - email
    - password
    - mobile
    - role
- Inbox Page
  - messages collection
    - text
    - attachment
    - sender
    - receiver
    - date_time
    - conversations_id
  - conversations collection
    - id
    - creator_id
    - participant
    - last_updated
- Database Relation
  - users.id -> massages.sender
  - users.id -> massages.receiver
  - users.id -> conversations.creator_id
  - users.id -> conversations.participant
  - conversations.id -> messages.conversations_id

## Functionalities

- Login Page
  - addUser - add new user
  - login - login user
  - delete - delete user
- Inbox Page
  - getConversations - get logged in user's conversations
  - getMessages - get messages of a conversation
  - sendMessage - send message to recipient
  - addConversation - add new conversation
  - deleteConversation - delete a conversation
