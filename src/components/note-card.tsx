export function NoteCard() {
  return (
    <button className="rounded-md outline-none text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-small font-medium text-slate-300">há 4 dias</span>
      <p className="text-small leading-6 text-slate-400">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
        perferendis ea sunt ipsum quaerat totam sed et quasi in. Reprehenderit
        voluptatibus molestiae totam perspiciatis quaerat neque distinctio minus
        porro molestias?
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
}
