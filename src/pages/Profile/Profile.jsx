import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function Profile() {
  const { user, updateProfile } = useAuth();
  const [form, setForm] = useState({
    name: user?.name || "",
    username: user?.username || "",
    bio: user?.bio || "",
    github: user?.github || "",
    linkedin: user?.linkedin || "",
    website: user?.website || ""
  });
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    await updateProfile(form);
    setSaving(false);
  };

  const fields = [
    { name: "name", label: "Full Name" },
    { name: "username", label: "Username" },
    { name: "bio", label: "Bio", textarea: true },
    { name: "github", label: "GitHub" },
    { name: "linkedin", label: "LinkedIn" },
    { name: "website", label: "Website" }
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10">Profile</h1>

      <div className="flex items-center gap-6 mb-10">
        <div className="w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center text-3xl font-bold text-cyan-400">
          {user?.name?.charAt(0) || "U"}
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{user?.name}</h2>
          <p className="text-gray-400">{user?.email}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {fields.map((f) => (
          <div key={f.name}>
            <label className="block text-sm text-gray-400 mb-2">{f.label}</label>
            {f.textarea ? (
              <textarea
                name={f.name}
                value={form[f.name]}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 outline-none"
              />
            ) : (
              <input
                type="text"
                name={f.name}
                value={form[f.name]}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 outline-none"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={saving}
          className="px-8 py-3 rounded-xl bg-cyan-500 font-semibold hover:bg-cyan-600 disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}

export default Profile;
