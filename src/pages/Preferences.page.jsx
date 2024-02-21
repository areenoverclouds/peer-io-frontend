import Auth from "@/components/Auth";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { Selector } from "@/components/Selector";
import Chat from './(old) Chat.page.jsx'

const PreferencePage = () => {
  const [show, setShow] = useState('selector'); // 3 options: selector, chat

  const startChatting = () => {
    setShow('chat');
  }

  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar />
      {show === 'selector' && <Selector startChatting={startChatting}/>}
      {show === 'chat' && <Chat />}
      <Footer />
    </div>
  );
};

export default PreferencePage;
