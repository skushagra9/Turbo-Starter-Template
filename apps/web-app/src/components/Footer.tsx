"use client";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function Footer() {
  const router = useRouter();
  const path = usePathname();

  if (path === "/login" || path === "/register") {
    return null;
  }

  return (
    <footer className="footer p-4 flex justify-between items-center md:w-2/3  md:fixed md:bottom-0  md:z-10">
      <span className="flex justify-center md:justify-start tracking-tighter">
        Made By Kushagra Sharma
      </span>
      <div className="flex items-center justify-end mt-4 md:mt-0">
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => router.push("https://github.com/skushagra9")}
        >
          <GitHubLogoIcon />
        </Button>
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => router.push("https://twitter.com/skushagrasharma")}
        >
          <TwitterLogoIcon />
        </Button>
      </div>
    </footer>
  );
}
