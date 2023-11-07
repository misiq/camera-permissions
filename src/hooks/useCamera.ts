import { useState } from "react";

const useCamera = () => {
  //   const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState(null);

  const getMedia = async () => {
    try {
      const videoStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      videoStream.getTracks().forEach((track) => track.stop());
    } catch (err) {
      setError(err);
    }
  };

  return { getMedia };
};

export default useCamera;
