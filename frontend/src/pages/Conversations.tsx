import { useEffect, useState } from "react";
import Consversation, { ConversationProps } from "./Consversation";

const defaultValue = [
    {
        transcript: "Hello, how are you doing today?",
        comments: [
            {
                id: "1",
                comment: "User is greeting.",
                fileUrl: "", // Optionally initialize with an empty string if no file URL
                file: null, // Represents no file initially
            },
            {
                id: "2",
                comment: "Seems like a casual check-in.",
                fileUrl: "",
                file: null,
            },
        ],
    },
    {
        transcript: "I need help with my account login.",
        comments: [
            {
                id: "3",
                comment: "User is facing a login issue.",
                fileUrl: "",
                file: null,
            },
            {
                id: "4",
                comment: "Support might need to assist with password reset or account recovery.",
                fileUrl: "",
                file: null,
            },
        ],
    },
    {
        transcript: "Can you tell me more about your pricing plans?",
        comments: [
            {
                id: "5",
                comment: "User is inquiring about pricing.",
                fileUrl: "",
                file: null,
            },
            {
                id: "6",
                comment: "Provide details about different plans and their features.",
                fileUrl: "",
                file: null,
            },
        ],
    },
];

const Conversations = () => {
    const [conversations, setConversations] =
        useState<ConversationProps[]>(defaultValue);

    useEffect(() => {
        fetch("http://localhost:3000/conversations")
            .then((res) => res.json())
            .then((data) => {
                setConversations(data);
            });
    });
    return (
        <div>
            {conversations.map((conversation, index) => (
                <div>
                    <Consversation
                        key={index}
                        transcript={conversation.transcript}
                        comments={conversation.comments}
                    />
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Conversations;
