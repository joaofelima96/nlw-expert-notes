import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function NewNoteCard() {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);
  const [content, setContent] = useState("");

  const handleStartEditor = () => {
    setShouldShowOnboarding(false);
  };

  const handleContentChanged = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);

    if (event.target.value === "") {
      setShouldShowOnboarding(true);
    }
  };

  const handleSaveNote = (event: React.FormEvent) => {
    event.preventDefault();

    console.log(content);
    toast.success("Nota criada com sucesso!");
    setContent(() => "");
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger
        className="rounded-md outline-none flex flex-col bg-slate-700 text-left p-5 gap-3 hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400"
        onClick={() => setShouldShowOnboarding(true)}
      >
        <span className="text-small font-medium text-slate-200">
          Adicionar nota
        </span>
        <p className="text-small leading-6 text-slate-400">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </Dialog.Trigger>

      {/* Dialog.Porta serve para encapsular o conteúdo e fazer com que ele renderize "fora" do componente */}
      <Dialog.Portal>
        {/* Dialog.Overlay é o componente que renderiza o fundo com opacidade */}
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        {/* Dialog.Content é o componente que renderiza o conteúdo da modal */}
        <Dialog.Content className="z-10 fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none">
          <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>

          <form onSubmit={handleSaveNote} className="flex-1 flex flex-col">
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-small font-medium text-slate-300">
                Adicionar nota
              </span>
              {shouldShowOnboarding ? (
                <p className="text-small leading-6 text-slate-400">
                  Comece{" "}
                  <button className="font-md text-lime-400 hover:underline">
                    gravando uma nota
                  </button>{" "}
                  em áudio ou se preferir{" "}
                  <button
                    className="font-md text-lime-400 hover:underline"
                    onClick={() => handleStartEditor()}
                  >
                    utilize apenas texto.
                  </button>
                </p>
              ) : (
                <textarea
                  autoFocus
                  className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                  onChange={handleContentChanged}
                  value={content}
                />
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500"
            >
              Salvar nota
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
