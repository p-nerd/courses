<?php

class Conversation {};

$conversation = new Conversation();

//$type = null;
//
//switch (get_class($conversation)) {
//    case "Conversation":
//        $type = "started_conversation";
//        break;
//    case "Reply":
//        $type = "replied_to_conversation";
//        break;
//    case "Comment":
//        $type = "commented_on_lesson";
//        break;
//}
//
//echo $type;
//
//

$type = match (get_class($conversation)) {
    "Conversation" => "started_conversation",
    "Reply" => "replied_to_conversation",
    "Comment" => "commented_on_lesson",
};

echo $type;
