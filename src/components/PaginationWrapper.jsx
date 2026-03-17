import { useState } from "react";
import { Pagination } from "@heroui/react";

export default function PaginationWrapper() {
  const [currentPage, setCurrentPage] = useState(1);

  // Project content component - reusable for all pages
   const ProjectContent3 = () => (
     <>
       <div className="w-full h-full">
         <div className="bg-white w-full h-full">
           <iframe
             src="/athleztech-casestudy.html"
             title="Athleztech Case Study"
             className="block w-full h-full border-0"
           />
         </div>
       </div>
     </>
   );

  // Create a second project content component for page 2
 const ProjectContent2 = () => (
   <>
     <div className="w-full h-full">
       <div className="bg-white w-full h-full">
         <iframe
           src="/gaia-casestudy.html"
           title="Gaia Case Study"
           className="block w-full h-full border-0"
         />
       </div>
     </div>
   </>
 );

  const ProjectContent = () => (
    <>
      <div className="w-full h-full">
        <div className="bg-white w-full h-full">
          <iframe
            src="/brainsight-casestudy.html"
            title="BrainSightAI Case Study"
            className="block w-full h-full border-0"
          />
        </div>
      </div>
    </>
  );

  return (
    <div className="w-full">
      <div className="mt-4 sm:mt-6 md:mt-8 mb-8">
        <div className="flex justify-center text-center px-4 ">
          <div
            className="inline-block"
            style={{
              touchAction: "manipulation",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <Pagination
              initialPage={1}
              total={8}
              page={currentPage}
              onChange={setCurrentPage}
            />
          </div>
        </div>
      </div>

      {/* Sticky Scroll Content */}
      <div className="projectcontent relative flex h-[40rem] justify-center space-x-10 overflow-y-auto rounded-md p-6 bg-gray-50">
        <div
          className={
            currentPage === 1 || currentPage === 3 || currentPage === 2
              ? "relative flex items-start w-full px-0"
              : "relative flex items-start px-4"
          }
        >
          <div
            className={
              currentPage === 1 || currentPage === 3 || currentPage === 2
                ? "w-full flex-1 h-[40rem]"
                : "max-w-3xl"
            }
          >
            {/* Conditionally render content based on current page */}
            {currentPage === 1 && <ProjectContent />}
            {currentPage === 2 && <ProjectContent2 />}
            {currentPage === 3 && <ProjectContent3 />}
          </div>
        </div>

        {/* Sticky Image - different image for each page */}
        {/* <div className="addimage sticky top-20 hidden h-80 w-96 overflow-hidden rounded-xl shadow-lg lg:block">
          {currentPage === 1 && (
            <img
              src="/athleztech.png"
              alt="Athleztech Project"
              className="w-full h-full object-cover"
            />
          )}
          {currentPage === 2 && (
            <img
              src="/postgaia.png"
              alt="Project 2"
              className="w-full h-full object-cover"
            />
          )}
          
        </div> */}
      </div>

      <style jsx>{`
        :global(.projectcontent::-webkit-scrollbar) {
          display: none;
        }

        /* Enhanced touch support for pagination */
        :global([role="navigation"]) {
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }

        /* Increase touch target size for mobile */
        :global([role="navigation"] button),
        :global([role="navigation"] a) {
          min-width: 44px !important;
          min-height: 44px !important;
          touch-action: manipulation;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
          cursor: pointer;
        }

        /* Better visual feedback on touch */
        :global([role="navigation"] button:active),
        :global([role="navigation"] a:active) {
          transform: scale(0.95);
          transition: transform 0.1s ease;
        }

        /* Improve spacing on mobile for easier touch */
        @media (max-width: 640px) {
          :global([role="navigation"] ul) {
            gap: 0.75rem !important;
          }

          :global([role="navigation"] button),
          :global([role="navigation"] a) {
            padding: 0.75rem !important;
            font-size: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}
