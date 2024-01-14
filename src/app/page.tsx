"use client";

import Image from 'next/image';
import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { FaDiscord, FaGithub, FaMagnifyingGlass } from 'react-icons/fa6';
import { playerAvatar } from '~/lib/util';
import { useWindowDimensions } from '~/lib/windowDimensions';

export default function Home() {
  const { width } = useWindowDimensions();

  let users: UserCardProps[] = [
    {
      username: '_Duro_',
      bio: '...',
    },
    {
      username: 'NotCookies',
      bio: '...',
    },
    {
      username: 'SpeedSilver',
      bio: '...',
    },
    {
      username: 'brantg',
      bio: '...',
    },
    {
      username: 'Feinberg',
      bio: '...',
    },
    {
      username: 'Dream',
      bio: '...',
    },
    {
      username: 'Wickes',
      bio: '...',
    },
    {
      username: 'Invictable',
      bio: '...',
    },
    {
      username: 'Technoblade',
      bio: '...'
    }
  ];

  if (width && width < 640) users = users.slice(0, 8);

  return (
    <main className="flex flex-col items-center py-8">
      <div className="mb-4 text-center">
        <h2 className="text-4xl font-semibold">Search Player</h2>
      </div>
      <div className="grid grid-cols-2 p-4 gap-4 sm:grid-cols-3 sm:w-3/4">
        <div className="col-span-2 sm:col-span-3 bg-zinc-800 rounded-xl p-4">
          <SearchCard />
        </div>
        <div className="col-span-2 sm:col-span-3">
          <div className="grid grid-cols-2 gap-4">
            <Button className="bg-zinc-800 hover:bg-zinc-700 p-6 sm:text-base">
              <FaDiscord className="w-6 h-6 mr-2" />
              Join our Discord
            </Button>
            <Button className="bg-zinc-800 hover:bg-zinc-700 p-6 sm:text-base">
              <FaGithub className="w-6 h-6 mr-2" />
              View our GitHub
            </Button>
          </div>
        </div>

        <div className="w-full col-span-2 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:col-span-3">
          {users.map((user) => <UserCard key={user.username} {...user} />)}
        </div>
      </div>
    </main>
  );
}

function SearchCard() {
  return (
    <form className="flex flex-col space-y-4">
      <Input
        className="bg-zinc-700 border-none text-white"
        id="minecraft-username"
        placeholder="Enter username"
      />
      <Button className="bg-sky-600 hover:bg-sky-700">
        <FaMagnifyingGlass className="w-4 h-4 mr-2" />
        Search
      </Button>
    </form>
  );
}

interface UserCardProps {
  username: string;
  bio: string;
  imageUrl?: string;
}

function UserCard({ username, bio, imageUrl }: UserCardProps) {
  const avatarUrl = imageUrl ?? playerAvatar(username);

  return (
    <a href={`/profile/${username}`}>
      <Card className="bg-zinc-800 flex items-center rounded-lg border-none hover:bg-zinc-700">
        <Image
          className="w-10 h-10 rounded-md ml-4"
          height="50"
          src={avatarUrl}
          style={{ objectFit: "cover" }}
          alt={`${username}'s Avatar`}
          width="50"
          unoptimized={true}
        />
        <CardContent className="mr-4 p-3">
          <h3 className="text-white font-bold text-sm md:text-lg">{username}</h3>
          <p className="text-zinc-400 text:xs md:text-sm">{bio}</p>
        </CardContent>
      </Card>
    </a>
  );
}
