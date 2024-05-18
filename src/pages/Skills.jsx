import React from "react";

function Skills() {
  return (
    <div
      id="skills"
      className="bg-gray-900 p-5 m-6 mt-8 flex flex-col justify-center rounded-md text-white"
    >
      <div className="mx-auto text-3xl font-font-Arial">Skills</div>
      <div className="flex gap-3 mx-auto my-4 text-sm">
        <div className="border-2 border-blue-500 h-[40px] p-2 rounded-2xl">
          <img
            className="h-full mx-2 inline"
            src="data:image/png;base64,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"
            alt="js"
          />
          JavaScript
        </div>
        <div className="border-2 border-blue-500 h-[40px] p-2 rounded-2xl">
          <img
            className="h-full mx-2 inline"
            src="data:image/png;base64,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"
            alt="js"
          />
          JavaScript
        </div>
        <div className="border-2 border-blue-500 h-[40px] p-2 rounded-2xl">
          <img
            className="h-full mx-2 inline"
            src="data:image/png;base64,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"
            alt="js"
          />
          JavaScript
        </div>
      </div>
    </div>
  );
}

export default Skills;