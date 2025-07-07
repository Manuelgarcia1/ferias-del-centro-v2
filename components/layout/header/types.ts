export interface NavItem {
  name: string;
  href: string;
}

export interface HeaderProps {
  className?: string;
}

export interface DesktopNavProps {
  navItems: NavItem[];
}

export interface MobileNavProps {
  navItems: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

export interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}
