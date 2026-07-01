import { useState } from "react";

function AuthForm({ fields, onSubmit, buttonText, loading, extra }) {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {fields.map((field) => (
        <div key={field.name}>
          <label className="block text-sm text-gray-400 mb-1">{field.label}</label>
          <input
            type={field.type || "text"}
            name={field.name}
            placeholder={field.placeholder}
            onChange={handleChange}
            required={field.required !== false}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 outline-none"
          />
        </div>
      ))}

      {extra}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-xl bg-cyan-500 font-semibold hover:bg-cyan-600 disabled:opacity-50"
      >
        {loading ? "Processing..." : buttonText}
      </button>
    </form>
  );
}

export default AuthForm;
