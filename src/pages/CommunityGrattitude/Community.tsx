import TitleSection from "@/components/ui/TitleSection";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface TComment {
  id: number;
  text: string;
  date: string;
}

const CommunityGratitudeWall = () => {
  // State to manage the list of gratitude comments
  const [comments, setComments] = useState<TComment[]>([]);
  // State to manage the input value of the new comment
  const [newComment, setNewComment] = useState("");

  // Function to handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      // Create a new comment object
      const newCommentObj = {
        id: comments.length + 1, // Unique ID for the comment
        text: newComment.trim(),
        date: new Date().toLocaleDateString(), // Current date
      };

      // Add the new comment to the list of comments
      setComments([...comments, newCommentObj]);
      // Clear the input field after adding the comment
      setNewComment("");
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto pb-20 pt-28 p-2">
      <TitleSection>Community Gratitude Wall</TitleSection>
      {/* Input field for adding a new comment */}
      <div className="flex items-center mb-6">
        <textarea
          placeholder="Express your gratitude..."
          value={newComment}
          required
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full bg-inherit  border-2 border-primary px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Button
          onClick={handleAddComment}
          className="px-8 py-8 rounded-none  bg-primary text-black   hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Post
        </Button>
      </div>
      {/* Display the list of gratitude comments */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-100 rounded-lg p-4">
            <p className="text-gray-800">{comment.text}</p>
            <p className="text-gray-500 text-sm">{comment.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityGratitudeWall;
