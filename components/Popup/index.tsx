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
            <p className="w-[90%] text-center text-black text-sm">
              In this interactive experience, you will explore the hidden layers
              of different professions, uncovering the &apos;truths&apos; behind
              the mask they wear. Each role has multiple layers to reveal—click
              on the image to discover what lies beneath the surface.
            </p>
          </div>
          {/* Left-aligned How to Play */}
          <div className="mt-6">
            <h2 className="w-[90%] mx-auto text-left text-sm font-semibold ">
              How to Play:
            </h2>
            <p className="w-[90%] mx-auto mt-2 text-black text-sm">
              Select a Profession: Choose one of the profession cards to begin
              (Doctor, Lawyer, Engineer, or Investment Banker).
            </p>
            <p className="w-[90%] mx-auto mt-2 text-black text-sm">
              Uncover Layers: Click on the image to reveal each layer of the
              character&apos;s mask, moving from the surface image to deeper,
              more complex &apos;realities&apos;.
            </p>
            <p className="w-[90%] mx-auto mt-2 text-black text-sm">
              Explore Hidden Insights: On Layer 3, look for spirals scattered
              across the scene. Click on these spirals to reveal hidden,
              stereotypical interpretations of each profession. Clicking again
              will hide the insight.
            </p>

            <p className="w-[90%] mx-auto mt-2 text-black text-sm">
              Reflect: As you peel back each layer, reflect on how societal
              expectations, assumptions, and personal struggles shape these
              roles.
            </p>
            <p className="w-[90%] mx-auto mt-2 text-blue-500 text-xs font-semibold mb-8">
              **This guide appears only once. If you need assistance later, use
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
