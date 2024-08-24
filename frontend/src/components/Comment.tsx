// comment component to add, edit, delete comments

import { useState } from "react";
type CommentType = {
    comment: string;
    fileUrl?: string;
    id ?: string;
    file?: File | null;
};
type CommentProps = {
    comment: CommentType;
};

const Comment = ({ comment }: CommentProps) => {

    const [localComment, setLocalComment] = useState<CommentType>(comment);
    const [mode, setMode] = useState<"view" | "edit">("view");

    const handleCommentSave = () => {
        // Save the comment
        console.log(localComment);
        setMode("view");
    }
    return (
        <div>
            {mode === "view" ? (
                <div>
                    <p>{localComment.comment}</p>
                    {localComment.fileUrl && (
                        <a
                            href={comment.fileUrl}
                            target="_blank"
                            rel="noreferrer">
                            Download File
                        </a>
                    )}
                    <button onClick={() => setMode("edit")}>Edit</button>
                </div>
            ) : (
                <div>
                    <textarea value={localComment.comment} onChange={(e) => {
                        setLocalComment({ ...comment, comment: e.target.value });
                    }} />
                    <input type="file" onChange={(e) => {
                        const file = e.target.files ? e.target.files[0] : null;
                        if (file) {
                            setLocalComment({ ...comment, file });
                        }
                    }} />
                    <button onClick={handleCommentSave}>Save</button>
                </div>
            )}
        </div>
    );
};

export default Comment;
