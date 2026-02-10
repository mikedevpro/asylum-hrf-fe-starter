import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

const ProfileInner = () => {
  const { user } = useAuth0();

  return (
    <div className="max-w-3xl mx-auto p-6 text-left">
      <h1 className="text-3xl font-semibold mb-6">Profile</h1>

      <div className="rounded-xl border p-4 bg-white">
        <div className="flex items-center gap-4">
          {user?.picture && (
            <img src={user.picture} alt="Profile" className="h-16 w-16 rounded-full" />
          )}
          <div>
            <p className="font-medium">{user?.name}</p>
            <p className="text-sm text-slate-600">{user?.email}</p>
          </div>
        </div>

        <div className="mt-4 text-sm text-slate-700">
          <p><span className="font-medium">Nickname:</span> {user?.nickname}</p>
          <p><span className="font-medium">Updated:</span> {user?.updated_at}</p>
        </div>
      </div>
    </div>
  );
};

export default withAuthenticationRequired(ProfileInner, {
  onRedirecting: () => <div className="p-6">Redirecting to login…</div>,
});
// The withAuthenticationRequired HOC ensures that only authenticated users can access the Profile page.
