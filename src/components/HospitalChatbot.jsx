import { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  X,
  Send,
  Mic,
  MicOff,
  ImagePlus,
  Camera,
} from "lucide-react";
import Tesseract from "tesseract.js";

/* ===================== MEDICINE DETECTION ===================== */
const isMedicineQuery = (text) => {
  const hints = [
    "medicine",
    "tablet",
    "capsule",
    "syrup",
    "drug",
    "dosage",
    "dose",
    "mg",
    "antibiotic",
    "painkiller",
  ];

  if (hints.some((w) => text.includes(w))) return true;

  const words = text.trim().split(/\s+/);
  return words.length === 1 && text.length > 4;
};

/* ===================== AI EXPLANATION ===================== */
const explainMedicineText = (text) => {
  const t = text.toLowerCase();

  if (t.includes("paracetamol"))
    return "Paracetamol is commonly used to reduce fever and relieve mild to moderate pain.";
  if (t.includes("ibuprofen"))
    return "Ibuprofen is used for pain relief and inflammation reduction.";
  if (t.includes("amoxicillin"))
    return "Amoxicillin is an antibiotic used to treat bacterial infections.";
  if (t.includes("cetirizine"))
    return "Cetirizine is an antihistamine used for allergy relief.";

  return "This appears to be a medicine or medical term generally used as advised by a doctor.";
};

/* ===================== BOT TEXT ===================== */
const getBotReply = (msg) => {
  const t = msg.toLowerCase();
  if (t.includes("appointment"))
    return "I can help you book an appointment. Which department?";
  if (t.includes("doctor"))
    return "We have expert doctors across all major specialties.";
  if (t.includes("emergency"))
    return "🚨 Emergency services are available 24/7.";
  if (t.includes("timing"))
    return "OPD timings are 9 AM – 8 PM.";
  if (t.includes("location"))
    return "📍 We are located in City Center, Pune.";
  if (t.includes("hi") || t.includes("hello"))
    return "Hello 👋 How can I assist you today?";
  return null;
};

