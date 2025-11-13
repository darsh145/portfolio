import { useState } from "react";
import { Pagination } from "@heroui/react";

export default function PaginationWrapper() {
  const [currentPage, setCurrentPage] = useState(1);

  // Project content component - reusable for all pages
  const ProjectContent = () => (
    <>
      {/* Project Overview Section */}
      <div className="my-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          AthlezTech - Designing Smarter Cricket Training
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold text-gray-600">Role:</span>
              <span className="text-gray-800 ml-2">
                UX/UI Designer, Brand Designer
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-600">Timeline:</span>
              <span className="text-gray-800 ml-2">3 months</span>
            </div>
            <div>
              <span className="font-semibold text-gray-600">Team:</span>
              <span className="text-gray-800 ml-2">
                Product Engineer, Hardware Designer, UI/UX Designer
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-600">Goal:</span>
              <span className="text-gray-800 ml-2">
                Design a mobile app for cricket performance analytics
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="my-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Understanding the Challenge
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-bold text-lg text-gray-700 mb-3">Context</h3>
            <p className="text-gray-600 leading-relaxed">
              AthlezTech is a sports-tech startup developing a smart wristband
              for athletes. The first product phase focused on cricket batsmen,
              capturing player movements through embedded sensors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-bold text-lg text-gray-700 mb-3">Problem</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Traditional cricket coaching heavily relies on subjective feedback
              from coaches. Many talented players remain unnoticed due to
              favoritism or lack of access to proper analytics tools.
            </p>

            <h4 className="font-semibold text-gray-700 mb-3">
              Our goal was to build an accessible app that:
            </h4>
            <ol type="i" className="list-roman ml-6 space-y-2 text-gray-600">
              <li>Syncs seamlessly with the device</li>
              <li>Visualizes real-time performance stats</li>
              <li>Provides objective insights to improve technique</li>
            </ol>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-bold text-lg text-gray-700 mb-3">
              Constraints
            </h3>
            <ol className="list-decimal ml-6 space-y-2 text-gray-600">
              <li>
                Limited budget (needed to use minimal hardware components
                performing multiple tasks)
              </li>
              <li>
                App needed to be simple enough for grassroots-level players
              </li>
              <li>Integration with wearable sensor data requirements</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Research & Discovery Section */}
      <div className="my-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Research & Discovery
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-bold text-lg text-gray-700 mb-3">
            Market Research
          </h3>
          <p className="text-gray-600 leading-relaxed">
            I explored similar sports analytics apps such as SmartCricket
            BatSense and Zepp Baseball to understand: Common metrics tracked
            (bat speed, impact time, swing angle), Visualization styles and Gaps
            in existing UX and accessibility
          </p>
        </div>
        <br />
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-bold text-lg text-gray-700 mb-3">Constraints</h3>
          <ol className="list-decimal ml-6 space-y-2 text-gray-600">
            <li>
              Limited budget (needed to use minimal hardware components
              performing multiple tasks)
            </li>
            <li>App needed to be simple enough for grassroots-level players</li>
            <li>Integration with wearable sensor data requirements</li>
          </ol>
        </div>
        <br />
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-bold text-lg text-gray-700 mb-3">Key Findings</h3>
          <ol className="list-decimal ml-6 space-y-2 text-gray-600">
            <li>
              Players desired visual representation of their stances and swings,
              not just numbers.
            </li>
            <li>
              Coaches wanted a simple way to compare players and sessions.
            </li>
            <li>Most apps lacked localized and budget-friendly solutions.</li>
          </ol>
        </div>
        <br />
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-bold text-lg text-gray-700 mb-3">
            Feature Prioritization
          </h3>
          <p className="text-large font-bold text-gray-600 mb-4">
            To manage scope, I applied the MoSCoW framework:
          </p>
          <ol className="list-decimal ml-6 space-y-2 text-gray-600">
            <li>
              Must have: Live stats (bat swing speed, angles, session graphs)
            </li>
            <li>
              Should have: Stance visualization (vectorized player animation)
            </li>
            <li>Could have: Personalized improvement suggestions</li>
            <li>Won't have (for now): Social or community features</li>
          </ol>
        </div>
      </div>

      {/* Solution Section */}
      <div className="my-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Designing the Experience
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-bold text-lg text-gray-700 mb-3">
            Key App Flow:
          </h3>
          <ol className="list-decimal ml-6 space-y-2 text-gray-600">
            <li>Mode Selection: Net Practice or Match Mode</li>
            <li>
              Real-Time Tracking: Device syncs with app to capture every shot
            </li>
            <li>
              Detailed Analytics: Each shot's stats, swing speed, throughput &
              follow-through angles, hit/miss ratio
            </li>
            <li>
              Progress Visualization: Graphs comparing current and historical
              sessions
            </li>
            <li>
              Improvement Insights: Highlights repetitive mistakes for
              correction
            </li>
          </ol>
        </div>
        <br />
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-bold text-lg text-gray-700 mb-3">
            Unique Feature
          </h3>
          <p className="text-gray-600 leading-relaxed">
            A vectorized player animation replicates the batsman's real stance,
            bat swing, and angle allowing both player and coach to see posture
            issues in real time.
          </p>
        </div>
        <br />
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-bold text-lg text-gray-700 mb-3">
            Design & Visual Identity
          </h3>
          <p className="text-large font-bold text-gray-600 mb-4">
            Alongside UX design, I contributed to:
          </p>
          <ol className="list-decimal ml-6 space-y-2 text-gray-600">
            <li>Logo & typography for brand identity</li>
            <li>
              Early waitlist website to attract initial users and build
              awareness before launch
            </li>
          </ol>
        </div>
      </div>

      {/* Outcome section */}
      <div className="my-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Outcome & Impact
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-bold text-lg text-gray-700 mb-3">Impact</h3>
          <ol className="list-decimal ml-6 space-y-2 text-gray-600">
            <li>
              The stance visualization feature was the most used and praised by
              testers.
            </li>
            <li>
              Coaches reported easier player feedback and performance tracking.
            </li>
            <li>
              Early prototypes gained attention from local cricket academies,
              validating product demand.
            </li>
          </ol>
        </div>
        <br />
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-bold text-lg text-gray-700 mb-3">Reflection</h3>
          <p className="text-gray-600 leading-relaxed">
            This project helped me merge UX design with hardware interaction,
            pushing me to think beyond screens, about how real-world motion
            translates to digital feedback.
          </p>
        </div>
        <br />
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-bold text-lg text-gray-700 mb-3">
            If given more time, I'd:
          </h3>
          <ol className="list-decimal ml-6 space-y-2 text-gray-600">
            <li>Improve onboarding for first-time device users</li>
            <li>Add a social comparison dashboard for team-based insights</li>
          </ol>
        </div>
      </div>

      <div className="h-20"></div>
    </>
  );

  // Create a second project content component for page 2
  const ProjectContent2 = () => (
    <>
      {/* Project Overview Section */}
      <div className="my-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Designing GAIA - A Personal AI Assistant People Love to Use
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold text-gray-600">Role:</span>
              <span className="text-gray-800 ml-2">
                UI/UX Designer, Open Source Contributor
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-600">Timeline:</span>
              <span className="text-gray-800 ml-2">Ongoing</span>
            </div>
            <div>
              <span className="font-semibold text-gray-600">Team:</span>
              <span className="text-gray-800 ml-2">
                Core GAIA Team (Developers + Designers)
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-600">Goal:</span>
              <span className="text-gray-800 ml-2">
                Redefine GAIA's identity and user experience from a cluttered AI
                concept to a focused, lovable automation ecosystem.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="my-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Understanding the Challenge
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-bold text-lg text-gray-700 mb-3">Context</h3>
            <p className="text-gray-600 leading-relaxed">
              GAIA started as a small AI assistant prototype by my roommate, an
              idea to simplify everyday automation and workflows. As the product
              grew, new features kept being added, expanding GAIA into a massive
              ecosystem of automation tools but this growth came with a problem.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-bold text-lg text-gray-700 mb-3">Problem</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              GAIA was powerful but lost its clarity. The core idea "a personal
              assistant that simplifies life through automation" became buried
              under an overload of features and technical explanations.
            </p>

            <h4 className="font-semibold text-gray-700 mb-3">
              My goal was to redesign GAIA's identity, interface, and
              communication so users immediately understood what it does, how it
              helps, and why it matters.
            </h4>
          </div>
        </div>
      </div>

      {/* Design Section */}
      <div className="my-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Refocusing and Simplifying
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-bold text-lg text-gray-700 mb-3">
            Strategic Realignment
          </h3>
          <p className="text-gray-600 leading-relaxed">
            To bring back focus, we introduced development cycles where each
            cycle having defined phases and goals, ensuring we only built what
            mattered at that stage.
          </p>
          <p className="text-large font-bold text-gray-600 mt-4 mb-2">
            To manage scope, I applied the MoSCoW framework:
          </p>
          <ol className="list-decimal ml-6 space-y-2 text-gray-600">
            <li>Must have: Core automation workflows</li>
            <li>Should have: Integrations with popular tools</li>
            <li>Could have: Visual customizations and user personalization</li>
            <li>Won't have (yet): Experimental AI features</li>
          </ol>
        </div>
        <br />
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-bold text-lg text-gray-700 mb-3">
            Landing Page Redesign
          </h3>
          <p className="text-gray-600 leading-relaxed mb-1">
            The initial landing page tried to explain every single feature with
            visuals. While it was informative, it overwhelmed visitors and
            failed to convert interest into engagement. We reframed the landing
            strategy from: <br />
            "Here's what GAIA does" → to → "Here's how GAIA helps you."
          </p>
          <p className="text-large font-bold text-gray-600 mt-4 mb-2">
            The new design focuses on:
          </p>
          <ol className="list-decimal ml-6 space-y-2 text-gray-600">
            <li>Clear, value-driven messaging</li>
            <li>Minimal feature showcasing</li>
            <li>Emotionally engaging microanimations</li>
            <li>Simple, relatable use cases</li>
            <li>A friendly tone that matches GAIA's personality</li>
          </ol>
        </div>
        <br />
      </div>

      {/* Solution Section */}
      <div className="my-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Crafting the Experience
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-bold text-lg text-gray-700 mb-3">
            UI Components & Microanimations
          </h3>
          <p className="text-gray-600 leading-relaxed mb-1">
            I designed reusable UI components and created microanimations that
            reflected GAIA's responsive and intelligent nature, small visual
            cues that made interactions feel more alive and conversational.
          </p>
        </div>
        <br />
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-bold text-lg text-gray-700 mb-3">
            Mascot Creation
          </h3>
          <p className="text-large font-bold text-gray-600 mt-4 mb-2">
            To humanize the brand, we introduced a GAIA mascot, a friendly face
            representing the assistant. The process involved:
          </p>
          <ol className="list-decimal ml-6 space-y-2 text-gray-600">
            <li>Multiple rough sketches</li>
            <li>Iterations exploring tone (friendly yet techy)</li>
            <li>
              Refining colors, typography, and style to fit GAIA's identity
            </li>
          </ol>
        </div>
        <br />
      </div>

      {/* Outcome section */}
      <div className="my-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Outcome & Learnings
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-bold text-lg text-gray-700 mb-3">Impact</h3>
          <ol className="list-decimal ml-6 space-y-2 text-gray-600">
            <li>
              Simplified the user journey and made GAIA's purpose immediately
              clear.
            </li>
            <li>
              Improved landing page engagement — users now understood GAIA's
              benefits within seconds.
            </li>
            <li>
              Established a consistent design system and component library for
              future scalability.
            </li>
            <li>
              Created a memorable visual identity with mascot and
              microanimations that made GAIA approachable.
            </li>
          </ol>
        </div>
        <br />
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-bold text-lg text-gray-700 mb-3">Reflection</h3>
          <p className="text-large font-bold text-gray-600 mt-4 mb-2">
            This project taught me the importance of:
          </p>
          <ol className="list-decimal ml-6 space-y-2 text-gray-600">
            <li>Saying less but meaning more in UX copy and visuals.</li>
            <li>Designing not just interfaces but product clarity.</li>
            <li>
              Turning complexity into simplicity through communication and
              structure.
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed">
            GAIA reminded me that great UX isn't about showing everything a
            product can do — it's about helping users see what it can do for
            them.
          </p>
        </div>
        <br />
      </div>

      <div className="h-20"></div>
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
        <div className="relative flex items-start px-4">
          <div className="max-w-3xl">
            {/* Conditionally render content based on current page */}
            {currentPage === 1 && <ProjectContent />}
            {currentPage === 2 && <ProjectContent2 />}
          </div>
        </div>

        {/* Sticky Image - different image for each page */}
        <div className="addimage sticky top-20 hidden h-80 w-96 overflow-hidden rounded-xl shadow-lg lg:block">
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
        </div>
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
