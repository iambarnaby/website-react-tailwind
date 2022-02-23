const ReactTab = () => {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 mt-[50px] children:bg-[#fafafa] gap-10">
        <div className="h-[300px]">Live Weather App</div>
        <div>ISS Tracker</div>
        <div>Bug Tracker</div>
        <div>PokeAPI.co</div>
      </div>
    </>
  );
};

export default ReactTab;
