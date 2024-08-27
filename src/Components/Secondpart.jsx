import React from "react";

function Secondpart({ addtask, deletetask, handleCheckboxChange }) {
  return (
    <>
      <div className=" custom-range mx-auto px-5 mt-12 flex flex-col mb-10  gap-3 ">
        {addtask.map((task, index) => {
          return (
            <div
              key={index}
              className={ ` gap-1   between:relative between:h-32 border-2 rounded-md ${task.checked? 'border-green-500':'border-red-700'} between:rounded-xl
               between:flex-col between:justify-center between:items-center text-xl between:text-xs medium:text-xs between:py-4 between:gap-4 w-2/3 h-16 mx-auto px-5
                bg-white flex flex-row justify-between items-center`}
            >
              <p className=" truncate between:truncate w-full between:text-wrap text-wrap flex flex-row items-start my-auto  h-full py-2 ">
                {task.contents}
              </p>
              <div className="space-x-1 flex flex-row">
                <button
                  onClick={() => {
                    deletetask(index);
                  }}
                  className="bg-gray-500 px-2 between:p-4  border rounded-sm text-white"
                >
                  Delete
                </button>
                <input
                  onChange={() => handleCheckboxChange(task.id)}
                  className="between:absolute between:top-2 between:right-3"
                  checked={task.checked}
                  type="checkbox"
                  name=""
                  id=""
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Secondpart;
