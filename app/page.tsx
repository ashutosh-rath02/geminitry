// "use client";
// import RenderForm from "./components/RenderForm";
// import RenderMessages from "./components/RenderMessages";
// import { useChat } from "ai/react";

// export default function Home() {
//   const { messages } = useChat({
//     api: "api/genai",
//   });
//   return (
//     <main className="flex min-h-screen flex-col items-center p-12">
//       <RenderForm />
//       <RenderMessages />
//       <div className="text-black">
//         {" "}
//         {messages.map((message) => (
//           <div key={message.id}>
//             {message.role === "user" ? "User: " : "AI: "}
//             {message.content}
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }
"use client";

import { useChat } from "ai/react";

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "api/chat",
  });

  return (
    <>
      {messages.map((message) => (
        <div key={message.id}>
          {message.role === "user" ? "User: " : "AI: "}
          {message.content}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          name="prompt"
          value={input}
          onChange={handleInputChange}
          id="input"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
