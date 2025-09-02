import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Clock } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  alt: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  slowMotion?: boolean;
  showTextOverlay?: boolean;
}

interface TextOverlay {
  text: string;
  startTime: number;
  endTime: number;
  style?: 'primary' | 'secondary' | 'accent';
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  className = '',
  autoPlay = false,
  loop = true,
  muted = true,
  controls = false,
  slowMotion = false,
  showTextOverlay = true
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [isSlowMotion, setIsSlowMotion] = useState(slowMotion);
  const [showControls, setShowControls] = useState(false);
  const [currentText, setCurrentText] = useState<TextOverlay | null>(null);

  // Text overlays synchronised with video timeline (adjusted for slow motion 0.5x speed)
  const textOverlays: TextOverlay[] = [
    { text: "FORGE THE FUTURE", startTime: 0, endTime: 4.8, style: 'primary' },
    { text: "Precision Engineering", startTime: 5.2, endTime: 9.8, style: 'secondary' },
    { text: "Quality Craftsmanship", startTime: 10.2, endTime: 14.8, style: 'accent' },
    { text: "South Africa's Premier", startTime: 15.2, endTime: 19.8, style: 'secondary' },
    { text: "Metal Fabrication Specialists", startTime: 20.2, endTime: 24, style: 'primary' }
  ];

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSlowMotionToggle = () => {
    if (videoRef.current) {
      const newSlowMotion = !isSlowMotion;
      videoRef.current.playbackRate = newSlowMotion ? 0.5 : 1.0;
      setIsSlowMotion(newSlowMotion);
    }
  };

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const time = videoRef.current.currentTime;
      
      // Find current text overlay with transition buffer
      const overlay = textOverlays.find(
        (text: TextOverlay) => time >= text.startTime && time <= text.endTime
      );
      
      // Only update if the text has changed to prevent overlap and animation restart
      if (overlay && overlay.text !== currentText?.text) {
        setCurrentText(overlay);
      } else if (!overlay && currentText) {
        setCurrentText(null);
      }
    }
  };

  // Set initial playback rate when component mounts
  useEffect(() => {
    if (videoRef.current && slowMotion) {
      videoRef.current.playbackRate = 0.5;
    }
  }, [slowMotion]);

  const getTextStyle = (style: string) => {
    switch (style) {
      case 'primary':
        return 'text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-yellow-300 to-orange-400 bg-clip-text text-transparent drop-shadow-lg';
      case 'secondary':
        return 'text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg';
      case 'accent':
        return 'text-3xl md:text-4xl lg:text-5xl font-bold text-orange-400 drop-shadow-lg';
      default:
        return 'text-2xl md:text-3xl font-semibold text-white drop-shadow-lg';
    }
  };

  return (
    <div 
      className={`relative group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        className="w-full h-full object-cover rounded-2xl"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
      
      {/* Text Overlay */}
      {showTextOverlay && currentText && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center px-4">
            <h2 className={`${getTextStyle(currentText.style || 'primary')} drop-shadow-2xl transition-opacity duration-500 ease-in-out`}>
              {currentText.text}
            </h2>
          </div>
        </div>
      )}
      
      {/* Custom Controls Overlay */}
      {!controls && (
        <div className={`absolute inset-0 bg-black/20 rounded-2xl transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePlayPause}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
              </button>
              
              <button
                onClick={handleMuteToggle}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>

              <button
                onClick={handleSlowMotionToggle}
                className={`backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300 ${
                  isSlowMotion 
                    ? 'bg-orange-500/80 hover:bg-orange-600/80' 
                    : 'bg-white/20 hover:bg-white/30'
                }`}
                title={isSlowMotion ? 'Normal Speed' : 'Slow Motion'}
              >
                <Clock className="w-5 h-5" />
              </button>
            </div>

            {/* Speed indicator */}
            {isSlowMotion && (
              <div className="bg-orange-500/80 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                0.5x
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
