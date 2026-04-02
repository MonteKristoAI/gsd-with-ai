import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import ScrollToTop from "@/components/layout/ScrollToTop";
import StickyTopBar from "@/components/layout/StickyTopBar";
import FloatingMobileCTA from "@/components/layout/FloatingMobileCTA";
import ChatbotWidget from "@/components/shared/ChatbotWidget";

export default function App() {
  return (
    <BrowserRouter>
      <StickyTopBar />
      <FloatingMobileCTA />
      <ChatbotWidget />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
