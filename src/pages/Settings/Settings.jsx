import { useState } from "react";
import toast from "react-hot-toast";

function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    quiz: true,
    certificates: true,
    announcements: false
  });

  const handleToggle = (key) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
    toast.success("Settings updated");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10">Settings</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Notification Preferences</h2>
        <div className="space-y-4">
          {Object.entries(notifications).map(([key, val]) => (
            <div key={key} className="flex items-center justify-between p-4 rounded-xl bg-white/5">
              <span className="capitalize">{key}</span>
              <button
                onClick={() => handleToggle(key)}
                className={`w-12 h-6 rounded-full transition ${val ? "bg-cyan-500" : "bg-white/20"}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white transition ml-1 ${val ? "translate-x-6" : ""}`} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-red-400">Danger Zone</h2>
        <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/30">
          <h3 className="font-semibold text-red-400">Delete Account</h3>
          <p className="text-sm text-gray-400 mt-2">This action is irreversible.</p>
          <button className="mt-4 px-6 py-2 rounded-xl bg-red-500 text-white text-sm">
            Delete My Account
          </button>
        </div>
      </section>
    </div>
  );
}

export default Settings;
