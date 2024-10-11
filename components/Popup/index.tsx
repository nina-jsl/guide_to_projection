const PopUp = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      id="Popup"
      className="absolute w-screen h-[90%] flex justify-center items-center z-10"
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 w-2/3 h-[70%] rounded-md shadow-lg p-8 relative">
        <div className="text-container w-full h-full mx-auto my-8 overflow-auto scrollbar">
          <h1 className="text-center font-semibold text-2xl mt-7 text-black">
            Welcome to &quot;A Guide to Projection&quot;
          </h1>
          {/* Centered description */}
          <div id="des-container" className="flex flex-col items-center mt-6">
            <p className="w-[90%] text-center text-black ">
              Welcome to a world where every profession carries not just
              expectations, but hidden depths. The doctor who saves lives. The
              lawyer who defends justice. The engineer who builds the future.
              The investment banker who shapes economies. Each of these roles
              comes with a set of masks—masks that shield their true struggles,
              desires, and the weight of responsibility they bear.
            </p>
            <br />
            <p className="w-[90%] text-center text-black">
              In this world, you are about to step into their shoes and see
              beyond the surface.
            </p>
          </div>
          {/* Left-aligned How to Play */}
          <div className="mt-8">
            <h2 className="w-[90%] mx-auto text-left font-semibold ">
              As you play, you will begin with the story of a doctor.
            </h2>
            <p className="w-[90%] mx-auto mt-5 text-black ">
              1. Answer questions that challenge your initial perceptions.
            </p>
            <p className="w-[90%] mx-auto mt-2 text-black">
              2. Watch as their life unfolds, revealing the hidden challenges
              and emotional burdens they carry.
            </p>
            <p className="w-[90%] mx-auto mt-2 text-black ">
              3. Unlock new occupations as you progress—each one a new life, a
              new story to explore.
            </p>

            <p className="w-[90%] mx-auto mt-2 text-black ">
              4. As you peel back each layer, reflect on how societal
              expectations, assumptions, and personal struggles shape these
              roles.
            </p>
            <p className="w-[90%] mx-auto mt-2 text-blue-500 text-sm font-semibold mb-8">
              **If you need assistance later, use
              the &quot;?&quot; icon in the top corner.
            </p>
          </div>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-black hover:text-white hover:bg-blue-500 px-4 py-2 rounded-lg transition duration-200"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PopUp;
