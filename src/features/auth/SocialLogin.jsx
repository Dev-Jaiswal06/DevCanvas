function SocialLogin() {
  const handleGoogle = () => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    if (!clientId) {
      window.location.href = `${window.location.origin}/api/auth/google`;
      return;
    }
    const redirectUri = `${window.location.origin}/api/auth/google/callback`;
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=email%20profile`;
  };

  const handleGitHub = () => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    if (!clientId) {
      window.location.href = `${window.location.origin}/api/auth/github`;
      return;
    }
    const redirectUri = `${window.location.origin}/api/auth/github/callback`;
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user:email`;
  };

  return (
    <div className="mt-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-px flex-1 bg-white/10" />
        <span className="text-sm text-gray-500">OR</span>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <div className="flex gap-3">
        <button onClick={handleGoogle} className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">
          Google
        </button>
        <button onClick={handleGitHub} className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">
          GitHub
        </button>
      </div>
    </div>
  );
}

export default SocialLogin;
