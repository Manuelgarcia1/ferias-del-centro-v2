export interface Stat {
  value: string;
  label: string;
}

export interface StatsHeaderProps {
  isInView: boolean;
}

export interface StatCardProps {
  stat: Stat;
  index: number;
  isInView: boolean;
}

export interface StatsGridProps {
  stats: Stat[];
  isInView: boolean;
}
