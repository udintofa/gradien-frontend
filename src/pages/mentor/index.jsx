import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCourses, createCourse, deleteCourseById } from "../../apis/courses";

export default function MentorCourses() {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const data = await getCourses();
    setCourses(data);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Courses</h1>

      <input
        placeholder="Course title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        onClick={async () => {
          await createCourse({ title });
          setTitle("");
          loadCourses();
        }}
      >
        Add Course
      </button>

      <hr />

      {courses.map((course) => (
        <div
          key={course.id}
          style={{
            border: "1px solid #ddd",
            padding: 10,
            marginBottom: 10,
            cursor: "pointer",
          }}
          onClick={() => navigate(`/mentor/courses/${course.id}`)}
        >
          <b>{course.title}</b>

          <button
            style={{ marginLeft: 10 }}
            onClick={async (e) => {
              e.stopPropagation();
              await deleteCourseById(course.id);
              loadCourses();
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
