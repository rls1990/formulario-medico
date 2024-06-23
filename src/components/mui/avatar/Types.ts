export interface AvatarProps {
  src?: string | undefined;
  width?: number | string;
  height?: number | string;
  active?: boolean;
}

export interface ItemMenuProp {
  name: string;
  url: string;
}

export interface MenuAvatarProps extends AvatarProps {
  items: ItemMenuProp[];
}
