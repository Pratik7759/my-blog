import UserCardMain from "@/components/userCard/UserCardMain";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-[#8DD5E4] via-[#86A8E7] to-[#818CDB]">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 mb-1 pt-5 cursor-pointer flex justify-center items-center animate-pulse hover:text-black">
        Welcome to My Blog
      </h1>
      <UserCardMain />
    </main>
  );
}
