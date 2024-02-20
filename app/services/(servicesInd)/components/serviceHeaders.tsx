
interface ServiceHeaderProps {
    header: string;
    desc: string;
    sub: string;
}

const SHeader: React.FC<ServiceHeaderProps> = ({
    header, desc, sub
}) => {
  return (
    <section className="bg-gray-900 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
          {header}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          {sub}
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 text-gray-100">
          {desc}
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          
          
        </div>
      </div>
    </section>
  );
};

export default SHeader;
