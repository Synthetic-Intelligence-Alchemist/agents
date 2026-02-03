import { courses, lessonsIndex, type Course } from "@/data/curriculum";

interface PathDetail {
  id: string;
  philosophy: string;
  title: string;
  description: string;
  lessons: Course["lessons"];
}

const pathMap: Record<string, PathDetail> = {
  montessori: {
    id: "montessori",
    philosophy: "Montessori",
    title: "Montessori Golden Path",
    description:
      "Follow sensorial, practical life, and cosmic education sequences that cultivate independence and reverence.",
    lessons: courses.filter((course) => course.path === "montessori").flatMap((course) => course.lessons)
  },
  waldorf: {
    id: "waldorf",
    philosophy: "Waldorf",
    title: "Waldorf Story Grove",
    description:
      "Seasonal stories, artistic expressions, and rhythms that nourish imagination and spiritual connection.",
    lessons: courses.filter((course) => course.path === "waldorf").flatMap((course) => course.lessons)
  },
  reggio: {
    id: "reggio",
    philosophy: "Reggio Emilia",
    title: "Reggio Emilia Atelier",
    description: "Project-based provocations celebrating the hundred languages of children through collaborative inquiry.",
    lessons: courses.filter((course) => course.path === "reggio").flatMap((course) => course.lessons)
  }
};

export function getPathDetail(path: string): PathDetail | undefined {
  return pathMap[path];
}

export function getLessonById(id: string) {
  return lessonsIndex[id];
}

export function getAllCourses() {
  return courses;
}
