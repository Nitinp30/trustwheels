import React from "react";
import { Eye } from "lucide-react";

const ModalOverlay = ({ setIsModelOverlayVisible }) => (
  <div className="fixed bottom-6 right-6 z-50">
    <div className="relative">
      <div className="w-80 h-48 bg-gradient-to-br from-teal-500 to-green-600 rounded-xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative p-6 h-full flex flex-col justify-end text-white">
          <div className="mb-2">
            <p className="text-sm opacity-90">
              TrustWheels is completely reimagining vehicle ownership.
            </p>
          </div>
          <h3 className="text-xl font-bold mb-2">TrustWheels in 75 seconds.</h3>
          <p className="text-sm opacity-90">
            Once you Flex, you'll never buy a Vehicle again.
          </p>
        </div>

        <button
          onClick={() => setIsModelOverlayVisible(false)}
          className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
        >
          <Eye className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  </div>
);

export default ModalOverlay;
