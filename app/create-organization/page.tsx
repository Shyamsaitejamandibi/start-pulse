import { CreateOrganization } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold">Create a new organization</h1>
      <p className="mt-4 text-lg">
        Fill out the form below to create a new organization.
      </p>
      <p className="mt-4 text-lg">
        You can also create an organization from the dashboard.
      </p>
      <CreateOrganization skipInvitationScreen={true} />
    </div>
  );
}
