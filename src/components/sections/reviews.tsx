import React from "react";

interface Review {
  name: string;
  company?: string;
  project: string;
  rating: number;
  text?: string;
  tags?: string[];
}

const reviews: Review[] = [
  {
    name: "Hany",
    company: "Asala Living",
    project: "AI Reels Creation",
    rating: 5,
    text: "Taha is very professional and know how to deal with his tools, he is easy to deal and he provided his deliverables exactly on time.",
    tags: ["Reliable", "Collaborative", "Clear Communicator", "Detail Oriented", "Accountable for Outcomes", "Professional"],
  },
  {
    name: "Schwan Park",
    project: "AI Prompt Engineer for Creating Consistent Cartoon Character",
    rating: 5,
    text: "Taha was an excellent person to work with. Very clear and prompt.",
    tags: ["Reliable", "Collaborative", "Clear Communicator"],
  },
  {
    name: "Patty Green",
    company: "Explorer Software",
    project: "AI Image and Video Asset Creation for Caveman Spokesperson",
    rating: 5,
    text: "Taha far exceeded my expectations on this project. He was able to execute my vision, and then some. I look forward to working with him on our next project.",
    tags: ["Committed to Quality", "Collaborative"],
  },
  {
    name: "Yuda",
    company: "Yudart",
    project: "AI Photo + Video Specialist",
    rating: 5,
  },
  {
    name: "Arthur Modell",
    company: "WH Property",
    project: "Virtual Staging for Interior Images",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-white/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="w-full py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container px-4 mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500">
            Client Reviews
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            What our clients say — verified reviews from{" "}
            <a
              href="https://www.upwork.com/freelancers/tahakhan91"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
            >
              Upwork
            </a>
          </p>

          {/* Upwork badges */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-green-400 font-semibold text-sm">100% Job Success</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-yellow-400 font-semibold text-sm">Top Rated</span>
            </div>
          </div>
        </div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={`${review.name}-${review.project}`}
              className="group relative bg-black/20 rounded-2xl p-6 hover:bg-black/30 transition-all duration-300 border border-white/10 backdrop-blur-sm flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <StarRating rating={review.rating} />
                <span className="text-yellow-400 text-sm font-semibold">{review.rating}.0</span>
              </div>

              {/* Review text */}
              {review.text && (
                <blockquote className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
              )}

              {/* Tags */}
              {review.tags && review.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {review.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Divider */}
              <div className="border-t border-white/10 pt-4 mt-auto">
                <p className="font-semibold text-white text-sm">{review.name}</p>
                {review.company && (
                  <p className="text-purple-400 text-xs mt-0.5">{review.company}</p>
                )}
                <p className="text-muted-foreground text-xs mt-1 italic">{review.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
