import { useChat } from "ai/react";
import { Send } from "lucide-react";
import React from "react";

const RenderForm = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "api/genai",
  });
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(event, {
            data: {
              prompt: input,
            },
          });
        }}
        className="w-full flex flex-row gap-2 items-center h-full"
      >
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Ask something awesome . . ."
          className="border-b border-dashed outline-none w-full px-4 py-2 text-[#0842A0] placeholder:text-[#0842A099] text-right focus:placeholder-transparent"
        />
        <button
          type="submit"
          className="rounded-full shadow-md border flex flex-row"
        >
          <Send className="p-2.5 h-10 w-10   stroke-stone" color="black" />
        </button>
      </form>
      <Send />
    </div>
  );
};

export default RenderForm;
