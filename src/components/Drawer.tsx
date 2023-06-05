import type { PropsWithChildren, FC } from "react";

interface Props extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
}

export const Drawer: FC<Props> = ({ open, onClose, children }) => {
  return (
    <div className="fixed top-0 z-50 flex h-full min-w-full">
      <div
        className={`grow ${
          open ? "backdrop-blur-sm backdrop-brightness-75" : ""
        }`}
        onClick={() => (open ? onClose() : null)}
      />
      <aside className="w-60 bg-red-400 shadow-2xl shadow-black">
        {children}
      </aside>
    </div>
  );
};
