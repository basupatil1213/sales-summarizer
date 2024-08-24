import Display from "@/components/Display";
import Comment from "@/components/Comment";

export type ConversationProps = {
    transcript: string;
    comments: {
        comment: string;
        fileUrl?: string;
        id?: string;
        file?: File | null;
    }[];
};

const Consversation = ({ transcript, comments }: ConversationProps) => {
    return (
        <div>
            <Display transcript={transcript} />
            <h1 className="bg-green-500" >Comments</h1>
            {comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
            ))}
        </div>
    );
};

export default Consversation;
