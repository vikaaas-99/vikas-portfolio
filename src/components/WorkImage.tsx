import { useEffect, useRef, useState, type CSSProperties } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  isActive?: boolean;
  shouldLoad?: boolean;
  shouldPlay?: boolean;
  poster?: string;
  style?: CSSProperties;
}

const WorkImage = (props: Props) => {
  const Wrapper = props.link ? "a" : "div";
  const hasVideo = !!props.video;
  const posterSrc = props.poster ?? props.image;
  const shouldLoad = props.shouldLoad ?? props.isActive ?? true;
  const shouldPlay = props.shouldPlay ?? props.isActive ?? true;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    if (!hasVideo) return;
    setIsVideoReady(false);
  }, [hasVideo, props.video]);

  useEffect(() => {
    if (!hasVideo) return;
    const video = videoRef.current;
    if (!video) return;

    if (!shouldPlay) {
      video.pause();
      try {
        video.currentTime = 0;
      } catch {
        // ignore
      }
      return;
    }

    const playPromise = video.play();
    if (playPromise) playPromise.catch(() => {});
  }, [hasVideo, shouldPlay]);

  return (
    <div className="work-image">
      <Wrapper
        className="work-image-in"
        style={props.style}
        {...(props.link
          ? { href: props.link, target: "_blank", rel: "noreferrer" }
          : {})}
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        {!hasVideo && (
          <img
            className="work-media"
            src={props.image}
            alt={props.alt}
            loading="lazy"
            decoding="async"
          />
        )}
        {hasVideo && (
          <>
            <img
              className={`work-media work-poster ${isVideoReady ? "work-poster-hidden" : ""
                }`}
              src={posterSrc}
              alt={props.alt}
              loading="lazy"
              decoding="async"
            />
            <video
              ref={videoRef}
              className={`work-media work-video ${isVideoReady ? "work-video-ready" : ""
                }`}
              src={shouldLoad ? props.video : undefined}
              muted
              playsInline
              loop
              preload={shouldLoad ? "auto" : "none"}
              onLoadedData={() => setIsVideoReady(true)}
              controls={false}
            />
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default WorkImage;
