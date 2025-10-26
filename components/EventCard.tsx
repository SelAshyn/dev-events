interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string
  time: string;
}
import Link from "next/link";
import Image from "next/image";
const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  return (
    <Link href={`/events/${slug}`} id="event-card">
      <Image src={image} alt={title} width={410} height={310} className="poster" />
      <div className="flex flex-row gap-2 font-schibsted-grotesk">
        <Image src="/icons/pin.svg" alt="Location" width={14} height={14} />
        <p>{location}</p>
      </div>
      <p className="title font-schibsted-grotesk">{title}</p>
      <div className="datetime">
        <div>
          <Image src="/icons/calendar.svg" alt="date" width={14} height={14} />
          <p>{date}</p>
        </div>
        <div>
          <Image src="/icons/clock.svg" alt="time" width={14} height={14} />
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
}
export default EventCard
