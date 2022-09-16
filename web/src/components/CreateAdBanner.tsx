import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

export function CreateAdBanner() {
  return (
    <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
      <div className="flex justify-between bg-[#2A2634] py-6 px-8">
        <div className="flex flex-col items-start text-2xl">
          <strong className="font-black text-2xl block text-white">
            Não encontrou seu duo?
          </strong>
          <span className="text-base text-zinc-400">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>
        <Dialog.Trigger asChild>
          <button className="bg-violet-500 text-white inline-flex items-center justify-center gap-3 rounded py-3 px-4 hover:bg-violet-600 transition-colors">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </Dialog.Trigger>
      </div>
    </div>
  );
}
