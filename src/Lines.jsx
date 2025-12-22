function Lines() {
  return (
    <div className="flex items-center w-full justify-center gap-5 mt-16">
      {/* Left Line */}
      <div className=" w-8 h-[2px] bg-black"></div>

      {/* Center Arrows */}
      <div className="flex gap-2">
        <span className="w-3 h-3 border-r-[3px] border-b-[3px] border-black rotate-45"></span>
        <span className="w-3 h-3 border-r-[3px] border-b-[3px] border-black rotate-45"></span>
        <span className="w-3 h-3 border-r-[3px] border-b-[3px] border-black rotate-45"></span>
      </div>

      {/* Right Line */}
      <div className=" w-8 h-[2px] bg-black"></div>
    </div>
  );
}
export default Lines;
