
import Feed from '../components/Feed'
export default function Home() {

  return (
    <>
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            AI Destekli İstemleri
            <br className="max-md:hidden"/>
            <span className=" flex sm:h-[83px] h-[43px] text-4xl sm:text-7xl orange_gradient justify-center">Keşfet & Paylaş</span>
        </h1>
        <p className="desc text-center">Promptopia, modern dünyanın yaratıcı istemleri keşfetmesi, oluşturması ve paylaşması için açık kaynaklı bir yapay zeka yönlendirme aracıdır
        </p>
        <Feed/>
    </section>
    </>
  );
}
