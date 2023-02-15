import React, { useState } from "react";

export default function Modal({ modalState, data }) {
  const [modal, setModal] = useState(modalState);
  return (
    <>
      {modal ? (
        <div
          className={"relative z-10 " + (modal ? "block" : "hidden")}
          role="dialog"
          ariaModal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg font-medium leading-6 text-gray-900"
                        id="modal-title"
                      >
                        <p className="text-sm text-yellow-800">
                          <h1 className="text-4xl font-bold mb-4 underline">
                            {data.name}
                          </h1>
                        </p>
                      </h3>
                      <div className="mt-2 text-base 2xl:text-lg leading-tight tracking-tight">
                        {data.agenda}
                      </div>
                      <div className="flex w-full items-start justify-center space-x-4 mt-4 ">
                        {data.chair.map((i) => (
                          <div
                            key={i}
                            className="flex flex-col items-center w-2/5"
                          >
                            <img
                              src={`/assets/images/mun/EB/${i.name}.png`}
                              alt=""
                              srcset=""
                              className=""
                            />
                            <p className="text-base 2xl:text-lg leading-tight tracking-tight capitalize">
                              {i.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setModal(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          className="bg-yellow-400 mt-4 p-4 rounded-lg"
          onClick={() => {
            setModal(true);
          }}
        >
          EB and Agenda
        </button>
      )}
    </>
  );
}
