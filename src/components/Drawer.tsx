import type { PropsWithChildren, FC } from "react";

interface Props extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
}

export const Drawer: FC<Props> = ({ open, onClose, children }) => {
  return (
    <>
      <div
        className={`fixed top-0 h-full w-full grow backdrop-blur-sm backdrop-brightness-75 transition ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed top-0 z-50 h-full w-60 bg-slate-950 shadow-2xl shadow-black transition-all ${
          open ? "-right-0" : "-right-60"
        }`}
      >
        {children}
      </aside>
    </>
  );
};
