import React from 'react'

export default function About()  {
    return (
        <div
          name="about"
          className="w-full h-screen text-white bg-gradient-to-b from-gray-800 to-black"
        >
          <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
            <div className="pb-8">
              <p className="inline text-4xl font-bold border-b-4 border-gray-500 ">
                About
              </p>
            </div>
    
            <p className="mt-20 text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
              deserunt illum mollitia officiis qui exercitationem perferendis neque
              quasi a recusandae necessitatibus tempora iusto! Blanditiis error
              iste, totam fugiat recusandae rerum laborum perferendis molestiae
              aperiam asperiores nemo. Magni dolor maxime debitis vitae, eaque hic
              ab mollitia voluptatibus, a nostrum eveniet laborum!
            </p>
    
            <br />
    
            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              pariatur, vel similique sint, nobis aspernatur ut praesentium
              explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae
              quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
              Commodi facilis atque nulla vero voluptatem explicabo. Quibusdam,
              magni quo! Eum cupiditate debitis labore.
            </p>
          </div>
        </div>
      );
    };

