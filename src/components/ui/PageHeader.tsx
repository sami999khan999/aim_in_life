import Breadcrumb from "./Breadcrumb";

const PageHeader = () => {
  return (
    <div className="w-full mt-[2rem]">
      <div className="header-bg h-[20rem] w-full rounded-2xl flex items-center justify-center">
        <Breadcrumb className="text-bg-dark" />
      </div>
    </div>
  );
};

export default PageHeader;
