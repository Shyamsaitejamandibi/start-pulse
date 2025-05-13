"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { OrganizationProfile, useOrganization } from "@clerk/nextjs";
import Link from "next/link";

const SettingsPage = () => {
  const { organization } = useOrganization();

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Configure your status page settings and appearance
        </p>
      </header>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Public Status Page</CardTitle>
            <CardDescription>
              View and manage your public-facing status page
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div>
                <h3 className="font-medium">View Public Page</h3>
                <p className="text-sm text-muted-foreground">
                  See what your customers will see
                </p>
              </div>
              <Button asChild variant="default" className="gap-2">
                <Link href={`${organization?.slug}`} target="_blank">
                  <span>Open Public Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-external-link"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" x2="21" y1="14" y2="3" />
                  </svg>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Status Colors</CardTitle>
            <CardDescription>
              Customize the colors used to represent different status states
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="color-operational"
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <span className="w-4 h-4 inline-block bg-status-operational rounded-full ring-1 ring-border"></span>
                    Operational
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="color-operational"
                      type="color"
                      defaultValue="#22c55e"
                      className="w-12 h-9 p-1"
                    />
                    <Input
                      type="text"
                      defaultValue="#22c55e"
                      className="flex-1"
                      placeholder="Hex color code"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="color-degraded"
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <span className="w-4 h-4 inline-block bg-status-degraded rounded-full ring-1 ring-border"></span>
                    Degraded
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="color-degraded"
                      type="color"
                      defaultValue="#f59e0b"
                      className="w-12 h-9 p-1"
                    />
                    <Input
                      type="text"
                      defaultValue="#f59e0b"
                      className="flex-1"
                      placeholder="Hex color code"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="color-partial-outage"
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <span className="w-4 h-4 inline-block bg-status-partial-outage rounded-full ring-1 ring-border"></span>
                    Partial Outage
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="color-partial-outage"
                      type="color"
                      defaultValue="#f97316"
                      className="w-12 h-9 p-1"
                    />
                    <Input
                      type="text"
                      defaultValue="#f97316"
                      className="flex-1"
                      placeholder="Hex color code"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="color-major-outage"
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <span className="w-4 h-4 inline-block bg-status-major-outage rounded-full ring-1 ring-border"></span>
                    Major Outage
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="color-major-outage"
                      type="color"
                      defaultValue="#ef4444"
                      className="w-12 h-9 p-1"
                    />
                    <Input
                      type="text"
                      defaultValue="#ef4444"
                      className="flex-1"
                      placeholder="Hex color code"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="color-maintenance"
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <span className="w-4 h-4 inline-block bg-status-maintenance rounded-full ring-1 ring-border"></span>
                    Maintenance
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="color-maintenance"
                      type="color"
                      defaultValue="#3b82f6"
                      className="w-12 h-9 p-1"
                    />
                    <Input
                      type="text"
                      defaultValue="#3b82f6"
                      className="flex-1"
                      placeholder="Hex color code"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button type="submit" className="gap-2 pt-6">
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Organization Profile</CardTitle>
            <CardDescription>
              Manage your organization&apos;s profile and settings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <OrganizationProfile />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;
