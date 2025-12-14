import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg text-center">
        Explore my projects and skills in web development.
      </p>
      <div className="mt-8">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
    </main> 
  );
}
