import { useRef, useState } from "react";
import { FaCamera, FaImage } from "react-icons/fa";
import Webcam from "react-webcam";

const CameraCapture = () => {
  const webcamRef = useRef<Webcam>(null);
  const [image, setImage] = useState<string | null>(null);
  const [isCameraOn, setIsCameraOn] = useState(true);

  const capturePhoto = () => {
    if (webcamRef.current) {
      const screenshot = webcamRef.current.getScreenshot();
      setImage(screenshot);
    }
  };

  const toggleCamera = () => {
    setIsCameraOn((prev) => !prev);
    setImage(null);
  };

  return (
    <section className="container mx-auto max-md:px-5">
      <h1 className="text-3xl mb-5 text-center mt-3">Web camera</h1>
      <div className="flex gap-4 max-md:flex-col">
        <div className="mx-auto">
          <div className="mb-4">
            {isCameraOn ? (
              <Webcam
                ref={webcamRef}
                screenshotFormat="image/png"
                className="size-full rounded-lg"
                width={400}
                height={400}
                mirrored={false}
              />
            ) : (
              <div className="size-[400px] flex items-center justify-center bg-gray-200 rounded-lg">
                <FaCamera size={40} />
              </div>
            )}
          </div>
          <div className="flex gap-4 justify-center">
            <button
              onClick={capturePhoto}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
            >
              Rasmga olish
            </button>
            <button
              onClick={toggleCamera}
              className={`px-4 py-2 rounded-lg shadow-md text-white ${
                isCameraOn
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {isCameraOn ? "📷 Kamerani o‘chirish" : "📸 Kamerani yoqish"}
            </button>
          </div>
        </div>

        {image ? (
          <img
            src={image}
            alt="Captured"
            className="w-[500px] h-[440px] rounded-lg"
            width={400}
          />
        ) : (
          <div className="size-[400px] flex items-center justify-center bg-gray-200 rounded-lg">
            <FaImage size={40} />
          </div>
        )}
      </div>
    </section>
  );
};

export default CameraCapture;