export default function HospitalChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [listening, setListening] = useState(false);

  const [pendingGoogleSearch, setPendingGoogleSearch] = useState(null);
  const [showConfirmButtons, setShowConfirmButtons] = useState(false);

  const [cameraOpen, setCameraOpen] = useState(false);
  const [ocrLoading, setOcrLoading] = useState(false);

  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Welcome to CityCare Hospital! How can I help you?" },
  ]);

  const endRef = useRef(null);
  const recognitionRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  /* ===================== VOICE ===================== */
  useEffect(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;

    const rec = new SR();
    rec.lang = "en-IN";
    rec.onstart = () => setListening(true);
    rec.onend = () => setListening(false);
    rec.onresult = (e) => setInput(e.results[0][0].transcript);

    recognitionRef.current = rec;
  }, []);

  const startListening = () => recognitionRef.current?.start();

  /* ===================== CAMERA ===================== */
  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      videoRef.current.srcObject = stream;
      setCameraOpen(true);
    } catch {
      alert("Camera access not allowed or not supported.");
    }
  };

  const closeCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) stream.getTracks().forEach((t) => t.stop());
    setCameraOpen(false);
  };

  const capturePhoto = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);

    closeCamera();

    canvas.toBlob(async (blob) => {
      if (!blob) return;
      processImage(blob);
    });
  };

  /* ===================== IMAGE + OCR ===================== */
  const processImage = async (file) => {
    const url = URL.createObjectURL(file);
    setMessages((p) => [...p, { from: "user", image: url }]);
    setOcrLoading(true);

    const res = await Tesseract.recognize(file, "eng");
    const text = res.data.text.replace(/\n/g, " ").trim();

    if (!text) {
      setMessages((p) => [
        ...p,
        { from: "bot", text: "No readable text found. Search image on Google?" },
      ]);
      setPendingGoogleSearch("image");
      setShowConfirmButtons(true);
      setOcrLoading(false);
      return;
    }

    const explanation = explainMedicineText(text);

    setMessages((p) => [
      ...p,
      { from: "bot", text: `📝 Extracted: "${text}"` },
      {
        from: "bot",
        text: `🧠 AI Explanation:\n${explanation}\n⚠️ Consult a doctor before use.`,
      },
      { from: "bot", text: "Search this on Google?" },
    ]);

    setPendingGoogleSearch(text);
    setShowConfirmButtons(true);
    setOcrLoading(false);
  };

  /* ===================== YES / NO ===================== */
  const handleDecision = (yes) => {
    if (yes) {
      window.open(
        pendingGoogleSearch === "image"
          ? "https://lens.google.com/upload"
          : `https://www.google.com/search?q=${encodeURIComponent(
              pendingGoogleSearch
            )} medicine`,
        "_blank"
      );
    }
    setShowConfirmButtons(false);
    setPendingGoogleSearch(null);
  };

  /* ===================== SEND ===================== */
  const sendMessage = () => {
  if (!input.trim() || showConfirmButtons) return;

  const msg = input;
  setMessages((prev) => [...prev, { from: "user", text: msg }]);
  setInput("");
  setTyping(true);

  setTimeout(() => {
    const reply = getBotReply(msg);
    const lowerText = msg.toLowerCase();

    // 🔍 Medicine-related → existing medicine flow
    if (!reply && isMedicineQuery(lowerText)) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Search this medicine on Google?" },
      ]);
      setPendingGoogleSearch(msg);
      setShowConfirmButtons(true);
      setTyping(false);
      return;
    }

    // ❌ No hospital match → DIRECT GOOGLE SEARCH
    if (!reply) {
      window.open(
        `https://www.google.com/search?q=${encodeURIComponent(msg)}`,
        "_blank"
      );

      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text:
            "🔎 I couldn’t find this in hospital records, so I searched it on Google for you.",
        },
      ]);

      setTyping(false);
      return;
    }

    // ✅ Normal hospital reply
    setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    setTyping(false);
  }, 1500);
};


  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, showConfirmButtons]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-xl"
      >
        <MessageCircle />
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 w-96 h-[480px] z-50 bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">
          <div className="bg-blue-600 text-white p-3 flex justify-between">
            AI Hospital Assistant
            <X onClick={() => setOpen(false)} />
          </div>

          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((m, i) => (
              <div key={i}>
                {m.text && (
                  <div className="bg-gray-100 p-2 rounded mb-2 text-sm">
                    {m.text}
                  </div>
                )}
                {m.image && (
                  <img
                    src={m.image}
                    className="max-w-[150px] rounded mb-2"
                  />
                )}
              </div>
            ))}

            {typing && <div className="text-sm">Thinking...</div>}
            {ocrLoading && <div className="text-sm">Extracting text...</div>}

            {showConfirmButtons && (
              <div className="flex gap-2">
                <button
                  onClick={() => handleDecision(true)}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  Yes
                </button>
                <button
                  onClick={() => handleDecision(false)}
                  className="bg-gray-300 px-3 py-1 rounded"
                >
                  No
                </button>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="p-2 flex gap-2 border-t">
            <button onClick={openCamera}>
              <Camera />
            </button>

            <label>
              <ImagePlus />
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => processImage(e.target.files[0])}
              />
            </label>

            <button onClick={startListening}>
              {listening ? <MicOff /> : <Mic />}
            </button>

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded px-2"
              placeholder="Type or speak..."
            />
            <Send onClick={sendMessage} />
          </div>

          {cameraOpen && (
            <div className="camera-overlay">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="camera-video"
              />
              <div className="scan-frame">
                <div className="scan-line" />
              </div>
              <div className="scan-instruction">
                Align the medicine or label inside the frame
              </div>
              <div className="camera-controls">
                <button
                  onClick={closeCamera}
                  className="camera-btn close"
                >
                  Close
                </button>
                <button
                  onClick={capturePhoto}
                  className="camera-btn capture"
                >
                  Capture
                </button>
              </div>
              <canvas ref={canvasRef} className="hidden" />
            </div>
          )}
        </div>
      )}
    </>
  );
}
