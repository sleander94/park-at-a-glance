import Searchbar from './Searchbar';

type ParksInfo = {
  parksInfo: Array<any>;
};

const HomePage = ({ parksInfo }: ParksInfo) => {
  const hideSearch = () => {
    const suggs = document.getElementById('searchSuggs');
    if (suggs !== null) {
      suggs.classList.add('hidden');
      suggs.classList.remove('visible');
    }
  };

  return (
    <div className="h-[calc(100vh-72px)] grid grid-auto-rows items-start">
      <div
        className="h-full flex justify-center bg-smoky-mountains bg-center bg-no-repeat row-start-1 row-end-1 col-start-1 col-end-1"
        onClick={() => hideSearch()}
      ></div>
      <div className="mt-36 sm:mt-48 w-3/5 max-w-xl min-w-[300px] row-start-1 row-end-1 col-start-1 col-end-1 justify-self-center">
        <Searchbar parksInfo={parksInfo} />
      </div>
    </div>
  );
};

export default HomePage;
