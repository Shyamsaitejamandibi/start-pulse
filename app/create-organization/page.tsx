import { CreateOrganization } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function CreateOrganizationPage() {
  const { userId, orgId } = await auth();

  // If user is not signed in, redirect to sign in
  if (!userId) {
    redirect("/sign-in");
  }

  // If user already has an organization, redirect to dashboard
  if (orgId) {
    redirect("/organization/dashboard");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Create Your Organization
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-4">
            Set up your organization to start monitoring your services and
            managing incidents.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <CreateOrganization
            skipInvitationScreen={true}
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "shadow-none",
                formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
              },
            }}
          />
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Need help? Check out our{" "}
          <a href="#" className="text-blue-600 hover:text-blue-500">
            documentation
          </a>{" "}
          or{" "}
          <a href="#" className="text-blue-600 hover:text-blue-500">
            contact support
          </a>
        </p>
      </div>
    </div>
  );
}
