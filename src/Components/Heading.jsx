const Heading = ({ title }) => {
  return (
    <div className="pt-20 flex justify-center ">
      <h1 className=" text-2xl md:text-4xl border-4 px-15 py-4 font-bold inline">
        {title}
      </h1>
    </div>
  );
};

export default Heading;
