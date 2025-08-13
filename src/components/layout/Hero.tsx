import SearchBar from "../ui/SearchBar";

const Hero = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center gap-8 mt-35 max-w-[48rem] w-full">
        <div className="flex flex-col items-center justify-center text-center">
          <h1
            className="gradient-text font-medium w-fit
            text-[2rem]  md:text-[2.7rem] 
            xs:text-[1.8rem]"
          >
            Creating Blog Platforms That Engage
          </h1>
          <h1
            className="font-medium w-fit text-text-color
            text-[2rem]  md:text-[2.7rem] 
            xs:text-[1.8rem]"
          >
            and Inspire Audiences
          </h1>
        </div>
        <p
          className="text-text-color-muted/80 text-center
          lg:text-size-18 line-clamp-2 w-[90%] tracking-wide"
        >
          Discover fresh ideas, inspiring stories, and expert insights your
          daily destination for knowledge, creativity, and meaningful
          connection.
        </p>
        <SearchBar />
      </div>
      <div className="absolute -z-10 top-0 left-0 bg-pattern w-[500px] aspect-square hidden lg:block " />
      {/* <div className="glow-ball absolute  -top-40 -left-40 w-[400px] h-[400px] hidden lg:block" /> */}
    </div>
  );
};

export default Hero;
