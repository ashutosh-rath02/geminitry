import Image from "next/image";
import RenderForm from "./components/RenderForm";
import RenderMessages from "./components/RenderMessages";
import { useChat } from "ai/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <RenderForm />
      <RenderMessages />
    </main>
  );
}
