export type PedagogicalPath = "montessori" | "waldorf" | "reggio";

export interface LessonSummary {
  id: string;
  title: string;
  path: PedagogicalPath;
  courseId: string;
  ageRange: string;
  duration: string;
  summary: string;
}

export interface Course {
  id: string;
  path: PedagogicalPath;
  title: string;
  tier: "free" | "starter" | "educator";
  ageRange: string;
  description: string;
  thumbnailPrompt: string;
  lessons: LessonSummary[];
}

export const courses: Course[] = [
  {
    id: "montessori-practical-life",
    path: "montessori",
    title: "Montessori Practical Life Foundations",
    tier: "starter",
    ageRange: "3-6",
    description: "Sensorial routines that build independence through purposeful movement and care of the environment.",
    thumbnailPrompt: "Soft watercolor of a child arranging wooden trays with natural materials in warm light",
    lessons: [
      {
        id: "montessori-practical-life-01",
        path: "montessori",
        courseId: "montessori-practical-life",
        title: "Pouring with Grace",
        ageRange: "3-4",
        duration: "15 minutes",
        summary: "Introduce controlled pouring using ceramic pitchers, emphasising hand coordination and focus."
      },
      {
        id: "montessori-practical-life-02",
        path: "montessori",
        courseId: "montessori-practical-life",
        title: "Button Frame Concentration",
        ageRange: "4-5",
        duration: "20 minutes",
        summary: "Guide the child through buttoning fabric frames to refine fine motor control and sequencing."
      }
    ]
  },
  {
    id: "waldorf-story-circle",
    path: "waldorf",
    title: "Waldorf Storytelling Circle",
    tier: "starter",
    ageRange: "4-7",
    description: "Mythic tales told through song, movement, and watercolor imagery to cultivate imagination.",
    thumbnailPrompt: "Gentle crayon drawing of a storyteller beneath an oak with children gathered around",
    lessons: [
      {
        id: "waldorf-story-circle-01",
        path: "waldorf",
        courseId: "waldorf-story-circle",
        title: "Sunrise Story Spiral",
        ageRange: "4-6",
        duration: "25 minutes",
        summary: "Share a seasonal tale with candlelight and lyre accompaniment, inviting children into the rhythm."
      },
      {
        id: "waldorf-story-circle-02",
        path: "waldorf",
        courseId: "waldorf-story-circle",
        title: "Wet-on-Wet Watercolor Sky",
        ageRange: "5-7",
        duration: "30 minutes",
        summary: "Blend sunrise hues on wet paper while retelling the story, exploring form through color."
      }
    ]
  },
  {
    id: "reggio-light-studio",
    path: "reggio",
    title: "Reggio Emilia Light Studio",
    tier: "educator",
    ageRange: "4-8",
    description: "Collaborative provocations using light, shadow, and documentation to encourage inquiry.",
    thumbnailPrompt: "Children exploring a light table with translucent shapes in a studio environment",
    lessons: [
      {
        id: "reggio-light-studio-01",
        path: "reggio",
        courseId: "reggio-light-studio",
        title: "Shadow Story Mapping",
        ageRange: "4-6",
        duration: "35 minutes",
        summary: "Invite children to narrate a story using projected silhouettes and capture their dialogue."
      },
      {
        id: "reggio-light-studio-02",
        path: "reggio",
        courseId: "reggio-light-studio",
        title: "Light Table Inquiry",
        ageRange: "5-8",
        duration: "40 minutes",
        summary: "Offer translucent materials for pattern exploration, recording hypotheses and reflections."
      }
    ]
  }
];

export const lessonsIndex: Record<string, LessonSummary> = Object.fromEntries(
  courses.flatMap((course) => course.lessons.map((lesson) => [lesson.id, lesson]))
);
