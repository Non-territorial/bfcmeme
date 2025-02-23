import { motion } from "framer-motion";

export default function Popup({ onClose }: { message: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white p-6 rounded-2xl shadow-xl max-w-lg w-full text-center border-4 border-green-500"
      >
        <h2 className="text-2xl font-extrabold text-gray-900 flex items-center justify-center gap-2">
          🚀 BFCMEME Launch Info
        </h2>
        <p className="mt-4 text-gray-800 text-lg leading-relaxed">
          BFCMEME Exchange and Marketplace will launch on <b className="text-green-600">March 28th</b> for **whitelisted addresses**.
          <br />
          Public sale opens on <b className="text-blue-600">April 2nd</b>.
        </p>
        <button
          onClick={onClose}
          className="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-200"
        >
          Got it!
        </button>
      </motion.div>
    </div>
  );
}
