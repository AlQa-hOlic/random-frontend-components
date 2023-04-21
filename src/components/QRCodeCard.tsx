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
  return (
    <div
      className={`relative flex min-h-screen items-center justify-center overflow-hidden bg-[hsl(212,45%,89%)] ${classes["font-outfit"]}`}
    >
      <div className="mx-1 flex h-[31rem] flex-col rounded-[20px] bg-white p-4 shadow-[0px_10px_46px_-24px_rgba(120,120,120,0.84)]">
        <img
          className="w-[18rem] select-none overflow-hidden rounded-[10px]"
          src={imageSrc}
          alt={title}
        />
        <div className="mt-[25px] max-w-[18rem]">
          <h1 className="text-center text-[22px] font-bold leading-[28px] text-[hsl(218,44%,22%)]">
            {title}
          </h1>
          <p className="p-4 text-center text-[15px] leading-[18px] text-[hsl(220,15%,55%)]">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
