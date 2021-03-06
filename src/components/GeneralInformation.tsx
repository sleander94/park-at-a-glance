import { ParkProp } from './ParkPage';

const GeneralInformation = ({ park }: ParkProp) => {
  return (
    <section id="info" className="GeneralInfo lg:max-w-[900px] w-full border border-black rounded bg-white">
      {park.images && (
        <img
          className="block ml-auto mr-auto w-full rounded-tr-[.19rem] rounded-tl-[.19rem]"
          src={park.images[0].url}
          alt={park.images[0].altText}
        ></img>
      )}
      <p className="p-1">{park.description}</p>
      <div className="p-2 pb-4 flex justify-around items-center">
        <a
          className="rounded p-1 bg-[#3A736C] text-white"
          href={park.url}
          target="_blank"
          rel="noreferrer"
        >
          NPS Website
        </a>
        <a
          className="rounded p-1 bg-[#3A736C] text-white"
          href={park.directionsUrl}
          target="_blank"
          rel="noreferrer"
        >
          Directions
        </a>
      </div>
      <h2 className="text-center font-bold">Typical Conditions</h2>
      <p className="p-2">{park.weatherInfo}</p>
    </section>
  );
};

export default GeneralInformation;
