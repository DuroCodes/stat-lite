export interface RoyaleStats {
  profile: HopliteProfile;
  total: TotalStats;
  solo: ModeStats;
  civ: ModeStats;
  classes: {
    miner: ClassStats;
    warrior: ClassStats;
    trapper: ClassStats;
    archer: ClassStats;
    looter: ClassStats;
  };
}

export interface HopliteProfile {
  username: string;
  rank: string;
  friendlyRank: string;
  color: string;
  status: string;
  youtube?: string;
  twitch?: string;
  discord?: string;
}

export interface TotalStats {
  gamesPlayed: string;
  wins: string;
  kills: string;
  assists: string;
  playtime: string;
  legendaryWeaponsCrafted: string;
  legendaryWeaponKills: string;
  averageTimeSurvived: string;
}

export interface ModeStats {
  gamesPlayed: string;
  wins: string;
  kills: string;
  assists: string;
  playtime: string;
}

export interface ClassStats {
  wins: string;
  losses: string;
  kills: string;
  deaths: string;
  assists: string;
  playtime: string;
  wlr: string;
  kdr: string;
}
