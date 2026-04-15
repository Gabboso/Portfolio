import Link from "next/link";

export default async function Page() {
  return (
    <div>
      <h1>Blog</h1>
      <p>
        Benvenuto nel mio blog! Qui condivido le mie idee, progetti e pensieri
        su vari argomenti. Resta sintonizzato per aggiornamenti regolari!
      </p>

      <h2>Ultimi Articoli</h2>
      <ul>
        <li>
          <Link href="/blog/come-iniziare-con-nextjs">
            Come Iniziare con Next.js
          </Link>
        </li>
        <li>
          <Link href="/blog/10-consigli-per-sviluppatori-web">
            10 Consigli per Sviluppatori Web
          </Link>
        </li>
        <li>
          <Link href="/blog/il-futuro-del-web-development">
            Il Futuro del Web Development
          </Link>
        </li>
      </ul>
    </div>
  );
}