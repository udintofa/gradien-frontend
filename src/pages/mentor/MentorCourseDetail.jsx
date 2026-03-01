import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMaterialsByCourseId, createMaterials } from "../../apis/materials";
import { getTryOutsByCourseId, createTryouts } from "../../apis/tryouts";
import { useNavigate } from "react-router-dom";

import { ArrowLeft } from "lucide-react";

export default function MentorCourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [materials, setMaterials] = useState([]);
  const [tryouts, setTryouts] = useState([]);
  const [title, setTitle] = useState("");

  const loadData = async () => {
    const mat = await getMaterialsByCourseId(id);
    const tr = await getTryOutsByCourseId(id);
    setMaterials(mat);
    setTryouts(tr);
  };

  useEffect(() => {
    loadData();
  }, [id]);

  return (
    <div style={{ padding: 40 }}>
      <h1>Course Detail</h1>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-indigo-600 font-medium hover:underline"
      >
        <ArrowLeft size={18} />
        Kembali
      </button>

      {/* ===== MATERIALS ===== */}
      <h2>Materials</h2>

      <input
        placeholder="Material title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        onClick={async () => {
          await createMaterials({ title, courseId: id });
          setTitle("");
          loadData();
        }}
      >
        Add Material
      </button>

      {materials.map((m) => (
        <div key={m.id}>{m.title}</div>
      ))}

      <hr />

      {/* ===== TRYOUTS ===== */}
      <h2>Tryouts</h2>

      <input
        placeholder="Tryout title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        onClick={async () => {
          await createTryouts({ title, courseId: id });
          setTitle("");
          loadData();
        }}
      >
        Add Tryout
      </button>

      {tryouts.map((t) => (
        <div key={t.id}>{t.title}</div>
      ))}
    </div>
  );
}
