import Image from 'next/image';

function AvatarImage() {
  return (
    <div className="relative h-48 w-48 ">
      <div className="absolute h-36 w-36 translate-x-8 translate-y-8 rounded-full bg-primary transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-[160%]" />
      <div className="absolute h-36 w-36 select-none overflow-clip rounded-full bg-secondary transition-transform duration-200 group-hover:scale-150">
        <Image
          src="/micro.png"
          alt="micro"
          width={135}
          height={203}
          priority
          draggable={false}
        />
      </div>
    </div>
  );
}
// NOTE: backup
export default AvatarImage;
