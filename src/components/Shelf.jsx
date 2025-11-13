import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@heroui/react";

export default function Shelf({ title, books = [] }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeBook, setActiveBook] = React.useState(null);

  const openModal = (book) => {
    setActiveBook(book);
    onOpen();
  };

  return (
    <section className="shelf">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-3 sm:mb-4">
        {title}
      </h3>

      <div className="flex gap-3 sm:gap-4 md:gap-6 items-end pb-6 relative overflow-x-auto scrollbar-hide">
        {/* Shelf wood bar */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-0 w-full h-6 sm:h-7 md:h-8 bg-[#f3e7d9] rounded z-0"></div>

        {books.map((book, i) => (
          <img
            key={i}
            src={book.img}
            alt={book.title}
            className="relative z-10 h-28 sm:h-36 md:h-44 lg:h-52 cursor-none hover:-translate-y-2 transform transition-transform duration-200 rounded-sm flex-shrink-0"
            onClick={() => openModal(book)}
            loading="lazy"
          />
        ))}
      </div>

      {/* HeroUI Modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        scrollBehavior="inside"
        classNames={{
          base: "bg-white max-h-[100vh]",
          backdrop: "bg-black/70 backdrop-blur-sm",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 sticky top-0 bg-white z-10 px-4 sm:px-6">
                <div className="flex items-center justify-between w-full gap-2">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 line-clamp-2">
                    {activeBook?.title ||
                      "Early Design Career: chaos, excitement, learning"}
                  </h2>
                  <Button
                    isIconOnly
                    variant="light"
                    onPress={onClose}
                    className="cursor-none flex-shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="#000000"
                      fill="none"
                    >
                      <path
                        d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </Button>
                </div>
              </ModalHeader>

              <ModalBody className="py-4 sm:py-6 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                  {/* Blog Content */}
                  <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                    <div className="text-gray-700 whitespace-pre-line leading-relaxed text-sm sm:text-base lg:text-lg">
                      <p>
                        Like any other undergrad, I was desperate for an
                        internship jumping from one application to another.
                        Finally, I got a UI/UX Design Intern role through my
                        college. It lasted just one day.
                      </p>{" "}
                      <br />
                      <p>
                        A day before joining, I got a call from my friend who
                        referred me to a startup. That same night, I hopped on a
                        call with the founder - the person behind the idea. He
                        had great conversational and convincing skills, and by
                        the end of the call, he had convinced me to join. I
                        replaced my 9–5 internship with a fully remote startup
                        position in just one day.
                      </p>{" "}
                      <br />
                      <p>
                        The joy of working from my comfort place felt amazing,
                        but this amateur was new to startup culture.
                      </p>{" "}
                      <br />{" "}
                      <p>
                        Unpopular opinion: Being a founding member at a startup
                        can either be the best thing that ever happens to you or
                        the best lifelong lesson.
                      </p>{" "}
                      <br />{" "}
                      <p>
                        Filled with enthusiasm, I started researching the
                        product, gathering information, and designing the
                        process. I completed the entire UX study and was ready
                        to deliver. The response I got was shocking:{" "}
                      </p>
                      <br />
                      <p>"Who told you to do all this?"</p> <br />
                      <p>
                        I was stunned. Wasn't I the UI/UX designer supposed to
                        research and design the whole product (the app)? That's
                        when I realized he didn't actually know what designers
                        do. His only expectation was that I design the UI. But
                        it didn't bother me much - not yet.
                      </p>{" "}
                      <br />{" "}
                      <p>
                        Later, the app design was delayed, and I was asked to
                        help with brand identity - logo design, typography,
                        tagline, and so on. I worked from morning to evening,
                        filling pages with sketches. Every single one of them
                        got rejected. Maybe I wasn't creative enough, or maybe
                        not aligned with what he had in mind.
                      </p>{" "}
                      <br />
                      <p>
                        Eventually, another designer's logo was finalized. I was
                        then asked to choose a color palette that fit the brand.
                        I picked colors inspired by sports tech which were
                        relevant to our product but again, every combination was
                        rejected. Even though the rest of the team liked my
                        choices, the founder wasn't satisfied. Anyway, maybe I
                        still wasn't that creative.
                      </p>{" "}
                      <br />{" "}
                      <p>
                        Another day, another call. I was asked to switch again
                        this time, to design an early subscription website. I
                        ideated, designed layouts, and shared drafts. But as
                        usual, the ideas kept getting rejected. The founder
                        would find new inspiration every day and wanted the
                        design to change accordingly. We never landed on the
                        same ground. I was basically copying inspo after inspo.
                        Eventually, the idea for the website was dropped.
                      </p>{" "}
                      <br />{" "}
                      <p>
                        Finally, I got the chance to design the app the thing I
                        was most excited about. I started from scratch:
                        onboarding screens, connection flows, and then the main
                        app screens with all MVP features. The challenge was the
                        color theme - lime, white, and emerald green. Designing
                        with light colors that were so close on the color
                        spectrum wasn't easy.
                      </p>{" "}
                      <br />
                      <p>
                        Still, one day, I managed to design 10–12 screens in a
                        single flow and for the first time, I got good feedback.
                        It felt like a miracle.
                      </p>{" "}
                      <br />{" "}
                      <p>
                        But from that day onward, I started feeling like a
                        retired employee. The plan became unclear, and the
                        software and embedded teams kept clashing due to
                        inexperience and frequent team changes. The biggest
                        mistake the founder made was hiring undergrads desperate
                        for internships without checking their skill levels. It
                        eventually led to a complete halt in progress.
                      </p>{" "}
                      <br />
                      <p className="text-base sm:text-lg font-bold text-gray-800 mb-2">
                        Key Lessons
                      </p>
                      <ol className="list-decimal ml-6 space-y-2 text-gray-600">
                        <li>Know where you're investing your time.</li>
                        <li>Understand the culture you're working in.</li>
                        <li>Most importantly, know the worth of your work.</li>
                        <li>
                          Don't be discouraged by feedback from people who don't
                          understand your craft.
                        </li>
                      </ol>
                      <br />{" "}
                      <p>
                        I once read that you should know whose feedback truly
                        matters because not everyone is worth getting feedback
                        from.
                      </p>
                    </div>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
}
