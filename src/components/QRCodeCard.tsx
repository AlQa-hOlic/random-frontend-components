import {
  animated,
  useChain,
  useReducedMotion,
  useSpring,
  useSpringRef,
} from "@react-spring/web";

import classes from "./QRCodeCard.module.css";

interface QRCodeCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
}

export default function QRCodeCard({
  imageSrc,
  title,
  subtitle,
}: QRCodeCardProps) {
  const _reducedMotion = useReducedMotion();

  const containerAnimationRef = useSpringRef();
  const cardContainerProps = useSpring({
    ref: containerAnimationRef,
    from: {
      height: "0rem",
      opacity: 0,
    },
    to: {
      height: "31rem",
      opacity: 1,
    },
  });

  const qrCodeAnimationRef = useSpringRef();
  const qrCodeProps = useSpring({
    ref: qrCodeAnimationRef,
    from: {
      transform: "scale(0)",
      opacity: 0,
    },
    to: {
      transform: "scale(1)",
      opacity: 1,
    },
    delay: 100,
  });

  const titleAnimationRef = useSpringRef();
  const titleProps = useSpring({
    ref: titleAnimationRef,
    from: {
      opacity: 0,
      y: -20,
    },
    to: {
      opacity: 1,
      y: 0,
    },
  });

  const subtitleAnimationRef = useSpringRef();
  const subtitleProps = useSpring({
    ref: subtitleAnimationRef,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  useChain(
    [
      containerAnimationRef,
      qrCodeAnimationRef,
      titleAnimationRef,
      subtitleAnimationRef,
    ],
    [0, 0, 0.4, 0.6]
  );

  return (
    <div
      className={`relative flex min-h-screen items-center justify-center overflow-hidden bg-[hsl(212,45%,89%)] ${classes["font-outfit"]}`}
    >
      <animated.div
        style={cardContainerProps}
        className="mx-1 flex flex-col rounded-[20px] bg-white p-4 shadow-[0px_10px_46px_-24px_rgba(120,120,120,0.84)]"
      >
        <animated.img
          style={qrCodeProps}
          className="w-[18rem] origin-bottom select-none overflow-hidden rounded-[10px]"
          src={imageSrc}
          alt={title}
        />
        <div className="mt-[25px] max-w-[18rem]">
          <animated.h1
            style={titleProps}
            className="text-center text-[22px] font-bold leading-[28px] text-[hsl(218,44%,22%)]"
          >
            {title}
          </animated.h1>
          <animated.p
            style={subtitleProps}
            className="p-4 text-center text-[15px] leading-[18px] text-[hsl(220,15%,55%)]"
          >
            {subtitle}
          </animated.p>
        </div>
      </animated.div>
    </div>
  );
}
