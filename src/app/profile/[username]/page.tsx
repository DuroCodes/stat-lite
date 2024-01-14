
import Image from 'next/image';
import { playerAvatar } from '~/lib/util';
import { Card, CardContent } from '~/components/ui/card';
import { type RoyaleStats } from '~/lib/hopliteApi';
import { FaGamepad, FaTrophy, FaClock, FaBookOpen, FaCircleXmark } from 'react-icons/fa6';
import { LuSword, LuSwords } from 'react-icons/lu';

const timestamp = (str: string) => {
  const [days, hours, minutes, seconds] = str.split(':').map(Number);

  if (!minutes) return `${seconds}s`;
  if (!hours) return `${minutes}m`;
  if (!days) return `${hours}h ${minutes}m`;

  return `${days}d ${hours}h ${minutes}m`;
};

export default async function UserProfile({ params: { username } }: { params: { username: string; }; }) {
  const data = await (await fetch(`https://hopliteapi.isabel.gg/api/stats/royale/${username}`)).json() as RoyaleStats;

  return (
    <main className="flex flex-col items-center py-8">
      <div className="mb-4 text-center flex flex-col justify-center items-center">
        <Image
          className="h-full w-auto rounded-md mb-4"
          height="0"
          width="0"
          src={playerAvatar(username)}
          style={{ imageRendering: "pixelated" }}
          alt={`${username}'s Avatar`}
          unoptimized={true}
        />
        <h2 className="text-4xl font-semibold">{data.profile.username}</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 pb-4 sm:justify-normal sm:w-3/4 sm:grid-cols-2 md:w-11/12">
        <TopRowCard data={data} />
        <Card className="bg-zinc-800 items-center rounded-lg border-none text-white">
          <CardContent className="grid grid-cols-1 gap-x-12 gap-y-0.5 p-6 sm:grid-cols-2">
            <h3 className="font-bold text-center sm:col-span-2 sm:text-lg sm:text-left">Warrior</h3>
            <ClassStats data={data} kit="warrior" />
          </CardContent>
        </Card>
        <Card className="bg-zinc-800 items-center rounded-lg border-none text-white">
          <CardContent className="grid grid-cols-1 gap-x-12 gap-y-0.5 p-6 sm:grid-cols-2">
            <h3 className="font-bold text-center sm:col-span-2 sm:text-lg sm:text-left">Miner</h3>
            <ClassStats data={data} kit="miner" />
          </CardContent>
        </Card>
        <Card className="bg-zinc-800 items-center rounded-lg border-none text-white">
          <CardContent className="grid grid-cols-1 gap-x-12 gap-y-0.5 p-6 sm:grid-cols-2">
            <h3 className="font-bold text-center sm:col-span-2 sm:text-lg sm:text-left">Trapper</h3>
            <ClassStats data={data} kit="trapper" />
          </CardContent>
        </Card>
        <Card className="bg-zinc-800 items-center rounded-lg border-none text-white">
          <CardContent className="grid grid-cols-1 gap-x-12 gap-y-0.5 p-6 sm:grid-cols-2">
            <h3 className="font-bold text-center sm:col-span-2 sm:text-lg sm:text-left">Archer</h3>
            <ClassStats data={data} kit="archer" />
          </CardContent>
        </Card>
        <Card className="bg-zinc-800 items-center rounded-lg border-none text-white">
          <CardContent className="grid grid-cols-1 gap-x-12 gap-y-0.5 p-6 sm:grid-cols-2">
            <h3 className="font-bold text-center sm:col-span-2 sm:text-lg sm:text-left">Looter</h3>
            <ClassStats data={data} kit="looter" />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

function ModeStats({ data, mode }: { data: RoyaleStats; mode: 'solo' | 'civ'; }) {
  return (
    <>
      <p className="flex items-center justify-between gap-2 my-0">
        <FaGamepad />
        <span className="flex-grow font-medium">Games</span>
        <span>{data[mode].gamesPlayed}</span>
      </p>
      <p className="flex items-center justify-between gap-2 my-0">
        <FaTrophy />
        <span className="flex-grow font-medium">Wins</span>
        <span>{data[mode].wins}</span>
      </p>
      <p className="flex items-center justify-between gap-2 my-0">
        <LuSword className="fill-white" />
        <span className="flex-grow font-medium">Kills</span>
        <span>{data[mode].kills}</span>
      </p>
      <p className="flex items-center justify-between gap-2 my-0">
        <LuSwords className="fill-white" />
        <span className="flex-grow font-medium">Assists</span>
        <span>{data[mode].assists}</span>
      </p>
      <p className="flex items-center justify-between gap-2 my-0">
        <FaClock />
        <span className="flex-grow font-medium">Playtime</span>
        <span>{timestamp(data[mode].playtime)}</span>
      </p>
    </>
  );
}

function TopRowCard({ data }: { data: RoyaleStats; }) {
  return (
    <Card className="bg-zinc-800 items-center rounded-lg border-none text-white sm:col-span-2">
      <CardContent className="grid grid-cols-1 gap-y-2 gap-x-12 p-6 sm:grid-cols-3">
        <div className="flex flex-col gap-1 border-b border-b-zinc-600 pb-2 sm:border-none">
          <h3 className="font-bold text-center sm:text-lg sm:text-left">Solo</h3>
          <ModeStats data={data} mode="solo" />
        </div>
        <div className="flex flex-col gap-1 border-b border-b-zinc-600 pb-2 sm:border-none">
          <h3 className="font-bold text-center sm:text-lg sm:text-left">Civilization</h3>
          <ModeStats data={data} mode="civ" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-center sm:text-lg sm:text-left">Misc</h3>
          <p className="flex items-center gap-2 my-0">
            <FaBookOpen />
            <span className="flex-grow font-medium">Legend Crafts</span>
            <span>{data.total.legendaryWeaponsCrafted}</span>
          </p>
          <p className="flex items-center gap-2 my-0">
            <LuSword className="fill-white" />
            <span className="flex-grow font-medium">Legend Kills</span>
            <span>{data.total.legendaryWeaponKills}</span>
          </p>
          <p className="flex items-center gap-2 my-0">
            <FaClock />
            <span className="flex-grow font-medium">Avg Survival</span>
            <span>{timestamp(`0:${data.total.averageTimeSurvived}`)}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function ClassStats({ data, kit }: { data: RoyaleStats; kit: keyof RoyaleStats['classes']; }) {
  return (
    <>
      <p className="flex items-center gap-2 my-0">
        <FaTrophy />
        <span className="flex-grow font-medium">Wins</span>
        <span>{data.classes[kit].wins}</span>
      </p>
      <p className="flex items-center gap-2 my-0">
        <LuSword className="fill-white" />
        <span className="flex-grow font-medium">Kills</span>
        <span>{data.classes[kit].kills}</span>
      </p>
      <p className="flex items-center gap-2 my-0">
        <LuSwords className="fill-white" />
        <span className="flex-grow font-medium">Assists</span>
        <span>{data.classes[kit].assists}</span>
      </p>
      <p className="flex items-center gap-2 my-0">
        <FaCircleXmark />
        <span className="flex-grow font-medium">Games</span>
        <span>{+data.classes[kit].wins + +data.classes[kit].deaths}</span>
      </p>
      <p className="flex items-center gap-2 my-0">
        <FaCircleXmark />
        <span className="flex-grow font-medium">Deaths</span>
        <span>{data.classes[kit].deaths}</span>
      </p>
      <p className="flex items-center gap-2 my-0">
        <FaClock />
        <span className="flex-grow font-medium">Playtime</span>
        <span>{timestamp(data.classes[kit].playtime)}</span>
      </p>
    </>
  );
}
