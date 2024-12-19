"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

export default function SettingsPage() {
  const [storeName, setStoreName] = useState("My General Store");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const { toast } = useToast();

  const handleSaveSettings = () => {
    // Here you would typically save these settings to your backend
    toast({
      title: "Settings Saved",
      description: "Your settings have been successfully updated.",
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Store Name</label>
            <Input
              type="text"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Email Notifications</span>
            <Switch
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Dark Mode</span>
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          </div>
          <Button onClick={handleSaveSettings} className="w-full">
            Save Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
